import classNames from 'classnames'
import React, { useState } from 'react'
import ChevronIcon from '../../icons/chevron'
import AdjustmentWrapper from './AdjustmentWrapper'

const FontAdjustment = () => {
    const [isExpanded, setExpanded] = useState(false)

    const [font, setFont] = useState('Lato')

    return (
        <AdjustmentWrapper title="Jenis Font">
            <div onClick={() => setExpanded(!isExpanded)} className='text-center py-2 px-2 group text-black bg-gray-100 rounded w-32 flex justify-between relative cursor-pointer'>
                <span className='font-bold text-sm text-gray-800'>{font}</span>
                <ChevronIcon className={classNames("h-5 transform transition-transform", {"rotate-180": isExpanded})}/>

                {/* Lists Language */}
                <ul className={classNames(
                    'absolute p-2 z-40 bg-white w-full left-0 transform transition-all rounded text-left shadow-lg',
                    {"visible opacity-100 translate-y-7": isExpanded},
                    {"invisible opacity-0 translate-y-4": !isExpanded}
                )}>
                    <li onClick={() => setFont('Lato')} className='p-1 px-2 rounded hover:bg-emerald-200 text-sm'>Lato</li>
                    <li onClick={() => setFont('Poppins')} className='p-1 px-2 rounded hover:bg-emerald-200 text-sm'>Poppins</li>
                </ul>
            </div>
        </AdjustmentWrapper>   
    )
}



const FontSizeAdjustment = () => {
    const [size, setSize] = useState(12)

    function increase(){
        if (size < 24) setSize((currentSize) => currentSize+1)
    }

    function decrease(){
        if (size > 8) setSize((currentSize) => currentSize-1)
    }

    return (
        <AdjustmentWrapper title="Ukuran Font">
            <div className='py-2 px-2 group text-black bg-gray-100 rounded w-32 flex justify-between items-center'>
                <div onClick={() => decrease()} className='w-5 h-5 cursor-pointer flex items-center justify-center font-bold rounded bg-white'>-</div>
                <span className='text-sm'>{size}</span>
                <div onClick={() => increase()} className='w-5 h-5 cursor-pointer flex items-center justify-center font-bold rounded bg-white'>+</div>
            </div>
        </AdjustmentWrapper>   
    )
}

export  {FontAdjustment, FontSizeAdjustment}