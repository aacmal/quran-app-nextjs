import {useState, useEffect} from 'react'
import Star from '../icons/star'

const Verses = ({verse_number, translations, text_uthmani}) => {
    return (
        <>
            <div className='flex justify-between py-3 pr-1'>
                <div className='relative grid place-items-center h-8 w-8 md:h-12 md:w-12'>
                    <span className='text-xs font-semibold md:text-lg'>{verse_number}</span>
                    <Star className="absolute h-8 w-8 md:h-12 md:w-12 left-0"/>
                </div>
                <span id='arab' className='font-serif text-right block text-3xl w-80 md:text-5xl sm:w-[95%] transition-all'>{text_uthmani}</span>
            </div>
            <span dangerouslySetInnerHTML={{__html:translations[0].text}} className='text-sm md:text-xl transition-all mt-8 block'></span>
            <hr  className='my-5 border-none h-[1px] bg-emerald-500'/>
        </>

    )
}

export default Verses