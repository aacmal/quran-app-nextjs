import React from 'react'
import classNames from 'classnames'

const IconWrapper = ({children, className, onHover="hover:bg-emerald-200 cursor-pointer", onClick}) => (
  <div onClick={onClick} className={classNames('h-10 w-10 grid place-items-center rounded cursor-pointer', className, onHover)}>
      {children}
  </div>
)

export default IconWrapper