interface Env {
  ASSETS: Fetcher;
  ACCOUNT_ID?: string;
  ANALYTICS_API_TOKEN?: string;
  ANALYTICS_DATASET?: string;
  WEB_ANALYTICS_SITE_TAG?: string;
  GITHUB_CLIENT_ID?: string;
  GITHUB_CLIENT_SECRET?: string;
}

interface AnalyticsRow {
  label: string;
  value: number;
  detail?: string;
}

interface WebAnalyticsGroup {
  count?: number;
  dimensions?: { requestPath?: string };
  sum?: { visits?: number };
}

interface AnalyticsEngineResult {
  data?: Array<Record<string, string | number>>;
}

const noStoreHeaders = {
  "cache-control": "no-store",
  "content-type": "application/json; charset=utf-8",
};

const eventLabels: Record<string, string> = {
  brochure_downloaded: "Brochure downloaded",
  contact_opened: "Contact page opened",
  email_clicked: "Email clicked",
  phone_clicked: "Phone number clicked",
  project_opened: "Project opened",
  projects_opened: "Projects page opened",
};

function cookieValue(request: Request, name: string) {
  const cookies = request.headers.get("cookie") ?? "";
  for (const cookie of cookies.split(";")) {
    const [key, ...value] = cookie.trim().split("=");
    if (key === name) return decodeURIComponent(value.join("="));
  }
  return undefined;
}

function randomState() {
  const bytes = crypto.getRandomValues(new Uint8Array(24));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function oauthPopup(status: "success" | "error", content: Record<string, unknown>) {
  const message = JSON.stringify(`authorization:github:${status}:${JSON.stringify(content)}`).replaceAll(
    "<",
    "\\u003c",
  );
  return `<!doctype html><html><head><meta charset="utf-8"><title>GitHub authorization</title></head><body>
    <p>Completing GitHub authorization...</p>
    <script>
      const receiveMessage = (event) => {
        if (event.source !== window.opener) return;
        window.opener.postMessage(${message}, event.origin);
        window.removeEventListener('message', receiveMessage);
      };
      window.addEventListener('message', receiveMessage);
      window.opener?.postMessage('authorizing:github', '*');
    </script>
  </body></html>`;
}

async function startGitHubAuth(request: Request, env: Env) {
  if (!env.GITHUB_CLIENT_ID) {
    return new Response("GitHub OAuth is not configured.", { status: 503 });
  }

  const requestUrl = new URL(request.url);
  const state = randomState();
  const redirectUri = `${requestUrl.origin}/api/callback`;
  const github = new URL("https://github.com/login/oauth/authorize");
  github.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  github.searchParams.set("redirect_uri", redirectUri);
  github.searchParams.set("scope", "repo user:email");
  github.searchParams.set("state", state);

  return new Response(null, {
    status: 302,
    headers: {
      location: github.toString(),
      "cache-control": "no-store",
      "set-cookie": `decap_oauth_state=${state}; Path=/api/callback; Max-Age=600; HttpOnly; Secure; SameSite=Lax`,
    },
  });
}

async function finishGitHubAuth(request: Request, env: Env) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const expectedState = cookieValue(request, "decap_oauth_state");

  if (!code || !state || !expectedState || state !== expectedState) {
    return new Response(oauthPopup("error", { message: "Invalid or expired OAuth state." }), {
      status: 400,
      headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
    });
  }
  if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
    return new Response(oauthPopup("error", { message: "GitHub OAuth is not configured." }), {
      status: 503,
      headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
    });
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "user-agent": "dwarak-foundations-admin",
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/api/callback`,
    }),
  });
  const token = (await tokenResponse.json()) as { access_token?: string; error_description?: string };
  const success = tokenResponse.ok && token.access_token;

  return new Response(
    oauthPopup(
      success ? "success" : "error",
      success
        ? { token: token.access_token, provider: "github" }
        : { message: token.error_description ?? "GitHub authorization failed." },
    ),
    {
      status: success ? 200 : 401,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
        "set-cookie": "decap_oauth_state=; Path=/api/callback; Max-Age=0; HttpOnly; Secure; SameSite=Lax",
      },
    },
  );
}

async function queryAnalyticsEngine(env: Env, query: string) {
  if (!env.ACCOUNT_ID || !env.ANALYTICS_API_TOKEN) return [];
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${env.ACCOUNT_ID}/analytics_engine/sql`,
    {
      method: "POST",
      headers: { authorization: `Bearer ${env.ANALYTICS_API_TOKEN}` },
      body: query,
    },
  );
  if (!response.ok) throw new Error(`Analytics Engine query failed (${response.status})`);
  return ((await response.json()) as AnalyticsEngineResult).data ?? [];
}

