# Cloudflare deployment

The system has two independently deployed surfaces:

| Surface | Product | Address |
| --- | --- | --- |
| Public website | Cloudflare Pages | `dwarakfoundations.com` |
| Event collector | Cloudflare Worker route | `dwarakfoundations.com/api/events` |

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

Keep branch preview deployments enabled for release verification. Preview deployments should remain non-indexable; Cloudflare adds an `X-Robots-Tag: noindex` header to Pages previews.

After the Cloudflare deployment is verified, disable the repository's old GitHub Pages deployment to avoid maintaining two production targets.

## 3. Web Analytics

Enable Cloudflare Web Analytics for `dwarakfoundations.com` in the Cloudflare dashboard. Automatic beacon injection is preferred because the domain is proxied by Cloudflare.

## 4. Event Worker

The Worker records only the approved event names in `workers/events/src/index.ts`. It does not write IP addresses, query strings, email addresses, or persistent visitor identifiers.

Validate and deploy it:

```sh
npx wrangler deploy --dry-run --config workers/events/wrangler.jsonc
npx wrangler deploy --config workers/events/wrangler.jsonc
```

The `EVENTS` binding creates or connects the `dwarak_site_events` Analytics Engine dataset. The route is limited to `dwarakfoundations.com/api/events`.

Add a Cloudflare rate-limiting rule for `POST /api/events` before launch. Origin and payload validation already exist in the Worker; edge rate limiting protects the public endpoint from deliberate event inflation.

## 5. Verification

Before changing production DNS, verify:

```sh
npm test
npx wrangler deploy --dry-run --config workers/events/wrangler.jsonc
```

Then perform these browser checks:

1. Open the Pages preview on desktop and mobile.
2. Verify all nine project pages, images, maps, and the Atlantis brochure.
3. Check the legacy URL redirects in `public/_redirects`.
4. Click a tracked phone, email, project, and brochure link.
5. Confirm the event Worker returns successful responses and records events in Analytics Engine.
6. Confirm page views and Core Web Vitals appear in Cloudflare Web Analytics.

## 6. Rollback

For content changes, revert the publishing commit in GitHub. For an urgent site rollback, select the preceding successful Cloudflare Pages deployment, then revert Git so the source and deployed state agree.

Worker versions can be rolled back independently from Pages through the Cloudflare dashboard or Wrangler version commands.
