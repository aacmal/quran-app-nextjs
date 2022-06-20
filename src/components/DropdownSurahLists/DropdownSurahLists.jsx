import classNames from 'classnames'
import React, { useState } from 'react'
import ChevronIcon from '../icons/chevron'

const DropdownSurahLists = ({chapterLists, chapterData}) => {
    const [open, setOpen] = useState(false)

    console.log(open);
    return (
        <div 
         onClick={() => setOpen(!open)}
         className="group p-2 bg-white w-fit rounded-md shadow-lg shadow-emerald-500/10 mb-4 flex items-center relative">
            <span className="font-bold text-sm text-emerald-500">{chapterData?.name_simple}</span>
            <ChevronIcon className="h-5 ml-2 transition-all text-emerald-500 transform group-hover:rotate-180 delay-300"/>
            <ul className={classNames("absolute bg-white  z-50 p-2 w-36 rounded-md h-72 overflow-auto scrollbar-hide",
            {"visible top-[50px] opacity-100" : open},
            {"invisible opacity-0 top-[10px]" : !open}
            )}>
                {
                    chapterLists?.map(e => (
                        <li
                            key={e.id}
                            onClick={() => setChapterId(e.id)}
                            className="px-2 py-1 cursor-pointer hover:bg-emerald-100 hover:text-emerald-500 rounded">
                            {e.name_simple}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DropdownSurahLists