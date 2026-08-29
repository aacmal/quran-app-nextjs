import type { Metadata } from 'next';
import { absoluteUrl, SITE_URL } from './url';

export const siteName = 'Laman Ayat';

export const websiteDescription =
  "Baca Al-Qur'an online berdasarkan 114 surat atau 30 juz. Tersedia teks Arab, transliterasi Latin, terjemahan bahasa Indonesia, tafsir, dan audio murottal.";

export const staticDescription = {
  '/': websiteDescription,
  '/surah':
    "Pilih satu dari 114 surat Al-Qur'an untuk membaca teks Arab, transliterasi Latin, terjemahan bahasa Indonesia, tafsir, dan mendengarkan audio murottal.",
  '/juz':
    "Baca Al-Qur'an 30 juz dalam teks Arab, transliterasi Latin, terjemahan bahasa Indonesia, dan tafsir. Pilih juz untuk melanjutkan bacaan.",
  '/hadits':
    'Baca hadits secara online dari berbagai kitab hadits dan lengkapi pemahaman dengan terjemahan.',
};

export const staticTitle = {
  '/': "Baca Al-Qur'an Online: 30 Juz & Terjemahan",
  '/surah': "114 Surat Al-Qur'an: Arab, Latin & Terjemahan",
  '/juz': "Al-Qur'an 30 Juz: Arab, Latin & Terjemahan",
  '/hadits': 'Baca Hadits Online',
};

export const canonicalUrl = new URL(`${SITE_URL}/`);

const IS_INDEXABLE = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === 'production'
  : process.env.NODE_ENV === 'production';

export const indexableRobots: Metadata['robots'] = {
  index: IS_INDEXABLE,
  follow: IS_INDEXABLE,
  googleBot: {
    index: IS_INDEXABLE,
    follow: IS_INDEXABLE,
  },
};

export const noIndexRobots: Metadata['robots'] = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
};

export const defaultOpenGraph: Metadata["openGraph"] = {
  title: staticTitle["/"],
  type: 'website',
  locale: 'id_ID',
  description: staticDescription["/"],
  siteName,
  url: canonicalUrl,
  images: [
    {
      url: absoluteUrl('/quranapp.jpg'),
      alt: `${siteName} - Baca Al-Qur'an Online`,
    },
  ],
};

export const defaultTwitter: Metadata["twitter"] = {
  title: staticTitle["/"],
  card: 'summary_large_image',
  description: staticDescription["/"],
  images: [absoluteUrl('/quranapp.jpg')],
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  type?: 'website' | 'article';
};

export function createPageMetadata({
  title,
  description,
  path,
  imagePath = '/quranapp.jpg',
  type = 'website',
}: PageMetadataOptions): Metadata {
  const image = absoluteUrl(imagePath);
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: indexableRobots,
    openGraph: {
      ...defaultOpenGraph,
      type,
      title,
      description,
      url,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      ...defaultTwitter,
      title,
      description,
      images: [image],
    },
  };
}

export const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: siteName,
      alternateName: staticTitle['/'],
      url: SITE_URL,
      description: websiteDescription,
      inLanguage: 'id-ID',
    },
    {
      '@type': 'WebApplication',
      '@id': `${SITE_URL}/#application`,
      name: siteName,
      url: SITE_URL,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      inLanguage: 'id-ID',
      image: absoluteUrl('/quranapp.jpg'),
    },
  ],
};

export const serializeJsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, '\\u003c');

export const createMetaDescription = (text: string, maxLength = 165) => {
  const normalizedText = text
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (normalizedText.length <= maxLength) return normalizedText;

  const truncatedText = normalizedText.slice(0, maxLength + 1);
  const lastCompleteWord = truncatedText.lastIndexOf(' ');

  return `${truncatedText
    .slice(0, lastCompleteWord)
    .replace(/[,:;.-]+$/, '')}…`;
};

export const formatRevelationType = (place: string) => {
  const normalizedPlace = place.toLowerCase();

  if (normalizedPlace === 'makkah') return 'Makkiyah';
  if (normalizedPlace === 'madinah') return 'Madaniyah';

  return place;
};
