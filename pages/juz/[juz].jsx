import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import QuranReader from '../../src/components/quranReader/QuranReader'
import Wrapper from '../../src/components/Wrapper'
import { TopbarContext } from '../../src/context/TopbarContext'
import { getVersesByJuz } from '../../src/utils/verse'

const JuzPage = () => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const router = useRouter()

    const { setShowTopbar } = useContext(TopbarContext)

    useEffect(() => {
        setLoading(true)
        setShowTopbar(true)
        const getVerses = (juzId) => {
            getVersesByJuz(juzId, router.locale)
            .then((data) => {
                setData(data)
                setLoading(false)
            })
        }

        if(router.isReady){
            if(router.query.juz >= 30 || router.query.juz < 1 || isNaN(router.query.juz)){
                router.push('/404')
            } else {
                getVerses(router.query.juz)
            }
        }

    }, [router.isReady, router.locale])
    return (
        <Wrapper className="px-5 mt-16 pb-20">
            <Head>
                <title>Juz {router.query.juz}</title>
            </Head>
            <QuranReader isLoading={isLoading} versesData={data.verses} skeletonLoadingCount={3}/>
        </Wrapper>
    )
}

export default JuzPage