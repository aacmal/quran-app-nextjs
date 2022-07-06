import classNames from 'classnames'
import React, { useContext, useEffect } from 'react'
import { RootContext } from '../../context/RootContext'
import { TopbarContext } from '../../context/TopbarContext'
import { getAllChaptersData } from '../../utils/chapter'
import DeveloperUtility from './DeveloperUtility/DeveloperUtility'
import DropdownSurahLists from './DropdownSurahLists/DropdownSurahLists'

const TopBar = () => {
	const { initAllChapters, allChapters, isLoading, currentChapter } = useContext(RootContext)
	const { showTopbar } = useContext(TopbarContext)

	// TODO make Topbar hidden when Scrolling down and display when scrolling up
	useEffect(() => {
		getAllChaptersData('id')
		.then((data) => {
			initAllChapters(data.chapters)
		})
		
		// 

	}, [])

	if(!isLoading){
		return (
			<div className={classNames('fixed top-0 bg-gray-100 dark:bg-slate-700 border-b border-emerald-500/50 shadow-lg shadow-emerald-700/10 w-full left-0 z-50 md:py-3  2xl:px-32 md:px-8 px-3 py-2 transition-all justify-between', 
				{"flex" : showTopbar},
				{"hidden" : !showTopbar}
			)}>
				<DropdownSurahLists chapterLists={allChapters} chapterActive={currentChapter}/>
				<DeveloperUtility isInSurah={true}/>
			</div>
		)
	}
}

export default TopBar