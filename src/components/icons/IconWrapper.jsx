import React from 'react'
import classNames from 'classnames'

const IconWrapper = ({children, className, onHover="hover:bg-emerald-200 cursor-pointer"}) => (
  <div className={classNames('p-1 rounded cursor-pointer', className, onHover)}>
      {children}
  </div>
)

export default IconWrapper