import React from 'react';
import JuzsView from '../../../components/chapters/JuzsView';
import { getJuzs } from '../../../utils/juz';
import { getAllChaptersData } from '../../../utils/chapter';

const JuzList = async () => {
  const juzsData = await getJuzs()
  const chapterData = await getAllChaptersData()

  return (
    <div className="grid gap-2 lg:gap-3 mt-3 lg:grid-cols-3 md:grid-cols-2">
      <JuzsView juzsData={juzsData} chapterData={chapterData.chapters} />
    </div>
  );
};

export default JuzList;
