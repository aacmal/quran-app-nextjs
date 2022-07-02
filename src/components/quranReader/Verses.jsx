import Star from '../icons/star'
import Bookmark from '../icons/bookmark'
import Copy from '../icons/copy'
import classNames from 'classnames'
import IconWrapper from '../icons/IconWrapper'
import TafsirIcon from '../icons/TafsirIcon'
import { useContext } from 'react'
import { StyleContext } from '../../context/StyleContext'


const Verses = ({verse_number, translations, text_uthmani, verse_key, setTafsirData}) => {

    const { currentFontSize } = useContext(StyleContext)

    function copyToClipboard(content){
        navigator.clipboard.writeText(content)
    }

    const verseId = verse_key.split(':')

    return (
        <> 
            <div id={verseId[1]} className='flex justify-between py-3 md:flex-row flex-col'>
                <div className='flex md:flex-col flex-row items-center mb-4'>
                    <div className='relative grid place-items-center h-9 w-9 md:h-12 md:w-12'>
                        <span className='text-xs font-semibold md:text-lg text-gray-900 dark:text-slate-100'>{verse_number}</span>
                        <Star className="absolute h-8 w-8 md:h-12 md:w-12 left-0"/>
                    </div>
                    <div className='md:mt-3 md:ml-0 ml-2  flex md:flex-col flex-row items-center justify-between md:h-28 w-full md:w-fit'>
                        <div className='flex md:flex-col'>
                            <IconWrapper>
                                <Bookmark className="md:h-6 h-5  text-gray-500"/>
                            </IconWrapper>
                            <IconWrapper>
                                <Copy onClick={() => copyToClipboard(text_uthmani)} className="md:h-6 h-5 text-gray-500 active:text-emerald-500 cursor-pointer"/>
                            </IconWrapper>
                            <IconWrapper onClick={() => setTafsirData({isOpen: true, verseKey: verse_key})}>
                                <TafsirIcon className="md:h-6 h-5  text-gray-500"/>
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