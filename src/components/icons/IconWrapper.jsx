import React from 'react'
import classNames from 'classnames'

const IconWrapper = ({children, className, onClick, onHover}) => (
  <div onClick={onClick} className={classNames('h-10 w-10 grid place-items-center rounded cursor-pointer', className, onHover ? onHover : "hover:bg-emerald-200 dark:hover:bg-emerald-500")}>
      {children}
  </div>
)

export default IconWrapper