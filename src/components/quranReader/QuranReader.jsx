import React, { useEffect, useState } from 'react'
import Verses from './Verses'
import Bismillah from "../Bismillah";
import TafsirModal from '../Tafsir/Tafsir';
import VerseSkeleton from './VerseSkeleton';


const QuranReader = ({versesData, isLoading, bismillahPre, skeletonLoadingCount}) => {
    const [tafsirData, setTafsirData] = useState({
        isOpen: false,
        verseKey: null
    })

    return (
        <div className='mt-3'>
            
            <TafsirModal 
                isOpen={tafsirData.isOpen}
                verseKey={tafsirData.verseKey} 
                closeModal={() => setTafsirData({...tafsirData, isOpen:false})}
            />
            {
                isLoading ?
                        
                    new Array(skeletonLoadingCount).fill().map((e, index) => (
                        <VerseSkeleton key={index}/>
                    )) 
                    :
                    <>
                        <Bismillah className={!bismillahPre && "hidden"}/>
                    {
                        Array.isArray(versesData) ?
                            versesData.map((e, index) => (
                                <Verses
                                    key={index}
                                    verse_number={e.verse_number}
                                    translations={e.translations}
                                    text_uthmani={e.text_uthmani}
                                    verse_key={e.verse_key}
                                    setTafsirData={setTafsirData}
                                    />
                                )) :
                                <Verses
                                        key={versesData.verse_number}
                                        verse_number={versesData.verse_number}
                                        translations={versesData.translations}
                                        text_uthmani={versesData.text_uthmani}
                                        verse_key={versesData.verse_key}
                                        setTafsirData={setTafsirData}
                                />
                    }
                    </>

            }
        </div>
  )
}

export default QuranReader