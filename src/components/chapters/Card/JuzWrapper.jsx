import Link from 'next/link'
import React, { useState } from 'react'
import { ChevronIcon } from '../../icons'

const JuzWrapper = ({children, juz_number, verse_mapping}) => {

  return (
    <Link href={`/juz/${juz_number}`}>
      <a className='relative'>
        <div className={`p-3 bg-emerald-500/20 gap-3 grid w-full rounded-xl border border-transparent group hover:border-emerald-500 outline-none overflow-hidden relative md:min-h-[11.5rem] md:max-h-[11.5rem] md:hover:max-h-[500rem] transition-all group`}>
            <span className='group-hover:underline decoration-emerald-500 font-bold text-emerald-600'>Juz {juz_number}</span>
            {children}
            {
              (verse_mapping.length > 1) &&
              <div className='hidden md:flex md:group-hover:hidden justify-center items-center bg-gradient-to-b from-transparent to-emerald-700/50 h-1/3 w-full absolute bottom-0 left-0 group'>
                <ChevronIcon className="h-7 text-emerald-700 transform group-hover:translate-y-3 transition-transform"/>
              </div>
            }
            
        </div>
      </a>
    </Link>
  )
}

export default JuzWrapper