import Link from 'next/link'
import React from 'react'

const JuzWrapper = ({children, juz_number}) => {
  return (
    <Link className='h-fit col-span-3' href={`/juz/${juz_number}`}>
        <div className="p-3 bg-emerald-200 dark:bg-emerald-700 gap-3 lg:p-6 grid rounded-xl h-fit border border-transparent hover:border-emerald-500 dark:hover:border-emerald-400 outline-none">
            <span className='group-hover:underline decoration-emerald-500 font-bold text-emerald-600 dark:text-emerald-400 sticky top-0 w-full z-30 py-px bg-emerald-200 dark:bg-emerald-700'>Juz {juz_number}</span>
            {children}
        </div>
    </Link>
  )
}

export default JuzWrapper