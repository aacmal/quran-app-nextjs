import React from 'react'
import classNames from 'classnames'

const IconWrapper = ({children, className, onClick, onHover}) => (
  <button onClick={onClick} className={classNames('h-10 w-10 grid place-items-center rounded cursor-pointer', className, onHover ? onHover : "md:hover:bg-emerald-200/60 md:dark:hover:bg-emerald-500/60")}>
      {children}
  </button>
)

export default IconWrapper