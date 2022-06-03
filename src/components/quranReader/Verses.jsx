import {useState, useEffect} from 'react'
import Star from '../icons/star'
import Bookmark from '../icons/bookmark'
import Copy from '../icons/copy'
import Dots_vertical from '../icons/dots_vertical'


const Verses = ({verse_number, translations, text_uthmani}) => {
    return (
        <> 
            <div className='flex justify-between py-3 md:flex-row flex-col'>
                <div className='flex md:flex-col flex-row items-center mb-4'>
                    <div className='relative grid place-items-center h-9 w-9 md:h-12 md:w-12'>
                        <span className='text-xs font-semibold md:text-lg'>{verse_number}</span>
                        <Star className="absolute h-8 w-8 md:h-12 md:w-12 left-0"/>
                    </div>
                    <div className='md:mt-3 md:ml-0 ml-2  flex md:flex-col flex-row items-center justify-between md:h-32 w-full md:w-fit'>
                        <div className='flex md:flex-col'>
                            <Bookmark className="md:h-7 h-6  text-gray-500 md:mb-2 md:mr-0 mr-2"/>
                            <Copy className="md:h-7 h-6 text-gray-500"/>
                        </div>
                        <Dots_vertical className="md:h-7 h-6 text-gray-500"/>
                    </div>
                </div>
                <div className='w-full md:w-[95%] flex flex-col '>
                    <p id='arab' className='font-serif text-right inline-block text-3xl md:text-4xl lg:text-5xl transition-all lg:leading-loose md:leading-loose leading-relaxed'>{text_uthmani}</p>
                    <p dangerouslySetInnerHTML={{__html:translations[0].text}} className=' text-base md:text-xl transition-all mt-5 inline-block'></p>
                </div>
            </div>
            <hr  className='border-none my-3 lg:my-5 h-[1px] bg-emerald-500'/>
        </>

    )
}

export default Verses