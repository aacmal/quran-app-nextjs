const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  fallbacks: {
    document: "/~offline",
  }
});

const config = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/quran/surah',
        permanent: false
      },
      {
        source: '/juz',
        destination: '/quran/juz',
        permanent: false
      },
      {
        source: '/surah',
        destination: '/quran/surah',
        permanent: false
      },
      {
        source: '/surah/:id',
        destination: '/quran/surah/:id',
        permanent: false
      },
      {
        source: '/surah/:id/:ayah',
        destination: '/quran/surah/:id/:ayah',
        permanent: false
      },
      {
        source: '/juz/:id',
        destination: '/quran/juz/:id',
        permanent: false
      }
    ]
  },
  experimental: {
    scrollRestoration: true,
  },
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // i18n: {
  //   localeDetection: false,
  //   // These are all the locales you want to support in
  //   // your application
  //   locales: ['id', 'en'],
  //   // This is the default locale you want to be used when visiting
  //   // a non-locale prefixed path e.g. `/hello`
  //   defaultLocale: 'id',
  // },
}


/** @type {import('next').NextConfig} */
const nextConfig = withPWA(config)


module.exports = nextConfig
