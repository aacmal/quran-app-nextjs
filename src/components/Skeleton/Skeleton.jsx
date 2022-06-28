import classNames from 'classnames'
import React from 'react'
import style from './skeleton.module.css'

const Skeleton = ({className, color}) => {
  let colors;

  switch (color) {
    case 'gray':
      colors = 'bg-gray-300'
      break;
      
    case 'emerald':
      colors = 'bg-emerald-200'
      break;

    default:
      colors = 'bg-emerald-200'
      break;
  }

  return (
    <div className={classNames(style.skeleton, className, colors)}></div>
  )
}

export default Skeleton