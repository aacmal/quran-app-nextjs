import { absoluteUrl } from "@utils/url";

export type SitemapEntry = {
  url: string;
};

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const createSitemapUrlset = (
  entries: SitemapEntry[]
) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(({ url }) => `  <url><loc>${escapeXml(url)}</loc></url>`)
  .join("\n")}
</urlset>`;

export const createSitemapIndex = (
  paths: string[]
) => `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) => `  <sitemap><loc>${escapeXml(absoluteUrl(path))}</loc></sitemap>`
  )
  .join("\n")}
</sitemapindex>`;

export const xmlResponse = (xml: string) =>
  new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
