import React from "react";

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getVerses } from "@utils/verse";
import {
  getChapter,
  getChapterInfo,
  getLocalChapter,
} from "@utils/chapter";
import Wrapper from "@components/Wrapper";
import ChapterBanner from "@components/Banner/ChapterBanner";
import QuranReader from "@components/quranReader/QuranReader";
import PlayAudioButton from "@components/AudioPlayer/PlayAudioButton";
import {
  createMetaDescription,
  createPageMetadata,
  formatRevelationType,
  noIndexRobots,
} from "@utils/seo";
import { GetVerseBy } from "@utils/types/Verse";

type Props = {
  params: {
    chapterId: string;
  };
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const chapters = await getLocalChapter();
  const paths = chapters.map((item) => ({
    chapterId: item.id.toString(),
  }));

  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const chapterId = Number(params.chapterId);
  if (!Number.isInteger(chapterId) || chapterId < 1) {
    return {
      title: "Surah tidak ditemukan",
      robots: noIndexRobots,
    };
  }

  const chapterData = await getChapter(chapterId);

  if (!chapterData) {
    return {
      title: "Surah tidak ditemukan",
      robots: noIndexRobots,
    };
  }

  const revelationType = formatRevelationType(chapterData.revelation_place);
  const title = `Surat ${chapterData.name_simple}: Arab, Latin, Terjemahan & Tafsir`;
  const description = createMetaDescription(
    `Baca Surat ${chapterData.name_simple} (${chapterData.translated_name.name}), surat ke-${chapterData.id} dengan ${chapterData.verses_count} ayat ${revelationType}. Teks Arab, Latin, terjemahan Indonesia, tafsir, dan audio murottal.`
  );

  return createPageMetadata({
    title,
    description,
    path: `/surah/${chapterData.id}`,
    imagePath: `/surah/${chapterData.id}/opengraph-image`,
    type: "article",
  });
}

export default async function SurahPage({ params }: Props) {
  const id = Number(params.chapterId);
  if (!Number.isInteger(id) || id < 1) {
    notFound();
  }

  const chapterData = await getChapter(id);

  if (!chapterData) {
    notFound();
  }

  const [chapterVerses, chapterInfo] = await Promise.all([
    getVerses({
      id,
      getBy: GetVerseBy.Chapter,
    }),
    getChapterInfo(id),
  ]);

  return (
    <Wrapper className="my-14 px-5 2xl:px-0 pb-20">
      <ChapterBanner
        chapterData={chapterData}
        chapterInfo={chapterInfo.chapter_info}
      />
      <PlayAudioButton surahId={params.chapterId} />
      <QuranReader
        type="chapter"
        bismillahPre={chapterData.bismillah_pre}
        versesData={chapterVerses.verses}
        versesCount={chapterData.verses_count}
        id={chapterData.id}
      />
    </Wrapper>
  );
}
