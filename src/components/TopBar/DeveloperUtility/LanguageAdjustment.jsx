import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ChevronIcon from '../../icons/chevron'
import AdjustmentWrapper from './AdjustmentWrapper'
import OptionList from './OptionList'

const LanguageAdjustment = () => {
    const [isExpanded, setExpanded] = useState(false)

    const router = useRouter()

    const lang = {
        'id': 'Indonesia',
        'en': 'English'
    }
    const [langId, setLang] = useState(null)

    function setLocale(lang){
        router.push(router.asPath, router.asPath, {locale: lang, scroll: false})
        setLang(lang)
    }

    useEffect(() => {
        setLang(router.locale)
    }, [])

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
                    <OptionList onClick={() => setLocale('id')}>Indonesia</OptionList>
                    <OptionList onClick={() => setLocale('en')}>English</OptionList>
                </ul>
            </div>
        </AdjustmentWrapper>   
    )
}

export default LanguageAdjustment