async function getEventAnalytics(env: Env, days: number) {
  const dataset = env.ANALYTICS_DATASET ?? "dwarak_site_events";
  if (!/^[a-zA-Z][a-zA-Z0-9_]{2,63}$/.test(dataset)) throw new Error("Invalid analytics dataset name");

  const where = `timestamp > NOW() - INTERVAL '${days}' DAY`;
  const [totals, events] = await Promise.all([
    queryAnalyticsEngine(env, `SELECT SUM(_sample_interval) AS count FROM ${dataset} WHERE ${where}`),
    queryAnalyticsEngine(
      env,
      `SELECT blob1 AS event, blob3 AS target, SUM(_sample_interval) AS count
       FROM ${dataset} WHERE ${where}
       GROUP BY blob1, blob3 ORDER BY count DESC LIMIT 12`,
    ),
  ]);

  return {
    total: Number(totals[0]?.count ?? 0),
    rows: events.map((row) => ({
      label: eventLabels[String(row.event)] ?? String(row.event),
      detail: row.target ? String(row.target).replaceAll("_", " ") : undefined,
      value: Number(row.count ?? 0),
    })) satisfies AnalyticsRow[],
  };
}

async function getPageAnalytics(env: Env, days: number) {
  if (!env.ACCOUNT_ID || !env.ANALYTICS_API_TOKEN || !env.WEB_ANALYTICS_SITE_TAG) {
    return { visits: 0, pageViews: 0, rows: [] as AnalyticsRow[] };
  }

  const end = new Date();
  const start = new Date(end.getTime() - days * 86_400_000);
  const query = `query WebAnalytics($accountTag: String!, $siteTag: String!, $start: Time!, $end: Time!) {
    viewer {
      accounts(filter: { accountTag: $accountTag }) {
        rumPageloadEventsAdaptiveGroups(
          filter: { siteTag: $siteTag, datetime_geq: $start, datetime_leq: $end }
          limit: 1000
          orderBy: [count_DESC]
        ) {
          count
          dimensions { requestPath }
          sum { visits }
        }
      }
    }
  }`;
  const response = await fetch("https://api.cloudflare.com/client/v4/graphql", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.ANALYTICS_API_TOKEN}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        accountTag: env.ACCOUNT_ID,
        siteTag: env.WEB_ANALYTICS_SITE_TAG,
        start: start.toISOString(),
        end: end.toISOString(),
      },
    }),
  });
  const result = (await response.json()) as {
    data?: { viewer?: { accounts?: Array<{ rumPageloadEventsAdaptiveGroups?: WebAnalyticsGroup[] }> } };
    errors?: Array<{ message: string }>;
  };
  if (!response.ok || result.errors?.length) {
    throw new Error(result.errors?.[0]?.message ?? `Web Analytics query failed (${response.status})`);
  }

  const groups = result.data?.viewer?.accounts?.[0]?.rumPageloadEventsAdaptiveGroups ?? [];
  return {
    visits: groups.reduce((total, group) => total + Number(group.sum?.visits ?? 0), 0),
    pageViews: groups.reduce((total, group) => total + Number(group.count ?? 0), 0),
    rows: groups.slice(0, 12).map((group) => ({
      label: group.dimensions?.requestPath || "/",
      value: Number(group.count ?? 0),
    })) satisfies AnalyticsRow[],
  };
}

async function analyticsResponse(request: Request, env: Env) {
  const requestedDays = Number(new URL(request.url).searchParams.get("days") ?? 30);
  const days = [7, 30, 90].includes(requestedDays) ? requestedDays : 30;
  const notices: string[] = [];

  const [pagesResult, eventsResult] = await Promise.allSettled([
    getPageAnalytics(env, days),
    getEventAnalytics(env, days),
  ]);
  const pages = pagesResult.status === "fulfilled"
    ? pagesResult.value
    : { visits: 0, pageViews: 0, rows: [] as AnalyticsRow[] };
  const events = eventsResult.status === "fulfilled"
    ? eventsResult.value
    : { total: 0, rows: [] as AnalyticsRow[] };

  if (!env.ACCOUNT_ID || !env.ANALYTICS_API_TOKEN) {
    notices.push("Add the Cloudflare account ID and analytics API token to connect reports.");
  } else {
    if (!env.WEB_ANALYTICS_SITE_TAG) notices.push("Add the Web Analytics site tag to load page reports.");
    if (pagesResult.status === "rejected") notices.push("Page analytics are temporarily unavailable.");
    if (eventsResult.status === "rejected") notices.push("Click analytics are temporarily unavailable.");
  }

  return new Response(
    JSON.stringify({
      configured: Boolean(env.ACCOUNT_ID && env.ANALYTICS_API_TOKEN),
      range: { days },
      totals: { visits: pages.visits, pageViews: pages.pageViews, actions: events.total },
      pages: pages.rows,
      events: events.rows,
      notices,
    }),
    { headers: noStoreHeaders },
  );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/auth") {
      return request.method === "GET"
        ? startGitHubAuth(request, env)
        : new Response("Method not allowed", { status: 405, headers: { allow: "GET" } });
    }
    if (url.pathname === "/api/callback") {
      return request.method === "GET"
        ? finishGitHubAuth(request, env)
        : new Response("Method not allowed", { status: 405, headers: { allow: "GET" } });
    }
    if (url.pathname === "/api/analytics") {
      return request.method === "GET"
        ? analyticsResponse(request, env)
        : new Response("Method not allowed", { status: 405, headers: { allow: "GET" } });
    }
    if (url.pathname.startsWith("/api/")) return new Response("Not found", { status: 404 });

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
