import React from 'react';
import ChapterCard from './Card/ChapterCard';
import JuzWrapper from './Card/JuzWrapper';
import { Chapter } from '@utils/types/Chapter';
import { Juz } from '@utils/types/Juz';

type JuzsViewProps = {
  chapterData: Chapter[];
  juzsData: Juz[];
};

const JuzsView = ({ chapterData, juzsData }: JuzsViewProps) => {
  return (
    <>
      {juzsData.map((e) => {
        return (
          <JuzWrapper key={e.id} juz_number={e.juz_number}>
            {Object.keys(e.verse_mapping).map((key, index) => {
              let { id, translated_name, name_arabic, name_simple } =
                chapterData[parseInt(key) - 1];
              return (
                <ChapterCard
                  key={index}
                  chapterId={id}
                  translated_name={translated_name.name}
                  name_arabic={name_arabic}
                  name_simple={name_simple}
                  verse_mapping={e.verse_mapping[key]}
                />
              );
            })}
          </JuzWrapper>
        );
      })}
    </>
  );
};

export default JuzsView;
