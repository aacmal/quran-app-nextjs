import React from 'react'
import Skeleton from '../../Skeleton/Skeleton'

const ChapterCardSkeleton = () => {
  return (
    <div className='p-3 py-4 h-fit md:h-28 bg-white dark:bg-slate-600 rounded-xl flex justify-between items-center'>
        <div className='flex items-center'>
            <Skeleton className="h-8 w-8 mr-5"/>
            <div>
                <Skeleton className="w-24 h-8 mb-2"/>
                <Skeleton className="w-14 h-4"/>
            </div>
        </div>
        <div className='flex flex-col items-end'>
            <Skeleton className="h-12 w-24"/>
        </div>

    </div>
  )
}

export default ChapterCardSkeleton