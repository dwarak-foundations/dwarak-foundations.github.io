# Dwarak Foundations

The public website and analytics services for Dwarak Foundations Chennai LLP.

## Applications

- `src/pages/`: statically generated Astro website.
- `src/content/`: versioned project and testimonial content.
- `workers/events/`: first-party interaction event collector.
- `assets/`: original media. The build creates an optimized, publishable `public/` directory.

The previous Gulp/Bootstrap files remain in the repository as migration reference but are excluded from all production builds.

## Local setup and testing

### 1. Select Node.js

The project requires the Node version in `.nvmrc` (`22.19.0`). With `nvm` installed:

```sh
nvm install
nvm use
node --version
```

### 2. Install dependencies

Use the lockfile for a reproducible installation:

```sh
npm ci
```

### 3. Run the automated tests

```sh
npm test
```

This validates Astro and TypeScript, builds the public site, type-checks the event Worker, confirms that 15 HTML pages are generated, and checks their local links. A successful run ends with `Validated 15 HTML pages and their local links.`

### 4. Run the development site

```sh
npm run dev
```

Open the URL printed by Astro, normally <http://localhost:4321>. Check the home, about, projects, testimonials, contact, all nine individual project pages, and a nonexistent URL for the 404 page. Test desktop and mobile widths, navigation, project images, maps, the Atlantis brochure, and phone and email links.

The public site sends tracked interactions to `/api/events`. A local `404` for that endpoint is expected when only Astro is running because the Cloudflare event Worker is a separate service.

### 5. Preview the production build

Stop the development server with `Ctrl+C`, then run:

```sh
npm run build
npm run preview
```

Open the printed preview URL. Cloudflare `_redirects` rules are not fully emulated by Astro preview and should be verified in a Cloudflare Pages preview deployment.

### 6. Test the event Worker locally

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

## Deployment

See [`DEPLOYMENT.md`](DEPLOYMENT.md) for Cloudflare Pages, the event Worker, analytics, DNS, and launch instructions.
