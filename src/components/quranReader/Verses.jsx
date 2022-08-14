import { useContext, useState } from 'react'
import { StyleContext } from '../../context/StyleContext'
import { RootContext } from '../../context/RootContext'
import { useRouter } from 'next/router'
import ArabicText from './ArabicText'
import { BookmarkIcon, CopyIcon, TafsirIcon, StarIcon } from '../icons'
import IconWrapper from '../icons/IconWrapper'


const Verses = ({id, verse_number, translations, text_uthmani, verse_key, setTafsirData, mode='translated'}) => {

    const { readMode } = useContext(StyleContext)
    const { bookmarkData, addBookmark, deleteBookmark } = useContext(RootContext)
    const [isBookmarked, setBookmark] = useState(bookmarkData.includes(verse_key))

    const router = useRouter()

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

    if(readMode === 'translated'){
        return (
            <> 
                <div id={verse_number} className='flex justify-between py-3 md:flex-row flex-col'>
                    <div className='flex md:flex-col flex-row items-center mb-4'>
                        <div className='relative grid place-items-center h-9 w-9 md:h-12 md:w-12'>
                            <span className='text-xs font-semibold md:text-lg text-gray-900 dark:text-slate-100'>{verse_number}</span>
                            <StarIcon className="absolute h-8 w-8 md:h-12 md:w-12 left-0"/>
                        </div>
                        <div className='md:mt-3 md:ml-0 ml-2  flex md:flex-col flex-row items-center justify-between md:h-28 w-full md:w-fit'>
                            <div className='flex md:flex-col'>
                                <IconWrapper 
                                    onClick={() => handleBookmarkClick(verse_key)}
                                >
                                    <BookmarkIcon fill={isBookmarked} className={`md:h-6 h-5 ${isBookmarked ? "text-emerald-500":"text-gray-500 dark:hover:text-gray-50"}`}/>
                                </IconWrapper>
                                <IconWrapper className="text-gray-500 dark:hover:text-gray-50 group cursor-pointer">
                                    <CopyIcon onClick={() => copyToClipboard(text_uthmani)} className="md:h-6 h-5 group-active:text-emerald-500"/>
                                </IconWrapper>
                                <IconWrapper 
                                    onClick={() => setTafsirData({
                                        isOpen: true,
                                        verseKey: verse_key,
                                        verseId: id,
                                    })}
                                    className="text-gray-500 dark:hover:text-gray-50"
                                >
                                    <TafsirIcon className="md:h-6 h-5"/>
                                </IconWrapper>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[92%] flex flex-col dark:text-slate-100'>
                        <ArabicText
                            textUthmani={text_uthmani}
                            verseNumber={verse_number}
                            verseKey={verse_key}
                        />
                        <span dangerouslySetInnerHTML={{__html:translations[0].text}} className='text-base md:text-xl transition-all mt-5 inline-block'></span>
                    </div>
                </div>
                <hr  className='border-none my-3 lg:my-5 h-[1px] bg-emerald-500'/>
            </>

        )
    } else {
        return (
            <ArabicText
                textUthmani={text_uthmani}
                verseNumber={verse_number}
                verseKey={verse_key}
            />
        )
    }
}

export default Verses