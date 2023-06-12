import React from 'react'
import Skeleton from '../Skeleton/Skeleton'

const ChapterBannerSkeleton = () => {
  return (
    <div className='h-28'>
        <div className='h-full'>
            <Skeleton className="h-10 w-32 mx-auto"/>
            <Skeleton className="h-6 w-24 mt-1 mx-auto"/>
            <hr className='mt-2 max-w-md mx-auto'/>
            <div className='flex gap-1 max-w-md mx-auto justify-center'>
                <Skeleton className="h-5 w-24 mt-2"/>
                <Skeleton className="h-5 w-24 mt-2"/>
            </div>
        </div>
    </div>
  )
}

export default ChapterBannerSkeleton