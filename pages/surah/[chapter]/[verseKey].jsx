import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { getSpecificVerse } from '../../../src/utils/verse';
import Wrapper from '../../../src/components/Wrapper';
import QuranReader from '../../../src/components/quranReader/QuranReader';
import { TopbarContext } from '../../../src/context/TopbarContext';
import ArrowIcon from '../../../src/components/icons/ArrowIcon';
import Head from 'next/head';
import { RootContext } from '../../../src/context/RootContext';

const SpecificVerse = () => {
	const router = useRouter();
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)

	const { setShowTopbar } = useContext(TopbarContext)
	const { allChapters, setCurrentChapterId, currentChapter } = useContext(RootContext)

    useEffect(() => {
		setShowTopbar(true)
        function getData(verseKey){
            setLoading(true)
            getSpecificVerse(verseKey)
            .then((data) => {
				setData(data)
				setTimeout(() => {
				  setLoading(false)
				}, 500)
			  })
        }


        if(router.isReady){
            getData(`${router.query.chapter}:${router.query.verseKey}`)
			setCurrentChapterId(router.query.chapter)
        }

    }, [router.isReady])

	return (
		<Wrapper className="px-5 lg:mt-24 mt-16">
			<Head>
				<title>{allChapters[currentChapter]?.name_simple} : {router.query?.verseKey}</title>
			</Head>
			<button  
				onClick={() => router.push(`/surah/${router.query.chapter}`)}
				className='bg-emerald-400 text-emerald-50 px-3 py-2 rounded-md mb-8 flex items-center'
			>
				<ArrowIcon className="h-5 mr-3"/>
				<span>Kembali ke surah</span>
			</button>
			<QuranReader
				isLoading={isLoading}
				versesData={data.verse}
			/>
		</Wrapper>
	)
}

export default SpecificVerse