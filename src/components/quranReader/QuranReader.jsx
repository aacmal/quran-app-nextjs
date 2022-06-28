import React, { useEffect, useState } from 'react'
import Verses from './Verses'
import Bismillah from "../Bismillah";
import TafsirModal from '../Tafsir/Tafsir';
import Skeleton from '../Skeleton/Skeleton';
import ChapterCardSkeleton from '../chapters/Card/ChapterCardSkeleton';
import VerseSkeleton from './VerseSkeleton';


const QuranReader = ({versesData, isLoading, bismillahPre}) => {
    const [tafsirData, setTafsirData] = useState({
        isOpen: false,
        verseKey: null
    })

    
    console.log(tafsirData);

    return (
        <div className='mt-3'>
            
            <TafsirModal 
                isOpen={tafsirData.isOpen}
                verseKey={tafsirData.verseKey} 
                closeModal={() => setTafsirData({...tafsirData, isOpen:false})}
            />
            {
                isLoading ?
                <div>
                    {
                        new Array(3).fill().map((e) => (
                            <VerseSkeleton/>
                        ))
                    }
                </div>
                :
                <>
                    <Bismillah className={!bismillahPre && "hidden"}/>
                {
                    versesData.map(e => (
                        <Verses
                            key={e.verse_number}
                            verse_number={e.verse_number}
                            translations={e.translations}
                            text_uthmani={e.text_uthmani}
                            verse_key={e.verse_key}
                            setTafsirData={setTafsirData}
                        />
                    ))
                }
                </>

            }
        </div>
  )
}

export default QuranReader