import classNames from 'classnames'
import React from 'react'
import { useRouter } from 'next/router'


const ChapterLists = ({chapterLists}) => {
  const router = useRouter()

  return (
    <ul className={classNames("p-2 pl-1 w-44 round h-72 overflow-auto scrollbar-hide")}>
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
  )
}

export default ChapterLists