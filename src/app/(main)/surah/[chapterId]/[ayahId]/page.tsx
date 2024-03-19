import React from "react";
import { getSpecificVerse } from "@utils/verse";
import Verses from "@components/quranReader/Verses";
import { Metadata } from "next";
import { getLocalChapter } from "@utils/chapter";

type Props = {
  params: {
    chapterId: string;
    ayahId: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const chapterData = await getLocalChapter();

  return {
    title: `${chapterData[parseInt(params.chapterId) - 1].name_simple} : ${
      params.ayahId
    }`,
  };
}

const SingleAyahPage = async ({ params }: Props) => {
  const { chapterId, ayahId } = params;
  const responseData = await getSpecificVerse(`${chapterId}:${ayahId}`);

  return (
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
  );
};

export default SingleAyahPage;
