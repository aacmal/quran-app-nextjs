import React from 'react'
import Bookmark from '../icons/bookmark'
import History from '../icons/history'

const Content = ({isInSurah, chapterData}) => {
    if(isInSurah){
        return (
            <div className='text-center z-20 relative text-gray-50 p-2'>
                <Bookmark className="h-5 w-5 absolute right-1 top-1"/>
                <h1 className='text-2xl font-bold mb-0 text-gray-50'>{chapterData.name_simple}</h1>
                <span className='text-sm block'>{chapterData.translated_name.name}</span>
                <hr  className='my-3'/>
                <span className='text-sm'><span className='capitalize'>{chapterData.revelation_place}</span> - {chapterData.verses_count} Ayah</span>
            </div>
        )
    } else {
        return (
            <div className='flex z-10 flex-col h-24 justify-between w-full text-gray-50'>
                <span className='flex text-sm'><History className="h-5 w-5 mr-2"/>Terakhir dibaca</span>
                <div className=''>
                    <h2 className='text-xl font-bold'>Al - Fatiha</h2>
                    <p className='text-xs'>Surah No. 1</p>
                </div>
                <span className='text-xs'>Klik untuk melanjutkan</span>
            </div>
        )
    }
}

export default Content