import React from "react";
import { notFound } from "next/navigation";
import { getSpecificVerse } from "@utils/verse";
import Verses from "@components/quranReader/Verses";
import { Metadata } from "next";
import { getLocalChapter } from "@utils/chapter";
import {
  createMetaDescription,
  createPageMetadata,
  createVerseJsonLd,
  noIndexRobots,
} from "@utils/seo";
import JsonLd from "@components/Seo/JsonLd";

type Props = {
  params: {
    chapterId: string;
    ayahId: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const chapters = await getLocalChapter();
  const chapterId = Number(params.chapterId);
  const ayahId = Number(params.ayahId);
  const chapterData = chapters.find((chapter) => chapter.id === chapterId);

  if (
    !chapterData ||
    !Number.isInteger(ayahId) ||
    ayahId < 1 ||
    ayahId > chapterData.verses_count
  ) {
    return {
      title: "Ayat tidak ditemukan",
      robots: noIndexRobots,
    };
  }

  return createPageMetadata({
    title: `Surat ${chapterData.name_simple} Ayat ${ayahId}: Arab, Latin & Terjemahan`,
    description: createMetaDescription(
      `Baca Surat ${chapterData.name_simple} ayat ${ayahId} dalam tulisan Arab, transliterasi Latin, dan terjemahan bahasa Indonesia. Buka tafsir untuk memahami makna ayat.`
    ),
    path: `/surah/${chapterId}/${ayahId}`,
    imagePath: `/og/surah/${chapterId}/${ayahId}`,
    type: "article",
  });
}

const SingleAyahPage = async ({ params }: Props) => {
  const { chapterId, ayahId } = params;
  const chapters = await getLocalChapter();
  const chapter = chapters.find((item) => item.id === Number(chapterId));
  const verseNumber = Number(ayahId);

  if (
    !chapter ||
    !Number.isInteger(verseNumber) ||
    verseNumber < 1 ||
    verseNumber > chapter.verses_count
  ) {
    notFound();
  }

  const responseData = await getSpecificVerse(`${chapterId}:${ayahId}`);

  if (!responseData?.verse) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={createVerseJsonLd({
          chapter: {
            name_simple: chapter.name_simple,
            name_arabic: chapter.name_simple,
          },
          verseNumber: responseData.verse.verse_number,
          path: `/surah/${chapter.id}/${verseNumber}`,
          text: responseData.verse.text_uthmani,
          translation: responseData.verse.translations?.[0]?.text,
        })}
      />
      <h1 className="mb-5 text-xl font-bold text-emerald-500">
        Surat {chapter.name_simple} Ayat {verseNumber}
      </h1>
      <div className="mt-3 text-justify">
        <Verses
          key={responseData.verse.id}
          id={responseData.verse.id}
          verse_number={responseData.verse.verse_number}
          translations={responseData.verse.translations}
          text_uthmani={responseData.verse.text_uthmani}
          words={responseData.verse.words}
          verse_key={responseData.verse.verse_key}
        />
      </div>
    </>
  );
};

export default SingleAyahPage;
