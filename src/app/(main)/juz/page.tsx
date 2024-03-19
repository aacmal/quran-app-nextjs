import JuzsView from '@components/chapters/JuzsView';
import { getAllChaptersData } from '@utils/chapter';
import { getJuzs } from '@utils/juz';
import { canonicalUrl, staticDescription } from '@utils/seo';
import { Metadata } from 'next';
import React from 'react';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const metadata: Metadata = {
  title: 'Baca Quran - Juz',
  description: staticDescription['/quran/juz'],
  robots: IS_PRODUCTION ? 'index, follow' : 'noindex, nofollow',
  openGraph: {
    title: 'Baca Quran - Juz',
    description: staticDescription['/quran/juz'],
    url: `${canonicalUrl}quran/juz}`,
  },
  twitter: {
    title: 'Baca Quran - Juz',
    description: staticDescription['/quran/juz'],
  },
};

const JuzList = async () => {
  const juzsData = await getJuzs();
  const chapterData = await getAllChaptersData();

  return (
    <div className="grid gap-2 lg:gap-3 mt-3 lg:grid-cols-3 md:grid-cols-2">
      <JuzsView juzsData={juzsData.juzs} chapterData={chapterData.chapters} />
    </div>
  );
};

export default JuzList;
