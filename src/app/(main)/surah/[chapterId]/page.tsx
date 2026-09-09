import React from "react";

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getVerses } from "@utils/verse";
import { getChapter, getChapterInfo, getLocalChapter } from "@utils/chapter";
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
import JsonLd from "@components/Seo/JsonLd";
import { createSurahJsonLd } from "@utils/seo";
import Breadcrumbs from "@components/Seo/Breadcrumbs";
import ContentNavigation from "@components/Seo/ContentNavigation";

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

  const localChapters = await getLocalChapter();
  const chapterIndex = localChapters.findIndex((item) => item.id === id);
  const previousChapter = localChapters[chapterIndex - 1];
  const nextChapter = localChapters[chapterIndex + 1];

  const description = createMetaDescription(
    `Baca Surat ${chapterData.name_simple} (${
      chapterData.translated_name.name
    }), surat ke-${chapterData.id} dengan ${
      chapterData.verses_count
    } ayat ${formatRevelationType(
      chapterData.revelation_place
    )}. Teks Arab, Latin, terjemahan Indonesia, tafsir, dan audio murottal.`
  );

  const [chapterVerses, chapterInfo] = await Promise.all([
    getVerses({
      id,
      getBy: GetVerseBy.Chapter,
    }),
    getChapterInfo(id),
  ]);

  return (
    <>
      <JsonLd
        data={createSurahJsonLd({
          chapter: chapterData,
          path: `/surah/${chapterData.id}`,
          description,
        })}
      />
      <Wrapper className="my-14 px-5 2xl:px-0 pb-20">
        <Breadcrumbs
          items={[
            { label: "Beranda", href: "/" },
            { label: `Surat ${chapterData.name_simple}` },
          ]}
        />
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
        <ContentNavigation
          previous={
            previousChapter
              ? {
                  href: `/surah/${previousChapter.id}`,
                  label: `Surat sebelumnya: ${previousChapter.name_simple}`,
                }
              : undefined
          }
          next={
            nextChapter
              ? {
                  href: `/surah/${nextChapter.id}`,
                  label: `Surat berikutnya: ${nextChapter.name_simple}`,
                }
              : undefined
          }
        />
      </Wrapper>
    </>
  );
}
