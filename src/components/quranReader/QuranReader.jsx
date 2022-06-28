import React, { useEffect, useState } from 'react'
import Verses from './Verses'
import Bismillah from "../Bismillah";
import TafsirModal from '../Tafsir/Tafsir';


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
                <div>Loading...</div>
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