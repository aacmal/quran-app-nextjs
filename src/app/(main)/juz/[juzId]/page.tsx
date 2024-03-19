import React from 'react';

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getVerses } from '@utils/verse';
import Wrapper from '@components/Wrapper';
import QuranReader from '@components/quranReader/QuranReader';
import { canonicalUrl, defaultOpenGraph, defaultTwitter } from '@utils/seo';
import { getJuzData, getJuzs } from '@utils/juz';
import { GetVerseBy } from '@utils/types/Verse';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export async function generateStaticParams() {
  const res = await getJuzs();
  const paths = res.juzs.map((item) => ({
    juzId: item.id.toString(),
  }));

  return paths;
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const juzData = await getJuzData(params.juzId);

  if (!juzData) {
    return;
  }

  const description = `Baca Quran Juz ${juzData.id} yang didalamnya terdapat ${juzData.verse_mapping.length} dengan jumlah ${juzData.verses_count} ayat. Baca dengan terjemahan dan tafsir untuk memahami arti dan maksud ayat yang terkandung didalamnya.`;
  return {
    title: `Baca Quran - Juz ${juzData.id} (${juzData.verses_count} ayat)`,
    description: description,
    robots: IS_PRODUCTION ? 'index, follow' : 'noindex, nofollow',
    openGraph: {
      ...defaultOpenGraph,
      title: `Baca Quran - Juz ${juzData.id} (${juzData.verses_count} ayat)`,
      description: description,
      url: `${canonicalUrl}quran/surah/${juzData.id}`,
    },
    twitter: {
      ...defaultTwitter,
      title: `Baca Quran - Juz ${juzData.id} (${juzData.verses_count} ayat)`,
      description: description,
    },
  };
}

export default async function JuzPage({ params }) {
  const juzVerses = await getVerses({
    id: params.juzId,
    getBy: GetVerseBy.Juz,
  });
  const juzData = await getJuzData(params.juzId);

  if (!juzData) {
    notFound();
  }

  return (
    <Wrapper className="my-14 px-5 2xl:px-0 pb-20">
      {/* <ChapterBanner
        chapterData={chapterData}
        chapterInfo={chapterInfo.chapter_info}
      />
      <PlayAudioButton surahId={id} /> */}
      <QuranReader
        bismillahPre={true}
        type="juz"
        versesData={juzVerses.verses}
        versesCount={juzData.verses_count}
        id={juzData.id}
      />
    </Wrapper>
  );
}
