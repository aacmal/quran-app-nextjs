import React from 'react'

const JuzWrapper = ({children, juz_number}) => {
  return (
    <div className="p-3 bg-emerald-500/20 gap-3 grid rounded-xl h-fit">
        <span className='font-bold text-emerald-600'>Juz {juz_number}</span>
        {children}
    </div>
  )
}

export default JuzWrapper