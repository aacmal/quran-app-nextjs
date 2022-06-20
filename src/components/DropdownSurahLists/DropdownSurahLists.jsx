import classNames from 'classnames'
import { Router, useRouter } from 'next/router'
import React, { useState } from 'react'
import ChevronIcon from '../icons/chevron'

const DropdownSurahLists = ({chapterLists, chapterId}) => {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    if (chapterLists){
        return (
            <div 
             onClick={() => setOpen(!open)}
             className={classNames("p-2 border border-transparent bg-white w-fit rounded-md shadow-lg shadow-emerald-500/10 mb-4 flex items-center relative", {"border-emerald-500": open})}>
                <span className="font-bold text-sm text-emerald-500">{chapterLists[parseInt(chapterId)-1].name_simple}</span>
                <ChevronIcon className={classNames("h-5 ml-2 transition-all text-emerald-500 transform", {"rotate-180": open})}/>
                <ul className={classNames("absolute transition-all bg-white shadow-lg shadow-emerald-700/10 z-50 p-2 pl-1 w-52 rounded-md h-72 overflow-auto scrollbar-hide",
                {"visible top-[50px] opacity-100" : open},
                {"invisible opacity-0 top-[10px]" : !open}
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
            </div>
        )

    }
}

export default DropdownSurahLists