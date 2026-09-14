# Dwarak Foundations

The public website, content editor, and analytics services for Dwarak Foundations Chennai LLP.

## Applications

- `src/pages/`: statically generated Astro website.
- `src/content/`: versioned project and testimonial content.
- `admin-app/`: protected content and analytics dashboard.
- `workers/events/`: first-party interaction event collector.
- `workers/admin/`: admin assets, GitHub OAuth, and analytics API.
- `assets/`: original media. The build creates an optimized, publishable `public/` directory.

The previous Gulp/Bootstrap files remain in the repository as migration reference but are excluded from all production builds.

## Local setup and testing

### 1. Check out the site branch

Before the Astro migration is merged, switch to its branch and update it:

```sh
git switch astro-migration
git pull
```

### 2. Select Node.js

The project requires the Node version in `.nvmrc` (`22.19.0`). With `nvm` installed:

```sh
nvm install
nvm use
node --version
```

### 3. Install dependencies

Use the lockfile for a reproducible installation:

```sh
npm ci
```

### 4. Run the automated tests

```sh
npm test
```

This validates Astro and TypeScript, builds the public site and admin application, type-checks both Workers, confirms that 15 HTML pages are generated, and checks their local links. A successful run ends with `Validated 15 HTML pages and their local links.` Decap CMS bundle-size and dependency `eval` warnings do not fail the test.

### 5. Run the development site

```sh
npm run dev
```

Open the URL printed by Astro, normally <http://localhost:4321>. Check the home, about, projects, testimonials, contact, all nine individual project pages, and a nonexistent URL for the 404 page. Test desktop and mobile widths, navigation, project images, maps, the Atlantis brochure, and phone and email links.

The public site sends tracked interactions to `/api/events`. A local `404` for that endpoint is expected when only Astro is running because the Cloudflare event Worker is a separate service.

### 6. Preview the production build

Stop the development server with `Ctrl+C`, then run:

```sh
npm run build
npm run preview
```

Open the printed preview URL. Cloudflare `_redirects` rules are not fully emulated by Astro preview and should be verified in a Cloudflare Pages preview deployment.

### 7. Test the admin application locally

```sh
npm run build:admin
npm run cf:admin
```

Open the URL printed by Wrangler, normally <http://localhost:8787>. This verifies the admin shell and its unconfigured analytics state. Live analytics require the credentials documented in `DEPLOYMENT.md`.

GitHub CMS login is intentionally configured for the production hostname and the `main` branch. Test login and content publishing on the protected admin hostname after this branch is merged and its Access and OAuth configuration is complete.

### 8. Test the event Worker locally

Start the Worker:

```sh
npx wrangler dev --config workers/events/wrangler.jsonc --var ENVIRONMENT:development
```

From another terminal, send a valid event:

```sh
curl -i \
  -X POST http://localhost:8787/api/events \
  -H "Origin: http://localhost:4321" \
  -H "Content-Type: application/json" \
  --data '{"event":"projects_opened","page":"/","target":"projects"}'
```

A successful request returns `HTTP/1.1 204 No Content`.

## Content

Each project is a Markdown file in `src/content/projects/`. Each testimonial is in `src/content/testimonials/`. The schemas in `src/content.config.ts` prevent incomplete content from reaching production.

The Decap CMS configuration is in `admin-app/public/content/config.yml`. Published CMS edits are committed to GitHub and trigger a new static Cloudflare Pages build.

## Deployment

See [`DEPLOYMENT.md`](DEPLOYMENT.md) for Cloudflare Pages, Workers, Access, GitHub OAuth, analytics, DNS, and launch instructions.
