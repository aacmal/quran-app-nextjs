import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from 'next/link'

import ChapterBanner from "../../../src/components/Banner/ChapterBanner";
import ChevronIcon from "../../../src/components/icons/chevron";
import QuranReader from "../../../src/components/quranReader/QuranReader";
import Wrapper from "../../../src/components/Wrapper";

export default function Surah(){
    const router = useRouter();
    const [datas, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [chapterId, setChapterId] = useState(router.query.chapter)

    useEffect(() => {
        setLoading(true)

        async function fetchData(url){
            const data = await fetch(url)
            const result = await data.json();
            return result;
        }

        async function getData(id){
            const all_chapter = await fetchData(`https://api.quran.com/api/v4/chapters`)
            const chapter_data = await fetchData(`https://api.quran.com/api/v4/chapters/${id}`)
            const surah_info = await fetchData(`https://api.quran.com//api/v4/chapters/${id}/info?language=id`)
            const verses = await fetchData(`https://api.quran.com/api/v4/verses/by_chapter/${id}?language=id&fields=text_uthmani&translation_fields=resource_name,language_id&translations=33&per_page=220`)
            setData({...chapter_data, ...surah_info, ...verses, ...all_chapter})
            setLoading(false)
        }


        if(router.isReady){
            getData(chapterId)
        }
    }, [router.isReady, chapterId])
    
    console.log(datas);

    return (
        <Wrapper>
            {
                !isLoading &&
                <div>
                    <div className="group p-2 bg-white w-fit rounded-md shadow-lg shadow-emerald-500/10 mb-4 flex items-center relative">
                        <span className="font-bold text-sm text-emerald-500">{datas.chapter.name_simple}</span>
                        <ChevronIcon className="h-5 ml-2 text-emerald-500 transform group-hover:rotate-180 transition-transform delay-300"/>
                        <ul className="invisible opacity-0 top-[10px] transition-all ease-in delay-300 group-hover:visible group-hover:top-[50px] group-hover:opacity-100 absolute bg-white  z-50 p-2 w-36 rounded-md h-72 overflow-auto scrollbar-hide">
                            {
                                datas.chapters.map(e => (
                                    <li
                                        onClick={() => setChapterId(e.id)}
                                        className="px-2 py-1 cursor-pointer hover:bg-emerald-100 hover:text-emerald-500 rounded">
                                        {e.name_simple}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            }
            <ChapterBanner chapterData={datas.chapter} chapterInfo={datas.chapter_info} isLoading={isLoading}/>
            <QuranReader bismillahPre={datas.chapter?.bismillah_pre} versesData={datas.verses} isLoading={isLoading}/>
        </Wrapper>
    )
}