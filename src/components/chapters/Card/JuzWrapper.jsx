import Link from 'next/link'
import React from 'react'

const JuzWrapper = ({children, juz_number}) => {
  return (
    <Link href={`/juz/${juz_number}`}>
      <a className='h-fit col-span-3'>
        <div className="p-3 bg-emerald-200 gap-3 lg:p-6 grid rounded-xl h-fit border border-transparent hover:border-emerald-500 outline-none">
            <span className='group-hover:underline decoration-emerald-500 font-bold text-emerald-600'>Juz {juz_number}</span>
            {children}
        </div>
      </a>
    </Link>
  )
}

export default JuzWrapper