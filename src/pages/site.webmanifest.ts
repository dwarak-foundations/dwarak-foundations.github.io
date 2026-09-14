import type { APIRoute } from "astro";

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: "Dwarak Foundations",
      short_name: "Dwarak",
      description: "Residential construction and thoughtfully designed homes across Chennai.",
      start_url: "/",
      display: "standalone",
      background_color: "#efeae2",
      theme_color: "#efeae2",
      icons: [
        { src: "/img/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
        { src: "/img/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      ],
    }),
    { headers: { "content-type": "application/manifest+json" } },
  );
