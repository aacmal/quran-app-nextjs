import React from 'react';
import ChapterCard from './Card/ChapterCard';
import { Chapter } from '@utils/types/Chapter';

type ChaptersViewProps = {
  chapterData: Chapter[];
};

const ChaptersView = ({ chapterData }: ChaptersViewProps) => {
  return chapterData.map((e) => (
    <ChapterCard
      key={e.id}
      chapterId={e.id}
      name_simple={e.name_simple}
      translated_name={e.translated_name.name}
      name_arabic={e.name_arabic}
    />
  ));
};

export default ChaptersView;
