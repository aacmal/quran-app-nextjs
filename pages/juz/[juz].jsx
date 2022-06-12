import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import QuranReader from '../../src/components/quranReader/QuranReader'
import Wrapper from '../../src/components/Wrapper'

const JuzPage = () => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        setLoading(true)
        const getVersesByChapter = (juzId) => {
            fetch(`https://api.quran.com/api/v4/verses/by_juz/${juzId}?language=en&per_page=220&fields=text_uthmani&translations=131`)
            .then((res) => res.json())
            .then((res) => {
                setData(res)
                setLoading(false)
            })
        }

        if(router.isReady){
            getVersesByChapter(router.query.juz)
        }

    }, [router.isReady])
    return (
        <Wrapper>
            <QuranReader isLoading={isLoading} versesData={data.verses}/>
        </Wrapper>
    )
}

export default JuzPage