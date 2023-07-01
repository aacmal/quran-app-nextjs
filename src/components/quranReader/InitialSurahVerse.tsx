import { Verse } from '@utils/types/Verse';
import React from 'react';
import Verses from './Verses';
import ScrollToAyah from './ScrollToAyah';

type Props = {
  versesData: Verse[];
};

const InitialSurahVerse = ({ versesData }: Props) => {
  return (
    <>
      <ScrollToAyah />
      {versesData.map((verse) => (
        <Verses
          key={verse.id}
          id={verse.id}
          verse_number={verse.verse_number}
          translations={verse.translations}
          text_uthmani={verse.text_uthmani}
          verse_key={verse.verse_key}
          words={verse.words}
        />
      ))}
    </>
  );
};

export default InitialSurahVerse;
