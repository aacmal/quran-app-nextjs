import React from 'react';

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getVerses } from '@utils/verse';
import { getAllChaptersData, getChapter, getChapterInfo } from '@utils/chapter';
import Wrapper from '@components/Wrapper';
import ChapterBanner from '@components/Banner/ChapterBanner';
import QuranReader from '@components/quranReader/QuranReader';
import PlayAudioButton from '@components/AudioPlayer/PlayAudioButton';
import { canonicalUrl, defaultOpenGraph, defaultTwitter } from '@utils/seo';
import { getJuzData } from '@utils/juz';
import { GetVerseBy } from '@utils/types/Verse';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export async function generateStaticParams() {
  const res = await getAllChaptersData();
  const paths = res.chapters.map((item) => ({
    chapterId: item.id.toString(),
  }));

  return paths;
}

// export async function generateMetadata({ params }): Promise<Metadata> {
//   const chapterData = await getChapter(params.chapterId);

//   if (!chapterData) {
//     return;
//   }

//   const description = `Baca Surah ${chapterData.name_simple} (${chapterData.translated_name.name}) dengan jumlah ${chapterData.verses_count} ayat, surah ini diturunkan ke ${chapterData.revelation_order} di ${chapterData.revelation_place}. Halaman ini berisi bacaan surah ${chapterData.name_simple} dengan terjemahan bahasa Indonesia, tafsir, dan audio dengan qori yang berbeda.`;
//   const imageUrl = `${canonicalUrl}api/og?chapterId=${chapterData.id}`;
//   return {
//     title: `${chapterData.name_simple} (${chapterData.translated_name.name})`,
//     description: description,
//     robots: IS_PRODUCTION ? 'index, follow' : 'noindex, nofollow',
//     openGraph: {
//       ...defaultOpenGraph,
//       title: `${chapterData.name_simple} (${chapterData.translated_name.name})`,
//       description: description,
//       url: `${canonicalUrl}quran/surah/${chapterData.id}`,
//       images: imageUrl,
//     },
//     twitter: {
//       ...defaultTwitter,
//       title: `${chapterData.name_simple} (${chapterData.translated_name.name})`,
//       description: description,
//       images: imageUrl,
//     },
//   };
// }

export default async function JuzPage({ params }) {
  const { juzId: id } = params;
  console.log(id);
  const juzVerses = await getVerses({
    id,
    getBy: GetVerseBy.Juz,
  });
  const juzData = await getJuzData(id);
  console.log(juzData);

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
