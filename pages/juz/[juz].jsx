import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import QuranReader from '../../src/components/quranReader/QuranReader'
import Wrapper from '../../src/components/Wrapper'
import { TopbarContext } from '../../src/context/TopbarContext'

const JuzPage = () => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const router = useRouter()

    const { setShowTopbar } = useContext(TopbarContext)

    useEffect(() => {
        setShowTopbar(true)
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
        <Wrapper className="px-5 mt-16">
            <Head>
                <title>Juz {router.query.juz}</title>
            </Head>
            <QuranReader isLoading={isLoading} versesData={data.verses}/>
        </Wrapper>
    )
}

export default JuzPage