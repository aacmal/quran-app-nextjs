import React from 'react'
import Image from 'next/image'

const BannerWrapper = ({children, imageOpacity, imageScale}) => {
  return (
    <div className='rounded-2xl p-4 w-full bg-gradient-to-tr overflow-hidden from-emerald-300 to-emerald-700 relative shadow-lg shadow-emerald-200 transition-all'>
        {children}
        <div style={{opacity: imageOpacity, transform: `scale(${imageScale})`}} className='absolute top-2 right-0 w-44 h-32'>
            <Image
                src='/quran.png'
                layout='fill'
                objectFit='contain'
            />
        </div>
    </div>
  )
}

export default BannerWrapper