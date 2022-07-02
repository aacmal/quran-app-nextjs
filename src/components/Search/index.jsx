import React from 'react'

const Search = ({className}) => {
  return (
      <input type="text" className={'bg-gray-100 dark:bg-slate-600 dark:text-slate-200 dark:ring-emerald-500 py-2 px-3 my-3 rounded-lg outline-none focus:ring-2 ring-emerald-300 transition-all ' + className} placeholder='/ Cari'/>
  )
}

export default Search