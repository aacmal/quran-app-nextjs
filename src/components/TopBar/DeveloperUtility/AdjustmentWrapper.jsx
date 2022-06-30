import React from 'react'

const AdjustmentWrapper = ({children, title}) => (
    <div className='h-14 px-4 text-white bg-emerald-400 flex justify-between items-center rounded-lg'>
        <div className='font-bold'>{title}</div>
        {children}
    </div>
)

export default AdjustmentWrapper