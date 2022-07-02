import classNames from 'classnames'
import React from 'react'

const Wrapper = ({children, className}) => {
  return (
    <div className={classNames('pt-5 max-w-screen-2xl mx-auto relative', className)}>
        {children}
    </div>
  )
}

export default Wrapper