import Link from 'next/link'
import React from 'react'
import Star from '../../icons/star'

const ChapterCard = ({chapterId, translated_name, name_arabic, name_simple, revelation_place}) => {
    return (
        <Link href={`/surah/${chapterId}}`}>
            <div className='p-3 py-4 h-fit md:h-28 bg-white rounded-xl flex justify-between items-center border lg:border-2 border-transparent hover:border-emerald-500 group transition-all cursor-pointer hover:shadow-emerald-100 shadow-lg shadow-transparent'>
                <div className='flex items-center'>
                    <div className='relative grid place-items-center h-11 w-11 mr-3'>
                        <span className='text-sm font-semibold'>{chapterId}</span>
                        <Star className="absolute"/>
                    </div>
                    <div>
                        <span className='font-bold text-xl block mb-1'>{name_simple}</span>
                        <span className='font-light text-sm block lg:text-base'>{translated_name}</span>
                    </div>
                </div>
                <div>
                    <span className='text-3xl group-hover:text-emerald-500'>{name_arabic}</span>
                </div>

            </div>
        </Link>

    )
}

export default ChapterCard