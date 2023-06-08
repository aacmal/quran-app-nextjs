import React from 'react';
import QuranReader from '../../../../components/quranReader/QuranReader';
import { getAllChaptersData } from '../../../../utils/chapter';
import { getAllVerseByChapter } from '../../../../utils/verse';

export async function generateStaticParams() {
  const res = await getAllChaptersData();
  const paths = res.chapters.map((item) => ({
    id: item.id.toString(),
  }));

  return paths;
}

export default async function SurahPage({ params }) {
  const { id } = params;
  const chapter = await getAllVerseByChapter(id);

  return (
    <>
      <h1>HEllow</h1>
      <QuranReader
        // bismillahPre={allChapters[currentChapter]?.bismillah_pre}
        bismillahPre={true}
        versesData={chapter.verses}
      />
    </>
  );
}
