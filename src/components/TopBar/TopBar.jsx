import classNames from 'classnames'
import React from 'react'
import DeveloperUtility from './DeveloperUtility/DeveloperUtility'
import DropdownSurahLists from './DropdownSurahLists/DropdownSurahLists'

const TopBar = ({showHeader, chapterId, chapterLists}) => {

  return (
    <div className={classNames('fixed top-0 bg-gray-100 dark:bg-slate-700 border-b border-emerald-500/50 shadow-lg shadow-emerald-700/5 w-full left-0 z-50 md:py-4  xl:px-32 md:px-8 px-3 py-3 transition-all flex justify-between', 
        {"top-0" : showHeader},
        {"-top-24" : !showHeader}
    )}>
        <DropdownSurahLists chapterLists={chapterLists} chapterActive={chapterId}/>
        <DeveloperUtility isInSurah={true}/>
    </div>
  )
}

export default TopBar