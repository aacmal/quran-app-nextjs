/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects(){
    return [
      {
        source: '/surah',
        destination: '/',
        permanent: true
      },
      {
        source: '/juz',
        destination: '/',
        permanent: true
      }
    ]
  },

  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n: {
    localeDetection: false,
    // These are all the locales you want to support in
    // your application
    locales: ['id', 'en'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'id',
  },
}

module.exports = nextConfig
