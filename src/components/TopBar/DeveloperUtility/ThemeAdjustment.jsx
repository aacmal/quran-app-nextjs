import classNames from 'classnames'
import React, { useState } from 'react'
import AdjustmentWrapper from './AdjustmentWrapper'

const ThemeAdjustment = () => {
    const [themeId, setThemeId] = useState(0)

    return (
        <AdjustmentWrapper title="Theme">
            <div className='bg-gray-100 p-1 rounded text-black w-32'>
                <div className='flex items-center relative'>
                    <div className={classNames(
                        'bg-white absolute w-1/2 h-full z-auto rounded-md transition-transform transform',
                        {"translate-x-0": themeId === 0},
                        {"translate-x-full": themeId === 1},
                    )}></div>
                    <div className={classNames(
                        'text-sm p-1 z-10 w-16 text-center cursor-pointer',
                        {"text-emerald-500 font-bold": themeId === 0}
                    )} onClick={() => setThemeId(0)}>Terang</div>
                    <div className={classNames(
                        'text-sm p-1 z-10 w-16 text-center cursor-pointer',
                        {"text-emerald-500 font-bold": themeId === 1}
                    )} onClick={() => setThemeId(1)}>Gelap</div>
                </div>
            </div>
        </AdjustmentWrapper>
    )
}

export default ThemeAdjustment