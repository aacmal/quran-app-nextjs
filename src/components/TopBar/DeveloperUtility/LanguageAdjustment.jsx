import classNames from 'classnames'
import React, { useState } from 'react'
import ChevronIcon from '../../icons/chevron'
import AdjustmentWrapper from './AdjustmentWrapper'

const LanguageAdjustment = () => {
    const [isExpanded, setExpanded] = useState(false)

    const lang = {
        'id': 'Indonesia',
        'en': 'English'
    }
    const [langId, setLang] = useState('id')

    return (
        <AdjustmentWrapper title="Bahasa">
            <div onClick={() => setExpanded(!isExpanded)} className='text-center py-2 px-2 group text-black dark:text-slate-100 bg-gray-100 dark:bg-slate-500 rounded w-32 flex justify-between relative cursor-pointer'>
                <span className='font-bold text-sm'>{lang[langId]}</span>
                <ChevronIcon className={classNames("h-5 transform transition-transform", {"rotate-180": isExpanded})}/>

                {/* Lists Language */}
                <ul className={classNames(
                    'absolute p-2 z-40 bg-white dark:bg-slate-400 w-full left-0 transform transition-all rounded text-left shadow-lg',
                    {"visible opacity-100 translate-y-7": isExpanded},
                    {"invisible opacity-0 translate-y-4": !isExpanded}
                )}>
                    <li onClick={() => setLang('id')} className='p-1 px-2 rounded hover:bg-emerald-200 text-sm'>Indonesia</li>
                    <li onClick={() => setLang('en')} className='p-1 px-2 rounded hover:bg-emerald-200 text-sm'>English</li>
                </ul>
            </div>
        </AdjustmentWrapper>   
    )
}

export default LanguageAdjustment