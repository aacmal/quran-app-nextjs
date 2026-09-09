import { createSitemapIndex, xmlResponse } from '@utils/sitemap';

export function GET() {
  return xmlResponse(
    createSitemapIndex([
      '/sitemap/juz.xml',
      '/sitemap/surat.xml',
      '/sitemap/ayat.xml',
    ])
  );
}