import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ChapterBanner from "../../../src/components/Banner/ChapterBanner";
import QuranReader from "../../../src/components/quranReader/QuranReader";
import Wrapper from "../../../src/components/Wrapper";

export default function Surah(){
    const router = useRouter();
    const [datas, setData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        async function fetchData(url){
            const data = await fetch(url)
            const result = await data.json();
            return result;
        }

        async function getData(id){
            const chapter_data = await fetchData(`https://api.quran.com/api/v4/chapters/${id}`)
            const surah_info = await fetchData(`https://api.quran.com//api/v4/chapters/${id}/info?language=id`)
            const verses = await fetchData(`https://api.quran.com/api/v4/verses/by_chapter/${id}?language=id&fields=text_uthmani&translation_fields=resource_name,language_id&translations=33&per_page=220`)
            setData({...chapter_data, ...surah_info, ...verses})
            setLoading(false)
        }


        if(router.isReady){
            getData(router.query.chapter)
        }
    }, [router.isReady])
    
    console.log(datas);

    return (
        <Wrapper>
            <ChapterBanner chapterData={datas.chapter} chapterInfo={datas.chapter_info} isLoading={isLoading}/>
            <QuranReader bismillahPre={datas.chapter?.bismillah_pre} versesData={datas.verses} isLoading={isLoading}/>
        </Wrapper>
    )
}