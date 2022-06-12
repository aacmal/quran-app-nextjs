import React from 'react'
import { useState } from 'react'
import { Bookmark, Info } from '../icons'
import BannerWrapper from './BannerWrapper'
import SurahInfo from './SurahInfo'

const ChapterBanner = ({chapterData, chapterInfo, isLoading}) => {
    const [isInfoOpen, setInfoOpen] = useState(false)

    return (
        <BannerWrapper imageOpacity={0.2} imageScale={1.2}>
            {
                isLoading ? 
                <div>Loading</div>
                :
                <div className={`text-center z-20 relative text-gray-50 duration-150 ${isInfoOpen ? 'max-h-96':'max-h-32'}`}>
                    <Info
                        className="h-5 lg:h-8 cursor-pointer absolute left-0 top-0 text-gray-50"
                        onClick={() => setInfoOpen(!isInfoOpen)}
                    />
                    <Bookmark className="h-5 cursor-pointer lg:h-8 absolute right-0 top-0 text-gray-50"/>
                    <h1 className='text-2xl lg:text-3xl font-bold mb-0 text-gray-50'>{chapterData.name_simple}</h1>
                    <span className='text-sm block lg:text-xl text-gray-50'>{chapterData.translated_name.name}</span>
                    <hr  className={`my-3 mx-auto lg:my-5 md:transition-all ${isInfoOpen ? 'max-w-full':'max-w-md'}`}/>
                    <SurahInfo
                        verses_count={chapterData.verses_count}
                        revelation_place={chapterData.revelation_place}
                        short_text={chapterInfo.short_text}
                        className={`${isInfoOpen ? 'max-h-96 visible opacity-100':'max-h-0 invisible opacity-0'}`}
                        chapterId={chapterData.id}
                    />
                    <span className={`text-sm transition-all lg:text-lg text-gray-50 ${isInfoOpen ? 'invisible opacity-0':'visible opacity-100'}`}><span className='capitalize'>{chapterData.revelation_place}</span> - {chapterData.verses_count} Ayah</span>
                </div>
            }
        </BannerWrapper>
    )
}

export default ChapterBanner