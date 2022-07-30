import Link from 'next/link'
import React from 'react'
import { StarIcon } from '../../icons'
import ChapterWrapper from './ChapterWrapper'

const ChapterCard = ({chapterId, translated_name, name_arabic, name_simple, verses_count, showAyah}) => {
    return (
        <Link href={`/surah/${chapterId}`}>
            <a>
                <ChapterWrapper>
                    <div className='flex items-center'>
                        <div className='relative grid place-items-center h-11 w-11 mr-3'>
                            <span className='text-sm font-semibold'>{chapterId}</span>
                            <StarIcon className="absolute"/>
                        </div>
                        <div>
                            <span className='font-bold text-xl block mb-1'>{name_simple}</span>
                            <span className='font-light text-sm block lg:text-base'>{translated_name}</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-end'>
                        <span className='text-3xl group-hover:text-emerald-500 block mb-1'>{name_arabic}</span>
                        {showAyah && <span className='font-bold'>{verses_count}</span>}
                    </div>

                </ChapterWrapper>
            </a>
        </Link>

    )
}

export default ChapterCard