import { getLocalChapter } from "@utils/chapter";
import { absoluteUrl } from "@utils/url";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const chapters = await getLocalChapter();
  const lastModified = new Date();

  const surahPages = chapters.flatMap((chapter) => {
    const surahPath = `/surah/${chapter.id}`;
    const ayahPages = Array.from({ length: chapter.verses_count }, (_, index) => ({
      url: absoluteUrl(`${surahPath}/${index + 1}`),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    return [
      {
        url: absoluteUrl(surahPath),
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      },
      {
        url: absoluteUrl(`${surahPath}/info`),
        lastModified,
        changeFrequency: 'yearly' as const,
        priority: 0.5,
      },
      ...ayahPages,
    ];
  });

  const juzPages = Array.from({ length: 30 }, (_, index) => ({
    url: absoluteUrl(`/juz/${index + 1}`),
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: absoluteUrl('/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl('/juz'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...juzPages,
    ...surahPages,
  ];
}
