import { getLocalChapter } from "@utils/chapter";
import { absoluteUrl } from "@utils/url";
import { createSitemapUrlset, xmlResponse } from "@utils/sitemap";

export async function GET() {
  const chapters = await getLocalChapter();
  const entries = chapters.flatMap((chapter) =>
    Array.from({ length: chapter.verses_count }, (_, index) => ({
      url: absoluteUrl(`/surah/${chapter.id}/${index + 1}`),
    }))
  );

  return xmlResponse(createSitemapUrlset(entries));
}
