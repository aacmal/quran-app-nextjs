import classNames from 'classnames'
import React, { useContext, useEffect, useState } from 'react'
import { StyleContext } from '../../../context/StyleContext'
import AdjustmentWrapper from './AdjustmentWrapper'

const ThemeAdjustment = () => {
    const { updateTheme } = useContext(StyleContext)

    const theme = ['light', 'dark']
    const [themeId, setThemeId] = useState()

    useEffect(() => {
        setThemeId(() => {
            if (window.document.documentElement.classList.contains('dark')) {
                return 1
            } else {
                return 0
            }
        })
    }, [])

    function selectTheme(themeId){
        setThemeId(themeId)
        updateTheme(theme[themeId])
    }

    return (
        <AdjustmentWrapper title="Theme">
            <div className='bg-gray-100 dark:bg-slate-500 dark:text-slate-200 p-1 rounded text-black w-32'>
                <div className='flex items-center relative'>
                    <div className={classNames(
                        'bg-white dark:bg-slate-400 absolute w-1/2 h-full z-auto rounded-md transition-transform transform',
                        {"translate-x-0": themeId === 0},
                        {"translate-x-full": themeId === 1},
                    )}></div>
                    <div className={classNames(
                        'text-sm p-1 z-10 w-16 text-center cursor-pointer capitalize',
                        {"text-emerald-500 font-bold": themeId === 0}
                    )} onClick={() => selectTheme(0)}>{theme[0]}</div>
                    <div className={classNames(
                        'text-sm p-1 z-10 w-16 text-center cursor-pointer capitalize',
                        {"text-emerald-200 font-bold": themeId === 1}
                    )} onClick={() => selectTheme(1)}>{theme[1]}</div>
                </div>
            </div>
        </AdjustmentWrapper>
    )
}

export default ThemeAdjustment