import React from 'react'
import classNames from 'classnames'

const IconWrapper = ({children, className, active, onClick}) => {
  return (
    <div onClick={onClick} className={classNames('p-2 rounded', className, {'bg-emerald-100': active})}>
        {children}
    </div>
  )
}

export default IconWrapper