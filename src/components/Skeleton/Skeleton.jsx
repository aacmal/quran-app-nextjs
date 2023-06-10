import classNames from 'classnames'
import React from 'react'

const Skeleton = ({className, color}) => {
  let colors;

  switch (color) {
    case 'gray':
      colors = 'bg-gray-300 dark:bg-slate-700'
      break;
      
    case 'emerald':
      colors = 'bg-emerald-200 dark:bg-emerald-600'
      break;

    default:
      colors = 'bg-emerald-200 dark:bg-emerald-600'
      break;
  }

  return (
    <div className={classNames("rounded-lg animate-pulse bg-gray-300 dark:bg-slate-600", className)}></div>
  )
}

export default Skeleton