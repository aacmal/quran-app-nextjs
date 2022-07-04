import React from 'react'
import { useRouter } from 'next/router'

const BookmarkedItem = ({name_simple, verse_key}) => {
  const router = useRouter()

  const verseKey = verse_key.split(':')

  return (
    <button onClick={() => router.push(`/surah/${verseKey[0]}/${verseKey[1]}`)} className='rounded-lg w-fit px-2 h-10 bg-emerald-200 flex justify-center items-center border-2 border-transparent hover:border-white'>
        <span className='font-bold text-emerald-800 mr-2'>{name_simple}</span><span className='text-emerald-700'>{verse_key}</span>
    </button>
  )
}

export default BookmarkedItem