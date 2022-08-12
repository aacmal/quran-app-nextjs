import React, { useContext } from 'react'
import { useEffect } from 'react'
import Wrapper from '../../../src/components/Wrapper'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { getChapterInfo } from '../../../src/utils/chapter'
import { RootContext } from '../../../src/context/RootContext'
import { ArrowIcon } from '../../../src/components/icons'

const DetailInfoSurah = () => {
    const router = useRouter()
    const [chapterInfo, setChapterInfo] = useState({})
    const [loading, setLoading] = useState(true)

    const { allChapters, setCurrentChapterId, currentChapter } = useContext(RootContext)


    useEffect(() => {
        async function getData(chapterId){
            getChapterInfo(chapterId, router.locale)
            .then((data) => {
                setChapterInfo(data.chapter_info)
                setLoading(false)
            })
        }

        if(router.isReady){
            if(router.query.chapter >= 114 || router.query.chapter < 1 || isNaN(router.query.chapter)){
                router.push('/404')
            } else {
                getData(router.query.chapter)
                setCurrentChapterId(router.query.chapter)
            }
        }

    }, [router.isReady, router.locale])
    return (
        <div className='w-full min-h-screen bg-gradient-to-br from-emerald-300 dark:from-slate-600 to-emerald-700 dark:to-slate-800 pb-32'>
            <Wrapper className="px-5 pt-14 lg:pt-20 mt-12">
                {
                    loading ?
                    <div>Loading</div>
                    :
                    <div>
                        <button  
                            onClick={() => router.push(`/surah/${router.query.chapter}`)}
                            className='bg-emerald-100  text-emerald-500 dark:bg-slate-500 px-3 py-2 rounded-md mb-8 flex items-center'
                        >
                            <ArrowIcon   className="h-5 mr-3"/>
                            <span>Kembali ke surah</span>
                        </button>
                        <div className='text-center text-white'>
                            <h1 className='text-2xl font-bold'>{allChapters[parseInt(chapterInfo.chapter_id)-1].name_complex}</h1>
                            <span>{allChapters[parseInt(chapterInfo.chapter_id)-1].verses_count} Ayah</span>
                            <br />
                            <span>Diturunkan di <span className='capitalize'>{allChapters[parseInt(chapterInfo.chapter_id)-1].revelation_place}</span></span>
                        </div>
                        <hr className='my-5'/>
                        <section className='text-white surah-info' dangerouslySetInnerHTML={{__html:chapterInfo.text}}></section>
                    </div>
                }
            </Wrapper>
        </div>
    )
}

export default DetailInfoSurah