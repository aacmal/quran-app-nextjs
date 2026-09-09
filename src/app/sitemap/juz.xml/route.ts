import { getJuzs } from "@utils/juz";
import { absoluteUrl } from "@utils/url";
import { createSitemapUrlset, xmlResponse } from "@utils/sitemap";

export async function GET() {
  const juzs = await getJuzs();
  const entries = [
    { url: absoluteUrl("/juz") },
    ...juzs.juzs.map((juz) => ({ url: absoluteUrl(`/juz/${juz.id}`) })),
  ];

  return xmlResponse(createSitemapUrlset(entries));
}
