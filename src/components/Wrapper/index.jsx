import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='p-5 max-w-7xl mx-auto'>
        {children}
    </div>
  )
}

export default Wrapper