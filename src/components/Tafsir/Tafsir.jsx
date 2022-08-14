import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getSingleTafsir } from '../../utils/tafsir'
import IconWrapper from '../icons/IconWrapper'
import { XIcon } from '../icons'
import TafsirSkeleton from './TafsirSkeleton'

import tafsirStyle from './tafsirText.module.css'
import { getSpecificVerse } from '../../utils/verse'
import { data } from 'autoprefixer'
import ArabicText from '../quranReader/ArabicText'

const TafsirModal = ({isOpen, verseKey, verseId, closeModal}) => {

    const [tafsirData, setTafsirData] = useState(null)
    const [verse, setDataVerse] = useState(null)
    const [isLoading, setLoading] = useState(true)
    
    const router = useRouter()

    useEffect(() => {
        const localeKeyCheck = () => (router.locale === 'id') ? verseId : verseKey

        function getTafsirByVerse(verseKey, verseId){
            getSingleTafsir(verseId, router.locale)
            .then((dataTafsir) => {
                setTafsirData(dataTafsir)
            })
            .then(
                getSpecificVerse(verseKey, router.locale)
                .then(dataVerse => setDataVerse(dataVerse.verse))
            )
            .then(
                () => {
                    setLoading(false)
                }
            )
        }


        if (isOpen === true) {
            getTafsirByVerse(verseKey, localeKeyCheck())
        } else {
            setTafsirData(null)
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
                    'z-[70] h-min min-h-[80%] w-[94%] max-w-7xl bg-gray-100 dark:bg-slate-600 dark:text-slate-100  p-6 xl:p-12 pt-16 relative rounded-md transform transition-all',
                    {"translate-y-0 opacity-100": isOpen},
                    {"translate-y-52 opacity-0": !isOpen}
                )}>
                    <IconWrapper className="absolute group top-3 right-3 border-2 border-transparent" onHover='hover:border-emerald-500' onClick={closeModal}>
                        <XIcon className="h-7 group-hover:text-emerald-500"/>
                    </IconWrapper>
                    {
                        !isLoading && tafsirData
                        ? <>
                            <div className='w-full flex flex-col dark:text-slate-100'>
                                <ArabicText
                                    textUthmani={verse.text_uthmani}
                                    verseNumber={verse.verse_number}
                                    verseKey={verse.verse_key}
                                />
                                <span dangerouslySetInnerHTML={{__html:verse.translations[0].text}} className='text-base md:text-xl transition-all mt-5 inline-block'></span>
                            </div>
                            <div className="h-px w-full bg-emerald-500  my-6"></div>
                            {
                                (router.locale === "id")
                                ? <div>
                                    <div className='mb-3'>
                                        <h3 className='font-bold text-lg mb-1'>Tafsir Wajiz</h3>
                                        <p className='lg:text-lg'>
                                            {tafsirData.tafsir[0].tafsir_wajiz}
                                        </p>
                                    </div>
                                    <div>
                                        <h3  className='font-bold text-lg mb-1'>Tafsir Tahlili</h3>
                                        <p className='lg:text-lg'>
                                            {tafsirData.tafsir[0].tafsir_tahlili}
                                        </p>
                                    </div>
                                    <span className='mt-3 block'>Sumber : https://quran.kemenag.go.id</span>
                                </div>
                                : <div>
                                    <div className={tafsirStyle.tafsir_text} dangerouslySetInnerHTML={{__html:tafsirData.tafsir?.text}}></div>
                                    <span className='mt-3 block'>Sumber : https://quran.com</span>
                                </div>
                            }
                        </> 
                        : <TafsirSkeleton/>
                    }
                </div>
            </div>
        </div>
  )
}

export default TafsirModal