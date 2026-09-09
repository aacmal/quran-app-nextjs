import { getLocalChapter } from "@utils/chapter";
import { absoluteUrl } from "@utils/url";
import { createSitemapUrlset, xmlResponse } from "@utils/sitemap";

export async function GET() {
  const chapters = await getLocalChapter();
  const entries = [
    { url: absoluteUrl("/") },
    ...chapters.flatMap((chapter) => [
      { url: absoluteUrl(`/surah/${chapter.id}`) },
      { url: absoluteUrl(`/surah/${chapter.id}/info`) },
    ]),
  ];

  return xmlResponse(createSitemapUrlset(entries));
}
