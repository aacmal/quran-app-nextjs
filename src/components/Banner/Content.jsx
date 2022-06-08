import Link from 'next/link'
import {useState} from 'react'
import Bookmark from '../icons/bookmark'
import History from '../icons/history'
import Info from '../icons/info'

const SurahInfo = ({verses_count, revelation_place, short_text, chapterId, className}) => {

    return (
        <div className={'text-left text-sm transition-all ' + className}>
            <div className='mb-3'>
                <span><span className='font-bold'>Jumlah Ayah :  </span>{verses_count}</span>
                <br />
                <span className='capitalize'><span className='font-bold'>Tempat Wahyu :  </span>{revelation_place}</span>
                <br />
            </div>
            <p>{short_text}</p>
            <br />
            <Link href={`/surah/${chapterId}/info`}>
                <span className='text-blue-600'>Tampilkan lebih lengkap</span>
            </Link>
        </div>
    )
}

const Content = ({isInSurah, chapterData, chapterInfo}) => {
    const [isInfoOpen, setInfoOpen] = useState(false)

    if(isInSurah){
        return (
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