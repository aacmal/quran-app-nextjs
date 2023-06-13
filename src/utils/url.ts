export const getBasePath = () =>
  `${process.env.NODE_ENV === 'development' ? 'http' : 'https'}://${
    process.env.VERCEL_URL
  }`;
