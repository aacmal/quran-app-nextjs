'use client';
import classNames from 'classnames';
import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { RootContext } from '../../context/RootContext';
import { TopbarContext } from '../../context/TopbarContext';

import { getAllChaptersData, getLocalChapter } from '../../utils/chapter';
import DeveloperUtility from './DeveloperUtility/DeveloperUtility';
import DropdownSurahLists from './DropdownSurahLists/DropdownSurahLists';
import useSurah from '../../store/surahStore';

const TopBar = () => {
  const { chapterData, setChapterData, currentChapter } = useSurah((state) => ({
    chapterData: state.chapterData,
    setChapterData: state.setChapterData,
    currentChapter: state.currentChapter,
  }));

  useEffect(() => {
    if(chapterData.length > 0) return;

    getLocalChapter().then((res) => {
      console.log(res)
      setChapterData(res);
    })

  }, []);

  console.log(chapterData, setChapterData, currentChapter)

  if (chapterData.length === 0) return <></>;
  return (
    <div
      className={classNames(
        'fixed top-0 bg-gray-100 dark:bg-slate-700 border-b border-emerald-500/50 shadow-lg shadow-emerald-700/10 w-full left-0 z-50 md:py-3  2xl:px-32 md:px-8 px-3 py-2 transition-all justify-between flex'
      )}
    >
      <DropdownSurahLists
        chapterLists={chapterData}
        chapterActive={currentChapter}
      />
      {/* <DeveloperUtility isInSurah={true} /> */}
    </div>
  );
};

export default TopBar;
