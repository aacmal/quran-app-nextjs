import React from 'react'
import { useState } from 'react'

const Switch = ({setView, view}) => {
    const [active, setActive] = useState(1)

    return (
        <div className='flex relative w-40 cursor-pointer py-1 items-center'>
            <div 
                className={'px-2 py-1 w-20 text-center dark:text-gray-50 text-sm rounded-md mr-2 z-10'}
                onClick={() => setView('chapter')}
            >Chapters</div>
            <div 
                className={'px-2 py-1 w-20 text-center dark:text-gray-50 text-sm rounded-md z-10'}
                onClick={() => setView('juz')}
            >Juzs</div>
            <div className={`h-full w-20 bg-white dark:bg-slate-600 absolute rounded-md z-0 transition-all ${view === 'chapter' ? 'left-0' : 'left-1/2'}`}></div>
        </div>
    )
}

export default Switch