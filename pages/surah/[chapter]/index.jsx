import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from 'next/link'

import ChapterBanner from "../../../src/components/Banner/ChapterBanner";
import QuranReader from "../../../src/components/quranReader/QuranReader";
import Wrapper from "../../../src/components/Wrapper";
import Head from "next/head";
import TopBar from "../../../src/components/TopBar/TopBar";

export default function Surah(){
    const router = useRouter();
    const [datas, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [showHeader, setShowHeader] = useState(true)

    useEffect(() => {
        setShowHeader(true)
        async function fetchData(url){
            const data = await fetch(url)
            const result = await data.json();
            return result;
        }
        
        async function getData(id){
            setLoading(true)
            const all_chapter = await fetchData(`https://api.quran.com/api/v4/chapters`)
            const chapter_data = await fetchData(`https://api.quran.com/api/v4/chapters/${id}`)
            const surah_info = await fetchData(`https://api.quran.com//api/v4/chapters/${id}/info?language=id`)
            const verses = await fetchData(`https://api.quran.com/api/v4/verses/by_chapter/${id}?language=id&fields=text_uthmani&translation_fields=resource_name,language_id&translations=33&per_page=220`)
            setData({...chapter_data, ...surah_info, ...verses, ...all_chapter})
            setTimeout(() => {
                setLoading(false)
            }, 500)
        }


        if(router.isReady){
            getData(router.query.chapter)
        }

        const _showHeader = () => {
                let prevScrollpos = window.pageYOffset+1;
                window.onscroll = function() {
                    let currentScrollPos = window.pageYOffset ?? 0;
                    if(window.scrollY > 1000){
                        if (prevScrollpos > currentScrollPos) {
                            setShowHeader(true)
                        } else {
                            setShowHeader(false)
                        }
                    }
                    prevScrollpos = currentScrollPos;
                }
        }

        _showHeader()
        
    }, [router.isReady, router.query.chapter])
    
    
    return (
        <Wrapper>
            <Head>
                <title>{datas.chapter?.name_simple} ({datas.chapter?.translated_name.name})</title>
            </Head>
            <TopBar chapterId={router?.query.chapter} chapterLists={datas.chapters} showHeader={showHeader}/>
            <hr className="md:my-10 my-8 border-none"/>
            <ChapterBanner chapterData={datas.chapter} chapterInfo={datas.chapter_info} isLoading={isLoading}/>
            <QuranReader bismillahPre={datas.chapter?.bismillah_pre} versesData={datas.verses} isLoading={isLoading}/>
        </Wrapper>
    )
}