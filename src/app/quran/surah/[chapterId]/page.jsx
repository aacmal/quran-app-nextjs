import React from 'react';
import QuranReader from '../../../../components/quranReader/QuranReader';
import {
  getAllChaptersData,
  getChapter,
  getChapterInfo,
} from '../../../../utils/chapter';
import { getAllVerseByChapter } from '../../../../utils/verse';
import ChapterBanner from '../../../../components/Banner/ChapterBanner';
import PlayAudioButton from '../../../../components/AudioPlayer/PlayAudioButton';
import Wrapper from '../../../../components/Wrapper';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const res = await getAllChaptersData();
  const paths = res.chapters.map((item) => ({
    chapterId: item.id.toString(),
  }));

  return paths;
}

export async function generateMetadata({ params }) {
  const chapterData = await getChapter(params.chapterId);
  const chapterInfo = await getChapterInfo(params.chapterId);

  if (!chapterData) {
    return;
  }

  return {
    title: `${chapterData.name_simple} (${chapterData.translated_name.name})`,
    description: chapterInfo.chapter_info.short_text,
  };
}

export default async function SurahPage({ params }) {
  const { chapterId: id } = params;
  const chapterVerses = await getAllVerseByChapter(id);
  const chapterInfo = await getChapterInfo(id);
  const chapterData = await getChapter(id);

  if (!chapterData) {
    notFound();
  }

  return (
    <Wrapper className="my-14 px-5 2xl:px-0 pb-20">
      <ChapterBanner
        chapterData={chapterData}
        chapterInfo={chapterInfo.chapter_info}
      />
      <PlayAudioButton surahId={id} />
      <QuranReader
        bismillahPre={chapterData.bismillah_pre}
        versesData={chapterVerses.verses}
      />
    </Wrapper>
  );
}
