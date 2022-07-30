import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AdjustmentIcon } from '../../icons'
import IconWrapper from '../../icons/IconWrapper'
import { FontAdjustment, FontSizeAdjustment } from './FontAdjustment'
import LanguageAdjustment from './LanguageAdjustment'
import ThemeAdjustment from './ThemeAdjustment'

const DeveloperUtility = ({isInSurah}) => {
    const [isExpanded, setExpanded] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (isExpanded) setExpanded(false)
    }, [router.asPath])

    return (
        <div className='md:relative'>
            <IconWrapper onClick={() => setExpanded(!isExpanded)} onHover='none' className="bg-emerald-400">
                <AdjustmentIcon className="w-5 transform rotate-90 text-white"/>
            </IconWrapper>
            <div className={classNames(
                'fixed md:absolute bottom-0 left-0 md:-left-1 md:-translate-x-80 md:bottom-auto md:top-0 w-full md:w-96 h-fit pb-12 pt-8 rounded-t-lg md:rounded-lg px-5 md:pb-6 md:pt-6 md:p-6 bg-white dark:bg-slate-700 gap-2 flex flex-col transform transition-all shadow-[0_0px_30px_-15px_rgba(0,0,0,0.3)] shadow-emerald-400 dark:shadow-emerald-700 border border-emerald-400',
                {"translate-y-0 md:opacity-100 md:translate-y-16 visible z-50": isExpanded},
                {"translate-y-full md:opacity-0 md:translate-y-10 invisible": !isExpanded}
            )}>
                <ThemeAdjustment/>
                <LanguageAdjustment/>
                <FontAdjustment/>
                {isInSurah && <FontSizeAdjustment/>}
            </div>
        </div>
    )
}

export default DeveloperUtility