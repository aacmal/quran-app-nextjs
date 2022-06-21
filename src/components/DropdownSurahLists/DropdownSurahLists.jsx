import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ChevronIcon from '../icons/chevron'
import Link from 'next/link'

const DropdownSurahLists = ({chapterLists, chapterId, showHeader}) => {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    if (chapterLists){
        return (
            <div className={classNames('fixed top-0 bg-gray-100 border-b w-full left-0 z-50 md:py-4  xl:px-32 md:px-8 px-3 py-3 transition-all', 
                {"top-0" : showHeader},
                {"-top-24" : !showHeader}
            )}>
                <div 
                onClick={() => setOpen(!open)}
                className={classNames("p-2 cursor-pointer border border-transparent bg-white w-fit rounded-md  flex items-center relative", {"border-emerald-500 shadow-lg shadow-emerald-500/10": open})}>
                    <span className="font-bold text-sm text-emerald-500">{chapterLists[parseInt(chapterId)-1].name_simple}</span>
                    <ChevronIcon className={classNames("h-5 ml-2 transition-all text-emerald-500 transform", {"rotate-180": open})}/>
                    <div
                        className={classNames(
                        "absolute z-50 transition-all flex bg-white rounded-md shadow-lg shadow-emerald-700/20",
                        {"visible top-[50px] opacity-100" : open},
                        {"invisible opacity-0 top-[40px]" : !open}
                        )
                    }
                    >
                        {/* Lists Chapters */}
                        <ul className={classNames("p-2 pl-1 w-44 round h-72 overflow-auto scrollbar-hide",

                        )}>
                            {
                                chapterLists?.map(e => (
                                    <li
                                        key={e.id}
                                        onClick={() => router.push(`/surah/${e.id}`, undefined, {shallow: true})}
                                        className="px-2 py-1 cursor-pointer hover:bg-emerald-100 hover:text-emerald-500 rounded flex items-center">
                                        <span className='w-6 text-right block text-xs text-emerald-500 font-bold mr-2'>{e.id}</span>
                                        <span className='block'>{e.name_simple}</span>
                                    </li>
                                ))
                            }
                        </ul>

                        {/* Index of ayah */}
                        <ul className={classNames("p-2 border-l border-emerald-300 w-16 h-72 overflow-auto scrollbar-hide")}>
                            {
                                new Array(parseInt(chapterLists[parseInt(chapterId)-1].verses_count)).fill(0).map((key, index) => (
                                    <Link key={index} href={`#${index+1}`}>
                                        <a>
                                            <li className="p-1 cursor-pointer hover:bg-emerald-100 hover:text-emerald-500 rounded flex items-center">
                                                {index+1}
                                            </li>
                                        </a>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )

    }
}

export default DropdownSurahLists