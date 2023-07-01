'use client';
import classNames from 'classnames';
import React, { useEffect } from 'react';

import { getLocalChapter } from '../../utils/chapter';
import DeveloperUtility from './DeveloperUtility/DeveloperUtility';
import DropdownSurahLists from './DropdownSurahLists/DropdownSurahLists';
import useSurah from '../../store/surahStore';
import { shallow } from 'zustand/shallow';
import useQuranReader from '@stores/quranReaderStore';
import {
  usePathname,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';
import DropdownHadithLists from './DropdownHadithLists/DropdownHadithLists';

const TopBar = () => {
  const { chapterData } = useSurah(
    (state) => ({
      chapterData: state.chapterData,
    }),
    shallow
  );
  const pathname = usePathname();

  const { currentChapter } = useQuranReader(
    (state) => ({
      currentChapter: state.currentChapter,
    }),
    shallow
  );

  if (chapterData.length === 0 || !pathname.includes('/quran')) return <></>;
  return (
    <div
      className={classNames(
        'fixed top-0 bg-gray-100 dark:bg-slate-700 border-b border-emerald-500/50 shadow-lg shadow-emerald-700/10 w-full left-0 z-50 md:py-3  2xl:px-32 md:px-8 px-3 py-2 transition-all justify-between flex'
      )}
    >
      {pathname.includes('/quran') && (
        <DropdownSurahLists
          chapterLists={chapterData}
          chapterActive={currentChapter}
        />
      )}
      {pathname.includes('/hadits') && <DropdownHadithLists />}
      <DeveloperUtility isInSurah={true} />
    </div>
  );
};

export default TopBar;
