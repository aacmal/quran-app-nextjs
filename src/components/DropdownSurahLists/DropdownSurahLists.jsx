import classNames from 'classnames'
import React, { useState } from 'react'
import ChevronIcon from '../icons/chevron'
import ChapterLists from './ChapterLists'
import IndexOfChapterLists from './IndexOfChapterLists'

const DropdownSurahLists = ({chapterLists, chapterId, showHeader}) => {
    const [open, setOpen] = useState(false)

    if (chapterLists){
        return (
            <div className={classNames('fixed top-0 bg-gray-100 border-b shadow-lg shadow-emerald-700/5 w-full left-0 z-50 md:py-4  xl:px-32 md:px-8 px-3 py-3 transition-all', 
                {"top-0" : showHeader},
                {"-top-24" : !showHeader}
            )}>
                {/* Dropdown Toggle */}
                <div 
                onClick={() => setOpen(!open)}
                className={classNames("p-2 cursor-pointer border border-transparent bg-white w-fit rounded-md  flex items-center relative", {"border-emerald-500 shadow-lg shadow-emerald-500/10": open})}>
                    <span className="font-bold text-sm text-emerald-500">{chapterLists[parseInt(chapterId)-1].name_simple}</span>
                    <ChevronIcon className={classNames("h-5 ml-2 transition-all text-emerald-500 transform", {"rotate-180": open})}/>
                </div>
                {/* Dropdown Menu */}
                <div
                    className={classNames(
                    "absolute z-50 transition-all flex bg-white rounded-md shadow-lg shadow-emerald-700/20",
                    {"visible top-[70px] opacity-100" : open},
                    {"invisible opacity-0 top-[50px]" : !open}
                    )
                }
                >
                    <ChapterLists chapterLists={chapterLists}/>
                    <IndexOfChapterLists chapterLists={chapterLists} chapterId={chapterId}/>
                </div>
            </div>
        )

    }
}

export default DropdownSurahLists