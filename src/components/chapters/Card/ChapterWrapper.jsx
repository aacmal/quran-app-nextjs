import React from 'react'

const ChapterWrapper = ({children}) => {
  return (
    <div className='p-3 py-4 h-fit md:h-28 bg-white rounded-xl flex justify-between items-center border lg:border-2 border-transparent hover:border-emerald-500 group transition-all cursor-pointer hover:shadow-emerald-100 shadow-lg shadow-transparent'>
        {children}
    </div>
  )
}

export default ChapterWrapper