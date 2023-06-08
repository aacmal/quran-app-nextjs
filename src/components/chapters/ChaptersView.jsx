import React from 'react';
import ChapterCard from './Card/ChapterCard';

const ChaptersView = ({ chapterData }) => {
  console.log(chapterData[0]);
  return chapterData.map((e) => {
    return (
      <ChapterCard
        key={e.id}
        chapterId={e.id}
        name_simple={e.name_simple}
        translated_name={e.translated_name.name}
        name_arabic={e.name_arabic}
        verses_count={e.verses_count}
      />
    );
  });
};

export default ChaptersView;
