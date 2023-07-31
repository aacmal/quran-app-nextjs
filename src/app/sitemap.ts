import { MetadataRoute } from 'next';

const currentDomain = 'https://quran.acml.me';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${currentDomain}`,
      lastModified: new Date(),
    },
    {
      url: `${currentDomain}/quran/surah`,
      lastModified: new Date(),
    },
    {
      url: `${currentDomain}/quran/juz`,
      lastModified: new Date(),
    },
    {
      url: `${currentDomain}/quran/surah/1`,
      lastModified: new Date(),
    },
    {
      url: `${currentDomain}/quran/juz/1`,
      lastModified: new Date(),
    },
    {
      url: `${currentDomain}/quran/surah/18`,
      lastModified: new Date(),
    },
  ];
}
