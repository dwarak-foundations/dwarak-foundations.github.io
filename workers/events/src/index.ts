interface Env {
  EVENTS: AnalyticsEngineDataset;
  ENVIRONMENT?: string;
}

interface EventPayload {
  event: string;
  page: string;
  target: string;
}

const allowedEvents = new Set([
  "brochure_downloaded",
  "contact_opened",
  "email_clicked",
  "phone_clicked",
  "project_opened",
  "projects_opened",
]);

const jsonHeaders = {
  "cache-control": "no-store",
  "content-type": "application/json; charset=utf-8",
};

function isValidPayload(value: unknown): value is EventPayload {
  if (!value || typeof value !== "object") return false;
  const payload = value as Record<string, unknown>;
  return (
    typeof payload.event === "string" &&
    allowedEvents.has(payload.event) &&
    typeof payload.page === "string" &&
    payload.page.startsWith("/") &&
    payload.page.length <= 160 &&
    typeof payload.target === "string" &&
    payload.target.length <= 100
  );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname !== "/api/events") {
      return new Response("Not found", { status: 404 });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...jsonHeaders, allow: "POST" },
      });
    }

    const origin = request.headers.get("origin");
    const validOrigin =
      origin === "https://dwarakfoundations.com" ||
      origin === "https://www.dwarakfoundations.com" ||
      (env.ENVIRONMENT === "development" && origin?.startsWith("http://localhost:"));
    if (!validOrigin) {
      return new Response(JSON.stringify({ error: "Invalid origin" }), {
        status: 403,
        headers: jsonHeaders,
      });
    }

    const length = Number(request.headers.get("content-length") ?? 0);
    if (length > 1024) {
      return new Response(JSON.stringify({ error: "Payload too large" }), {
        status: 413,
        headers: jsonHeaders,
      });
    }

    let payload: unknown;
    try {
      const body = await request.text();
      if (body.length > 1024) {
        return new Response(JSON.stringify({ error: "Payload too large" }), {
          status: 413,
          headers: jsonHeaders,
        });
      }
      payload = JSON.parse(body);
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: jsonHeaders,
      });
    }

    if (!isValidPayload(payload)) {
      return new Response(JSON.stringify({ error: "Invalid event" }), {
        status: 400,
        headers: jsonHeaders,
      });
    }

    env.EVENTS.writeDataPoint({
      indexes: [payload.event],
      blobs: [payload.event, payload.page.split("?")[0], payload.target],
      doubles: [1],
    });

    console.log(JSON.stringify({ type: "analytics_event", event: payload.event }));
    return new Response(null, {
      status: 204,
      headers: { "cache-control": "no-store" },
    });
  },
} satisfies ExportedHandler<Env>;
