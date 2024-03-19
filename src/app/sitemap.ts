import { getAllChaptersData } from "@utils/chapter";
import { MetadataRoute } from "next";

async function getChapterData() {
  const res = await getAllChaptersData();
  return res.chapters;
}

const currentDomain = "https://quran.acml.me";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getChapterData();

  const surahMap = data.map((d) => ({
    url: `${currentDomain}/surah/${d.id}`,
    lastModified: new Date(),
    priority: 4,
  })) satisfies MetadataRoute.Sitemap;
  return [
    {
      url: `${currentDomain}/`,
      lastModified: new Date(),
      priority: 6,
    },
    {
      url: `${currentDomain}/juz`,
      lastModified: new Date(),
      priority: 6,
    },
    ...surahMap,
  ];
}
