import React from 'react'

const Search = ({className}) => {
  return (
      <input type="text" className={'bg-white py-2 px-3 my-3 rounded-lg outline-none focus:ring-2 ring-emerald-200 transition-all ' + className} placeholder='/ Cari'/>
  )
}

export default Search