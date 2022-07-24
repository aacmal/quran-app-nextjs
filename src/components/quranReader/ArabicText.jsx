import React, { useContext } from 'react'
import { StyleContext } from '../../context/StyleContext'

const ArabicText = ({ayahId, textUthmani, verseNumber}) => {
    const { currentFontSize } = useContext(StyleContext)

    const arabicNumber = (value) => {
        const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
        return String(value).replace(/[0123456789]/g, (d)=>{return arabicNumbers[d]});
    }

    return (
        <span dir='rtl' className='text-right dark:text-slate-100 transition-all lg:leading-[120px] md:leading-[80px] leading-[80px]'>
            <span style={{fontSize: currentFontSize}} id='arab' className='arabic uthmani'>{textUthmani}</span>
            <div 
                className='h-8 w-8 mx-3 inline-block text-xl font-bold text-center rounded-full border border-gray-900 dark:border-white'>{arabicNumber(verseNumber)}
            </div>
        </span>
    )
}

export default ArabicText