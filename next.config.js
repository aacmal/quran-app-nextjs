const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  fallbacks: {
    document: "/~offline",
  }
});

/** @type {import('next').NextConfig} */
const config = {
  async redirects() {
    return [
      {
        source: "/surah/:chapterId/opengraph-image",
        destination: "/og/surah/:chapterId",
        permanent: true,
      },
      {
        source: "/surah/:chapterId/:ayahId/opengraph-image",
        destination: "/og/surah/:chapterId/:ayahId",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/kebijakan-privasi",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/syarat-ketentuan",
        permanent: true,
      },
      {
        source: "/surah",
        destination: "/",
        permanent: true,
      },
    ];
  },
  // experimental: {
  //   scrollRestoration: true,
  // },
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
