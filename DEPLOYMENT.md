# Cloudflare deployment

The system has three independently deployed surfaces:

| Surface | Product | Address |
| --- | --- | --- |
| Public website | Cloudflare Pages | `dwarakfoundations.com` |
| Event collector | Cloudflare Worker route | `dwarakfoundations.com/api/events` |
| Admin | Cloudflare Worker with static assets | `admin.dwarakfoundations.com` |

Do not deploy the admin hostname until a Cloudflare Access policy has been created for it.

## 1. Authenticate Wrangler

```sh
npx wrangler login
npx wrangler whoami
```

No Cloudflare credentials or account identifiers belong in Git.

## 2. Public website

Push the repository to GitHub, then create a Cloudflare Pages project connected to `dwarak-foundations/dwarak-foundations.github.io`.

Use these build settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build:site` |
| Output directory | `dist` |
| Root directory | `/` |
| Node version | `22.19.0` or newer Node 22 |

Add `dwarakfoundations.com` and `www.dwarakfoundations.com` as Pages custom domains. The generated `_redirects` file preserves the old `.html` URLs.

Pages `_redirects` files do not support domain-level source rules. In **Rules > Redirect Rules**, create a Single Redirect for requests where the hostname equals `www.dwarakfoundations.com`. Preserve the path and query string, change the hostname to `dwarakfoundations.com`, and use status `301`. This makes the apex domain canonical.

Keep branch preview deployments enabled. Decap's editorial workflow uses them to review content before publication. Preview deployments should remain non-indexable; Cloudflare adds an `X-Robots-Tag: noindex` header to Pages previews.

After the Cloudflare deployment is verified, disable the repository's old GitHub Pages deployment to avoid maintaining two production targets.

## 3. Web Analytics

Enable Cloudflare Web Analytics for `dwarakfoundations.com` in the Cloudflare dashboard. Automatic beacon injection is preferred because the domain is proxied by Cloudflare.

Record the Web Analytics site tag. It is required only by the custom admin report; it is not a visitor secret.

Create a narrowly scoped Cloudflare API token with account analytics read access. This token is used server-side by the admin Worker and must never be placed in browser code or committed.

## 4. Event Worker

The Worker records only the approved event names in `workers/events/src/index.ts`. It does not write IP addresses, query strings, email addresses, or persistent visitor identifiers.

Validate and deploy it:

```sh
npx wrangler deploy --dry-run --config workers/events/wrangler.jsonc
npx wrangler deploy --config workers/events/wrangler.jsonc
```

The `EVENTS` binding creates or connects the `dwarak_site_events` Analytics Engine dataset. The route is limited to `dwarakfoundations.com/api/events`.

Add a Cloudflare rate-limiting rule for `POST /api/events` before launch. Origin and payload validation already exist in the Worker; edge rate limiting protects the public endpoint from deliberate event inflation.

## 5. Protect the admin hostname

In Cloudflare Zero Trust, create a self-hosted Access application for `admin.dwarakfoundations.com`.

Use an allow policy containing only the administrator email addresses or identity-provider group. Require MFA through the identity provider where possible. Do not create a bypass policy for the admin hostname.

The admin Worker has `workers_dev` disabled, so the Access-protected custom domain is its only public route.

## 6. GitHub OAuth

Create a GitHub OAuth application under the GitHub organization or trusted administrator account.

| GitHub OAuth setting | Value |
| --- | --- |
| Homepage URL | `https://admin.dwarakfoundations.com` |
| Authorization callback URL | `https://admin.dwarakfoundations.com/api/callback` |

GitHub provides a client ID and client secret. Decap's GitHub backend requires repository write access; only trusted repository collaborators should be allowed through Cloudflare Access.

## 7. Admin Worker

Build the admin assets:

```sh
npm run build:admin
```

Deploy the Worker after the Access application exists:

```sh
npx wrangler deploy --dry-run --config workers/admin/wrangler.jsonc
npx wrangler deploy --config workers/admin/wrangler.jsonc
```

Add these Worker secrets using Wrangler. Enter each value only at Wrangler's prompt:

```sh
npx wrangler secret put GITHUB_CLIENT_ID --config workers/admin/wrangler.jsonc
npx wrangler secret put GITHUB_CLIENT_SECRET --config workers/admin/wrangler.jsonc
npx wrangler secret put ACCOUNT_ID --config workers/admin/wrangler.jsonc
npx wrangler secret put ANALYTICS_API_TOKEN --config workers/admin/wrangler.jsonc
npx wrangler secret put WEB_ANALYTICS_SITE_TAG --config workers/admin/wrangler.jsonc
```

The non-secret dataset name is already defined in `workers/admin/wrangler.jsonc`.

## 8. Verification

Before changing production DNS, verify:

```sh
npm test
npx wrangler deploy --dry-run --config workers/events/wrangler.jsonc
npx wrangler deploy --dry-run --config workers/admin/wrangler.jsonc
```

Then perform these browser checks:

1. Open the Pages preview on desktop and mobile.
2. Verify all nine project pages, images, maps, and the Atlantis brochure.
3. Check the legacy URL redirects in `public/_redirects`.
4. Confirm that unauthenticated users cannot reach the admin hostname.
5. Sign into `/content/`, create a draft project, review its preview, and publish it.
6. Click a tracked phone, email, project, and brochure link.
7. Confirm those events appear in the admin dashboard after Analytics Engine processing.
8. Confirm page views and Core Web Vitals appear in Cloudflare Web Analytics.

## 9. Rollback

For content changes, revert the publishing commit in GitHub. For an urgent site rollback, select the preceding successful Cloudflare Pages deployment, then revert Git so the source and deployed state agree.

Worker versions can be rolled back independently from Pages through the Cloudflare dashboard or Wrangler version commands.
