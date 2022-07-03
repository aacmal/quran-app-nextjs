import React from 'react'
import { useEffect } from 'react'
import Wrapper from '../../../src/components/Wrapper'
import { useRouter } from 'next/router'
import { useState } from 'react'

const DetailInfoSurah = () => {
    const router = useRouter()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function fetchData(url){
            const data = await fetch(url)
            const result = await data.json();
            return result;
        }

        async function getData(chapterId){
            const chapterData = await fetchData(`https://api.quran.com/api/v4/chapters/${chapterId}`)
            const chapterInfo = await fetchData(`https://api.quran.com/api/v4/chapters/${chapterId}/info?language=id`)
            setData({...chapterData, ...chapterInfo})
            setLoading(false)
        }

        if(router.isReady){
            getData(router.query.chapter)
        }

        console.log(data);
    }, [router.isReady])
    const {chapter, chapter_info} = data
    return (
        <div className='w-full min-h-screen bg-gradient-to-br from-emerald-300 dark:from-slate-600 to-emerald-700 dark:to-slate-800'>
            <Wrapper className="px-5">
                {
                    loading ?
                    <div>Loading</div>
                    :
                    <div>
                        <div className='text-center text-white'>
                            <h1 className='text-xl font-bold'>{chapter.name_complex}</h1>
                            <span>{chapter.verses_count} Ayah</span>
                            <br />
                            <span>Diturunkan di <span className='capitalize'>{chapter.revelation_place}</span></span>
                        </div>
                        <hr className='my-5'/>
                        <p className='text-white' dangerouslySetInnerHTML={{__html:chapter_info.text}}></p>
                    </div>
                }
            </Wrapper>
        </div>
    )
}

export default DetailInfoSurah