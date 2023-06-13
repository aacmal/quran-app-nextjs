import Chapters from '@components/chapters';
import { getAllChaptersData } from '@utils/chapter';
import { websiteDescription } from '@utils/seo';
import { Metadata } from 'next';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

async function getChapterData() {
  const res = await getAllChaptersData();
  return res.chapters;
}

export const metadata: Metadata = {
  title: 'Quran',
  description: websiteDescription,
  robots: IS_PRODUCTION ? 'index, follow' : 'noindex, nofollow',
  openGraph: {
    type: 'website',
    locale: 'id',
    title: 'Baca Quran',
    description: websiteDescription,
  },
};

export default async function HomePage() {
  const allChapters = await getChapterData();
  return <Chapters chapterLists={allChapters} />;
}
