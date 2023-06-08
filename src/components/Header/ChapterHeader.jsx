import React from 'react';
import DropdownSurahLists from '../TopBar/DropdownSurahLists/DropdownSurahLists';
import DeveloperUtility from '../TopBar/DeveloperUtility/DeveloperUtility';
import classNames from 'classnames';

const ChapterHeader = () => {
  return (
    <div
      className={classNames(
        'fixed top-0 bg-gray-100 dark:bg-slate-700 border-b border-emerald-500/50 shadow-lg shadow-emerald-700/10 w-full left-0 z-50 md:py-3  2xl:px-32 md:px-8 px-3 py-2 transition-all justify-between flex'
      )}
    >
      <DropdownSurahLists />
      <DeveloperUtility isInSurah={true} />
    </div>
  );
};

export default ChapterHeader;
