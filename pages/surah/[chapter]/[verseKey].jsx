import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { getSpecificVerse } from '../../../src/utils/verse';
import Wrapper from '../../../src/components/Wrapper';
import Verses from '../../../src/components/quranReader/Verses';
import QuranReader from '../../../src/components/quranReader/QuranReader';

const SpecificVerse = () => {
	const router = useRouter();
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        
        function getData(verseKey){
            setLoading(true)
            getSpecificVerse(verseKey)
            .then((data) => {
				console.log(data);
				setData(data)
				setTimeout(() => {
				  setLoading(false)
				}, 500)
			  })
        }


        if(router.isReady){
            getData(`${router.query.chapter}:${router.query.verseKey}`)
        }

        console.log(data);
    }, [router.isReady])

	return (
		<Wrapper className="px-5">
			<QuranReader
				isLoading={isLoading}
				versesData={data.verse}
			/>
		</Wrapper>
	)
}

export default SpecificVerse