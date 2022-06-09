import React from 'react'
import { useState } from 'react'
import { Bookmark } from '../icons'
import BannerWrapper from './BannerWrapper'
import SurahInfo from './SurahInfo'

const ChapterBanner = ({chapterData, chapterInfo, isLoading}) => {
    const [isInfoOpen, setInfoOpen] = useState(false)

    return (
        <BannerWrapper>
            {
                isLoading ? 
                <div>Loading</div>
                :
                <div className={`text-center z-20 relative text-gray-50 duration-150 transition-all ${isInfoOpen ? 'max-h-96':'max-h-32'}`}>
                    <Info 
                        className="h-5 w-5 absolute left-0 top-0"
                        onClick={() => setInfoOpen(!isInfoOpen)}
                    />
                    <Bookmark className="h-5 w-5 absolute right-0 top-0"/>
                    <h1 className='text-2xl font-bold mb-0 text-gray-50'>{chapterData.name_simple}</h1>
                    <span className='text-sm block'>{chapterData.translated_name.name}</span>
                    <hr  className='my-3'/>
                    <SurahInfo
                        verses_count={chapterData.verses_count}
                        revelation_place={chapterData.revelation_place}
                        short_text={chapterInfo.short_text}
                        className={`${isInfoOpen ? 'max-h-96 visible opacity-100':'max-h-0 invisible opacity-0'}`}
                        chapterId={chapterData.id}
                    />
                    <span className={`text-sm transition-all ${isInfoOpen ? 'invisible opacity-0':'visible opacity-100'}`}><span className='capitalize'>{chapterData.revelation_place}</span> - {chapterData.verses_count} Ayah</span>
                </div>
            }
        </BannerWrapper>
    )
}

export default ChapterBanner