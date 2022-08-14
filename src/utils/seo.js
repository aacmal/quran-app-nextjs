import { NextSeoProps } from 'next-seo';
import { getBasePath } from './url';

export const config = {
    siteName: 'Quran App',
    websiteLogo: `${getBasePath()}/quranapp.jpg`,
    twitterHandle: '@quran_app',
    twitterCardType: 'summary_large_image',
    facebookApp: '5277775832307938',
};
  

const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';
export function createSEOConfig({
  title,
  description,
  canonicalUrl,
  locale,
}){
  const seoTitle = title || '';

  return {
    title: seoTitle,
    description,
    titleTemplate: '%s - Quran.com',
    defaultTitle: config.siteName,
    dangerouslySetAllPagesToNoFollow: !isProduction, // @see https://github.com/garmeeh/next-seo#dangerouslySetAllPagesToNoFollow
    dangerouslySetAllPagesToNoIndex: !isProduction, // @see https://github.com/garmeeh/next-seo#dangerouslySetAllPagesToNoIndex
    canonical: canonicalUrl,
    openGraph: {
      type: 'website',
      locale: 'id',
      url: canonicalUrl,
      title: seoTitle,
      description,
      images: [
        {
          url: config.websiteLogo,
          width: 2026,
          height: 875,
          alt: config.siteName,
        },
      ],
      // eslint-disable-next-line @typescript-eslint/naming-convention
      site_name: config.siteName,
    },
    facebook: {
      appId: config.facebookApp,
    },
    twitter: {
      handle: config.twitterHandle,
      site: config.twitterHandle,
      cardType: config.twitterCardType,
    },
    additionalMetaTags: [
      {
        name: 'Charset',
        content: 'UTF-8',
      },
      {
        name: 'Distribution',
        content: 'Global', // indicates that your webpage is intended for everyone
      },
      {
        name: 'Rating',
        content: 'General', // lets the younger web-surfers know the content is appropriate
      },
      {
        name: 'theme-color',
        content: '#fff', // placeholder
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    ],
  };
}
