import React from 'react'

const Container = ({children}) => {
  return (
    <div className='p-5 max-w-screen-2xl mx-auto'>
        {children}
    </div>
  )
}

export default Container