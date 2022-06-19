import React, { useState } from 'react'
import { Bookmark } from '../icons'
import CogIcon from '../icons/cog'
import IconWrapper from '../icons/IconWrapper'
import QuranIcon from '../icons/quran'

const NavBar = () => {
  const [index, setIndex] = useState(1)

  return (
    <div className='flex bg-white shadow-emerald-800 shadow-2xl h-16 py-4 px-6 w-full fixed bottom-0 justify-around items-center'>
      <IconWrapper onClick={() => setIndex(1)} active={index === 1 && true}>
        <QuranIcon className="h-7 w-7"/>
      </IconWrapper>
      <IconWrapper onClick={() => setIndex(2)} active={index === 2 && true}>
        <Bookmark className="h-7 text-emerald-500" fill/>
      </IconWrapper >
      <IconWrapper onClick={() => setIndex(3)} active={index === 3 && true}>
        <CogIcon className="h-7 text-emerald-500"/>
      </IconWrapper>
    </div>
  )
}

export default NavBar