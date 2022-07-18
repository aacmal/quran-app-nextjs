import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getSingleTafsir } from '../../utils/tafsir'
import IconWrapper from '../icons/IconWrapper'
import XIcons from '../icons/XIcons'
import TafsirSkeleton from './TafsirSkeleton'

import tafsirStyle from './tafsirText.module.css'

const TafsirModal = ({isOpen, verseKey, closeModal}) => {

    const [tafsirData, setTafsirData] = useState(null)
    
    const router = useRouter()

    useEffect(() => {
        async function getTafsirByVerse(verseKey){
            getSingleTafsir(verseKey, router.locale)
            .then((data) => {
                setTafsirData(data)
            })
        }

        if (isOpen === true) {
            getTafsirByVerse(verseKey)
        } else {
            setTafsirData(null)
        }
        
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'

        console.log(tafsirData);
        
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
                    'z-[70] h-min min-h-[80%] w-[94%] max-w-7xl bg-gray-100 dark:bg-slate-600 dark:text-slate-100  p-6 xl:p-12 relative rounded-md transform transition-all',
                    {"translate-y-0 opacity-100": isOpen},
                    {"translate-y-52 opacity-0": !isOpen}
                )}>
                    <IconWrapper className="absolute group top-3 right-3 border-2 border-transparent" onHover='hover:border-emerald-500' onClick={closeModal}>
                        <XIcons className="h-7 group-hover:text-emerald-500"/>
                    </IconWrapper>
                    {
                        tafsirData ?
                           (router.locale === "id") ? 
                                <div>
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
                        : <TafsirSkeleton/>
                    }
                </div>
            </div>
        </div>
  )
}

export default TafsirModal