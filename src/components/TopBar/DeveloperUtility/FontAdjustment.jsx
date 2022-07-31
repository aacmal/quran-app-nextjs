import classNames from 'classnames'
import React, { useContext, useEffect, useState } from 'react'
import { StyleContext } from '../../../context/StyleContext'
import AdjustmentWrapper from './AdjustmentWrapper'
import OptionList from './OptionList'
import { ChevronIcon } from '../../icons'

const FontAdjustment = () => {
    const [isExpanded, setExpanded] = useState(false)

    const { setFontFace, fontFace } = useContext(StyleContext)

    const fontFaces = [
        'Al - Qalam',
        'Me - Quran',
        'Nastaleeq',
        'Uthmanic Hafs'
    ]


    // const [font, setFont] = useState('Lato')

    return (
        <AdjustmentWrapper title="Jenis Font">
            <div onClick={() => setExpanded(!isExpanded)} className='text-center py-2 px-2 group text-black dark:text-slate-100 bg-gray-100 dark:bg-slate-500 rounded w-36 flex justify-between relative cursor-pointer'>
                <span className='font-bold text-sm'>{fontFace ? fontFaces[fontFace] : 'Al - Qalam'}</span>
                <ChevronIcon className={classNames("h-5 transform ml-2 transition-transform", {"rotate-180": isExpanded})}/>

                {/* Lists Language */}
                <ul className={classNames(
                    'absolute p-2 z-40 bg-white dark:bg-slate-400 w-full left-0 transform transition-all rounded text-left shadow-lg',
                    {"visible opacity-100 translate-y-7": isExpanded},
                    {"invisible opacity-0 translate-y-4": !isExpanded}
                )}>
                    {
                        fontFaces.map((key, index) => (
                            <OptionList onClick={() => setFontFace(index)}>{key}</OptionList>
                        ))
                    }
                </ul>
            </div>
        </AdjustmentWrapper>   
    )
}



const FontSizeAdjustment = () => {
    const { increaseFontSize, decreaseFontSize, currentFontSize } = useContext(StyleContext)
    const [fontSize, setFontSize] = useState(null)

    useEffect(() => {
      setFontSize(currentFontSize)
    }, [currentFontSize])
    


    return (
        <AdjustmentWrapper title="Ukuran Font">
            <div className='py-2 px-2 group text-black dark:text-slate-100 bg-gray-100 dark:bg-slate-500 rounded w-32 flex justify-between items-center'>
                <button onClick={() => decreaseFontSize()} className='w-5 h-5 flex items-center justify-center font-bold rounded bg-white dark:bg-slate-400'>-</button>
                <div className='text-sm'>{fontSize}</div>
                <button onClick={() => increaseFontSize()} className='w-5 h-5  flex items-center justify-center font-bold rounded bg-white dark:bg-slate-400'>+</button>
            </div>
        </AdjustmentWrapper>   
    )
}

export  {FontAdjustment, FontSizeAdjustment}