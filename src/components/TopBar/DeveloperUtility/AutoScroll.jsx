import React, { useContext, useEffect, useState } from 'react'
import { StyleContext } from '../../../context/StyleContext'
import AdjustmentWrapper from './AdjustmentWrapper'
import useSettings from '../../../store/settingsStore'

const AutoScroll = () => {
    const { autoScroll, setAutoScroll } = useSettings((state) => ({
        autoScroll: state.autoScroll,
        setAutoScroll: state.setAutoScroll
    }))
    const [isChecked, setChecked] = useState(false)

    useEffect(() => {
        setChecked(autoScroll)
    }, [autoScroll])

    return (
        <AdjustmentWrapper title="Scroll Otomatis">
            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                <input defaultChecked={autoScroll} type="checkbox" value="" id="default-toggle" className="sr-only peer"/>
                <div onClick={() => setAutoScroll(!autoScroll)} className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-slate-500/50 rounded-full peer dark:bg-slate-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-emerald-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white dark:peer-checked:bg-emerald-100"></div>
            </label>
        </AdjustmentWrapper>   
    )
}

export default AutoScroll