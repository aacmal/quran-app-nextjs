import {useState, useEffect} from 'react'
import Star from '../icons/star'

const Verses = ({verse_number, translations, text_uthmani}) => {
    return (
        <>
            <div className='flex justify-between py-3 pr-1'>
                <div className='relative grid place-items-center h-8 w-8'>
                    <span className='text-xs font-semibold'>{verse_number}</span>
                    <Star className="absolute h-8 w-8 left-0"/>
                </div>
                <span id='arab' className='font-serif text-right block text-3xl w-80'>{text_uthmani}</span>
            </div>
            <span dangerouslySetInnerHTML={{__html:translations[0].text}} className='text-sm'></span>
            <hr  className='my-3 bgxdd-emerald-500'/>
        </>

    )
}

export default Verses