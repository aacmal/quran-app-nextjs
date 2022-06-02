import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Banner from "../src/components/Banner";
import QuranReader from "../src/components/quranReader/QuranReader";
import Wrapper from "../src/components/Wrapper";

export default function Surah(){
    const router = useRouter();
    const [datas, setData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        function getChapterData(chapterId){
            fetch(`https://api.quran.com/api/v4/chapters/${chapterId}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
        }

        function getVersesOfChapter(chapterId){
            fetch(`https://api.quran.com/api/v4/verses/by_chapter/${chapterId}?language=id&fields=text_uthmani&translation_fields=resource_name,language_id&translations=33&per_page=220`)
            .then((res) => res.json())
            .then((data) => {
                setData((datas) => {return {...datas, ...data}})
                setLoading(false)
            })
        }

        if(router.isReady){
            getChapterData(router.query.chapter)
            getVersesOfChapter(router.query.chapter)
 
            
        }
    }, [router.isReady])
    
    console.log(datas);

    return (
        <Wrapper>
            <Banner chapterData={datas.chapter} isInSurah={true} isLoading={isLoading}/>
            <QuranReader bismillahPre={datas.chapter?.bismillah_pre} versesData={datas.verses} isLoading={isLoading}/>
        </Wrapper>
    )
}