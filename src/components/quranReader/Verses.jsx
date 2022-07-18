import Star from '../icons/star'
import Bookmark from '../icons/bookmark'
import Copy from '../icons/copy'
import classNames from 'classnames'
import IconWrapper from '../icons/IconWrapper'
import TafsirIcon from '../icons/TafsirIcon'
import { useContext, useState } from 'react'
import { StyleContext } from '../../context/StyleContext'
import { RootContext } from '../../context/RootContext'
import { useRouter } from 'next/router'


const Verses = ({id, verse_number, translations, text_uthmani, verse_key, setTafsirData}) => {

    const { bookmarkData, toggleBookmarkVerse, addBookmark, deleteBookmark } = useContext(RootContext)
    const [isBookmarked, setBookmark] = useState(bookmarkData.includes(verse_key))

    const router = useRouter()

    const { currentFontSize } = useContext(StyleContext)

    function copyToClipboard(content){
        navigator.clipboard.writeText(content)
    }

    function handleBookmarkClick(verseKey){
        if(isBookmarked){
            deleteBookmark(verseKey)
        } else {
            addBookmark(verseKey)
        }
        setBookmark(!isBookmarked)
    }

    return (
        <> 
            <div id={verse_number} className='flex justify-between py-3 md:flex-row flex-col'>
                <div className='flex md:flex-col flex-row items-center mb-4'>
                    <div className='relative grid place-items-center h-9 w-9 md:h-12 md:w-12'>
                        <span className='text-xs font-semibold md:text-lg text-gray-900 dark:text-slate-100'>{verse_number}</span>
                        <Star className="absolute h-8 w-8 md:h-12 md:w-12 left-0"/>
                    </div>
                    <div className='md:mt-3 md:ml-0 ml-2  flex md:flex-col flex-row items-center justify-between md:h-28 w-full md:w-fit'>
                        <div className='flex md:flex-col'>
                            <IconWrapper 
                                onClick={() => handleBookmarkClick(verse_key)}
                            >
                                <Bookmark fill={isBookmarked} className={`md:h-6 h-5 ${isBookmarked ? "text-emerald-500":"text-gray-500 dark:hover:text-gray-50"}`}/>
                            </IconWrapper>
                            <IconWrapper className="text-gray-500 dark:hover:text-gray-50 group cursor-pointer">
                                <Copy onClick={() => copyToClipboard(text_uthmani)} className="md:h-6 h-5 group-active:text-emerald-500"/>
                            </IconWrapper>
                            <IconWrapper 
                                onClick={() => setTafsirData({
                                    isOpen: true, verseKey: (router.locale === 'id') ? id : verse_key
                                })}
                                className="text-gray-500 dark:hover:text-gray-50"
                            >
                                <TafsirIcon className="md:h-6 h-5"/>
                            </IconWrapper>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[92%] flex flex-col dark:text-slate-100'>
                    <div style={{fontSize: currentFontSize}} id='arab' className='font-serif text-right inline-block text-3xl md:text-4xl lg:text-5xl transition-all lg:leading-loose md:leading-loose leading-relaxed'>{text_uthmani}</div>
                    <span dangerouslySetInnerHTML={{__html:translations[0].text}} className='text-base md:text-xl transition-all mt-5 inline-block'></span>
                </div>
            </div>
            <hr  className='border-none my-3 lg:my-5 h-[1px] bg-emerald-500'/>
        </>

    )
}

export default Verses