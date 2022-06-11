import React from 'react'
import { useState } from 'react'

const Switch = ({setView, view}) => {
    const [active, setActive] = useState(1)

    return (
        <div className='flex relative w-40'>
            <div 
                className={'px-2 py-1 w-20 text-center text-sm rounded-md mr-2 font-semibold z-10'}
                onClick={() => setView('chapter')}
            >Chapters</div>
            <div 
                className={'px-2 py-1 w-20 text-center text-sm rounded-md font-semibold z-10'}
                onClick={() => setView('juz')}
            >Juzs</div>
            <div className={`h-full w-20 bg-white absolute rounded-md z-0 transition-all ${view === 'chapter' ? 'left-0' : 'left-1/2'}`}></div>
        </div>
    )
}

export default Switch