export const SITE_URL = 'https://quran.wanakerta.com';

export const getBasePath = () => SITE_URL;

export const absoluteUrl = (path = '/') =>
  new URL(path, `${SITE_URL}/`).toString();
