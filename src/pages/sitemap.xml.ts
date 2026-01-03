import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  const pages = [
    "",
    "club",
    "contact",
    "politique-de-confidentialite",
  ];

  const urls = pages
    .map(
      (page) => `
  <url>
    <loc>${site}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.7"}</priority>
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
