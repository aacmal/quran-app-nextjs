import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import ChapterBanner from "../../../src/components/Banner/ChapterBanner";
import QuranReader from "../../../src/components/quranReader/QuranReader";
import Wrapper from "../../../src/components/Wrapper";
import Head from "next/head";
import { TopbarContext } from "../../../src/context/TopbarContext";
import { RootContext } from "../../../src/context/RootContext";
import { getAllVerseByChapter } from "../../../src/utils/verse";
import { getChapterInfo } from "../../../src/utils/chapter";

export default function Surah(){
    const router = useRouter();
    const [datas, setData] = useState({})
    const [isLoading, setLoading] = useState(true)

    const { setShowTopbar } = useContext(TopbarContext)
    const { allChapters, setCurrentChapterId, currentChapter, setAudioId } = useContext(RootContext)

    useEffect(() => {
        setLoading(true)
        setShowTopbar(true)
        
        async function getData(chapterId){
            const surah_info = await getChapterInfo(chapterId, router.locale)
            const verses = await getAllVerseByChapter(chapterId, router.locale)
            setData({ ...surah_info, ...verses })
            setTimeout(() => {
                setLoading(false)
            }, 500)
        }
        
        if(router.isReady){
            getData(router.query.chapter)
            setCurrentChapterId(router.query.chapter)
        }

    }, [router.isReady, router.query.chapter, router.locale])
    
    
    return (
        <Wrapper className="px-5">
            <Head>
                <title>{allChapters[currentChapter]?.name_simple} ({allChapters[currentChapter]?.translated_name.name})</title>
            </Head>
            <hr className="md:my-10 my-8 border-none"/>
            <ChapterBanner chapterData={allChapters[currentChapter]} chapterInfo={datas.chapter_info} isLoading={isLoading}/>
            <span onClick={() => setAudioId(currentChapter+1)}>play</span>
            <QuranReader bismillahPre={allChapters[currentChapter]?.bismillah_pre} versesData={datas.verses} isLoading={isLoading} skeletonLoadingCount={3}/>
        </Wrapper>
    )
}