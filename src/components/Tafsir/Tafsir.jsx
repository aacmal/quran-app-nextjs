import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'
import { getSingleTafsir } from '../../utils/tafsir'
import IconWrapper from '../icons/IconWrapper'
import { XIcon } from '../icons'
import TafsirSkeleton from './TafsirSkeleton'

import tafsirStyle from './tafsirText.module.css'
import { getSpecificVerse } from '../../utils/verse'
import ArabicText from '../quranReader/ArabicText'
import { RootContext } from '../../context/RootContext'

const TafsirModal = ({isOpen, verseKey, verseId, closeModal}) => {

    const { allChapters, currentChapter } = useContext(RootContext)

    const [tafsirData, setTafsirData] = useState(null)
    const [verse, setVerseData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    
    const router = useRouter()

    useEffect(() => {
        const localeKeyCheck = () => (router.locale === 'id') ? verseId : verseKey

        function getTafsirByVerse(verseKey, verseId){
            Promise.all([getSingleTafsir(verseId, "en"), getSpecificVerse(verseKey, router.locale)])
            .then(([tafsirData, verseData]) => {
                setTafsirData(tafsirData)
                setVerseData(verseData.verse)
                setLoading(false)
            })
        }


        if (isOpen === true) {
            getTafsirByVerse(verseKey, localeKeyCheck())
        } else {
            setLoading(true)
        }
        
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'

        
    }, [isOpen])
    
    return (
        <div>
            <div className={classNames(
                'h-screen w-screen fixed bg-black/60 dark:bg-black/50 top-0 left-0 z-[60] transition-all',
                {"visible opacity-100": isOpen},
                {"invisible opacity-0": !isOpen}
            )}></div>
            
            <div className={classNames(
                'z-[70] h-screen pb-20 fixed w-screen top-0 left-0 overflow-y-scroll flex justify-center pt-28',
                {"visivle": isOpen},
                {"invisible": !isOpen}
            )}>
                <div className={classNames('left-0 top-0 h-screen w-screen', {"fixed": isOpen}, {"hidden": !isOpen})} onClick={closeModal}></div>
                <div className={classNames(
                    'z-[70] h-min min-h-[80%] w-[94%] max-w-7xl bg-gray-100 dark:bg-slate-600 dark:text-slate-100  p-6 xl:p-12 lg:pt-16 relative rounded-md transform transition-all',
                    {"translate-y-0 opacity-100": isOpen},
                    {"translate-y-52 opacity-0": !isOpen}
                )}>
                    <IconWrapper className="absolute group top-3 right-3 border-2 border-transparent" onHover='hover:border-emerald-500' onClick={closeModal}>
                        <XIcon className="h-7 group-hover:text-emerald-500"/>
                    </IconWrapper>
                    {
                        !isLoading
                        ? <>
                            <div className="bg-emerald-500 w-fit py-2 px-3 font-bold text-white rounded-md">
                                {allChapters[currentChapter].name_simple}<span className="font-normal ml-3">({verseKey})</span> 
                            </div>
                            <div className='w-full flex flex-col dark:text-slate-100'>
                                <ArabicText
                                    textUthmani={verse.text_uthmani}
                                    verseNumber={verse.verse_number}
                                    verseKey={verse.verse_key}
                                />
                                <span dangerouslySetInnerHTML={{__html:verse.translations[0].text}} className='text-base md:text-xl transition-all mt-5 inline-block'></span>
                            </div>
                            <div className="h-px w-full bg-emerald-500  my-6"></div>
                            <div>
                                <div className={tafsirStyle.tafsir_text} dangerouslySetInnerHTML={{__html:tafsirData.tafsir?.text}}></div>
                                <span className='mt-3 block'>Source : https://quran.com</span>
                            </div>
                        </> 
                        : <TafsirSkeleton/>
                    }
                </div>
            </div>
        </div>
  )
}

export default TafsirModal