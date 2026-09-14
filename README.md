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

## Development

Use the Node version in `.nvmrc`.

```sh
npm install
npm run dev
```

Useful commands:

```sh
npm run build
npm test
npm run cf:events
npm run cf:admin
```

`npm run build` validates Astro content, builds the static website, type-checks both Workers, and bundles the admin application.

## Content

Each project is a Markdown file in `src/content/projects/`. Each testimonial is in `src/content/testimonials/`. The schemas in `src/content.config.ts` prevent incomplete content from reaching production.

The Decap CMS configuration is in `admin-app/public/content/config.yml`. Published CMS edits are committed to GitHub and trigger a new static Cloudflare Pages build.

## Deployment

See [`DEPLOYMENT.md`](DEPLOYMENT.md) for Cloudflare Pages, Workers, Access, GitHub OAuth, analytics, DNS, and launch instructions.
