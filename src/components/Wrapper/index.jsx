import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='p-5 max-w-screen-2xl mx-auto'>
        {children}
    </div>
  )
}

export default Wrapper