import classNames from 'classnames'
import React, { useState } from 'react'
import ArrowIcon from '../../icons/ArrowIcon'
import ChevronIcon from '../../icons/chevron'
import ChapterLists from './ChapterLists'
import IconWrapper from '../../icons/IconWrapper'
import IndexOfChapterLists from './IndexOfChapterLists'
import Link from 'next/link'

const DropdownSurahLists = ({chapterLists, chapterActive}) => {
    const [open, setOpen] = useState(false)

    if (chapterLists){
        return (   
            <div>
                <div className='flex items-center gap-3'>
                    <Link href="/">
                        <a>
                            <IconWrapper onHover='none' className="bg-emerald-400 text-white p-2">
                                <ArrowIcon className="h-5 w-5"/>
                            </IconWrapper>
                        </a>
                    </Link>
                    {/* Dropdown Toggle */}
                    <div 
                    onClick={() => setOpen(!open)}
                    className={classNames("p-2 cursor-pointer border border-transparent bg-white dark:bg-slate-600 w-fit rounded-md  flex items-center relative", {"border-emerald-500 shadow-lg shadow-emerald-500/10": open})}>
                        <button className="font-bold text-sm text-emerald-500">{chapterLists[chapterActive].name_simple}</button>
                        <ChevronIcon className={classNames("h-5 ml-2 transition-all text-emerald-500 transform", {"rotate-180": open})}/>
                    </div>
                </div>
                {/* Dropdown Menu */}
                <div
                    className={classNames(
                    "absolute z-50 transition-all flex bg-white dark:bg-slate-700 dark:text-slate-100 rounded-md shadow-lg shadow-emerald-700/20",
                    {"visible top-[80px] opacity-100" : open},
                    {"invisible top-[60px] opacity-0" : !open}
                    )
                }
                >
                    <ChapterLists chapterLists={chapterLists}/>
                    <IndexOfChapterLists chapterLists={chapterLists} chapterId={chapterActive}/>
                </div>
            </div>      
        )

    }
}

export default DropdownSurahLists