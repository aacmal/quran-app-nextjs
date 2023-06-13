import { NextSeoProps } from 'next-seo';
import { getBasePath } from './url';
import { Metadata } from 'next';
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types';

export const websiteDescription =
  'Baca Quran adalah aplikasi web interaktif yang memungkinkan pengguna untuk membaca, mencari, dan menjelajahi teks suci Al-Quran secara digital. Aplikasi ini dilengkapi dengan berbagai fitur yang memudahkan pengguna dalam mempelajari dan meresapi ayat-ayat Al-Quran, seperti terjemahan, tafsir, dan audio.';

export const config = {
  siteName: 'Quran App',
  websiteLogo: `${getBasePath()}/quranapp.jpg`,
  twitterHandle: '@quran_app',
  twitterCardType: 'summary_large_image',
  facebookApp: '5277775832307938',
};

export const staticDescription = {
  '/': 'Pustaka Islam adalah aplikasi untuk membaca Quran, Hadits, dan Doa',
  '/quran/surah':
    'Baca Quran secara online yang memungkinkan pengguna untuk membaca, mencari, dan menjelajahi teks suci Al-Quran secara digital. Aplikasi ini dilengkapi dengan berbagai fitur yang memudahkan pengguna dalam mempelajari dan meresapi ayat-ayat Al-Quran, seperti terjemahan, tafsir, dan audio dengan berbagai pilihan qori.',
  '/quran/juz': 'Baca Quran berdasarkan juz',
};

export const staticTitle = {
  '/': 'Pustaka Islam - Baca Quran, Hadits, dan Doa',
  '/quran/surah': 'Baca Quran - Surah',
  '/quran/juz': 'Baca Quran - Juz',
};

export const canonicalUrl = new URL(getBasePath());

export const defaultOpenGraph: Metadata['openGraph'] = {
  title: staticTitle['/'],
  type: 'website',
  locale: 'id',
  description: staticDescription['/'],
  images: '/quranapp.jpg',
  siteName: 'Pustaka Islam',
  url: canonicalUrl.hostname,
};

export const defaultTwitter: Metadata['twitter'] = {
  title: staticTitle['/'],
  creator: '@acmaul',
  card: 'summary_large_image',
  images: '/quranapp.jpg',
  description: staticDescription['/'],
};

// export function createSEOConfig({ title, description, canonicalUrl, locale }) {
//   const seoTitle = title || '';

//   return {
//     title: seoTitle,
//     description,
//     titleTemplate: '%s - Quran.com',
//     defaultTitle: config.siteName,
//     dangerouslySetAllPagesToNoFollow: !isProduction, // @see https://github.com/garmeeh/next-seo#dangerouslySetAllPagesToNoFollow
//     dangerouslySetAllPagesToNoIndex: !isProduction, // @see https://github.com/garmeeh/next-seo#dangerouslySetAllPagesToNoIndex
//     canonical: canonicalUrl,
//     openGraph: {
//       type: 'website',
//       locale: 'id',
//       url: canonicalUrl,
//       title: seoTitle,
//       description,
//       images: [
//         {
//           url: config.websiteLogo,
//           width: 2026,
//           height: 875,
//           alt: config.siteName,
//         },
//       ],
//       site_name: config.siteName,
//     },
//     facebook: {
//       appId: config.facebookApp,
//     },
//     twitter: {
//       handle: config.twitterHandle,
//       site: config.twitterHandle,
//       cardType: config.twitterCardType,
//     },
//     additionalMetaTags: [
//       {
//         name: 'Charset',
//         content: 'UTF-8',
//       },
//       {
//         name: 'Distribution',
//         content: 'Global', // indicates that your webpage is intended for everyone
//       },
//       {
//         name: 'Rating',
//         content: 'General', // lets the younger web-surfers know the content is appropriate
//       },
//       {
//         name: 'theme-color',
//         content: '#fff', // placeholder
//       },
//       {
//         name: 'viewport',
//         content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
//       },
//     ],
//   };
// }
