import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import AdjustmentIcon from '../../icons/AdjustmentIcon'
import IconWrapper from '../../icons/IconWrapper'
import { FontAdjustment, FontSizeAdjustment } from './FontAdjustment'
import LanguageAdjustment from './LanguageAdjustment'
import ThemeAdjustment from './ThemeAdjustment'

const DeveloperUtility = () => {
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
                'fixed md:absolute bottom-0 left-0 md:-translate-x-80 md:-bottom-6 w-full md:w-96 h-fit pb-24 pt-12 rounded-t-lg md:rounded-lg px-5 md:pb-6 md:pt-6 md:p-6 bg-white shadow-2xl gap-2 flex flex-col transform transition-all',
                {"translate-y-0 md:opacity-100 md:translate-y-72 visible": isExpanded},
                {"translate-y-full md:opacity-0 md:translate-y-64 invisible": !isExpanded}
            )}>
                <ThemeAdjustment/>
                <LanguageAdjustment/>
                <FontAdjustment/>
                <FontSizeAdjustment/>
            </div>
        </div>
    )
}

export default DeveloperUtility