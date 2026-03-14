import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response("Missing site URL", { status: 500 });
  }

  const pages = [
    { path: "/", priority: "1.0" },
    { path: "/club", priority: "0.7" },
    { path: "/contact", priority: "0.7" },
    { path: "/politique-de-confidentialite", priority: "0.7" },
  ];

  const urls = pages
    .map(
      (page) => `
  <url>
    <loc>${new URL(page.path, site).href}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
};
