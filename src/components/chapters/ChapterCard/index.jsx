import React from 'react'
import Star from '../../icons/star'

const ChapterCard = ({id, translated_name, name_arabic, name_simple, bismillah_pre, revelation_place}) => {
  return (
    <div className='p-3 py-4 bg-white rounded-xl flex justify-between items-center'>
        <div className='flex'>
            <div className='relative grid place-items-center h-11 w-11 mr-3'>
                <span className='text-sm font-semibold'>{id}</span>
                <Star className="absolute"/>
            </div>
            <div>
                <span className='font-bold text-xl block'>{name_simple}</span>
                <span className='font-light text-sm block'>{translated_name}</span>
            </div>
        </div>
        <div>
            <span className='text-3xl'>{name_arabic}</span>
        </div>

    </div>
  )
}

export default ChapterCard