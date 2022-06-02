import React from 'react'
import Verses from './Verses'
import Bismillah from "../Bismillah";


const QuranReader = ({versesData, isLoading, bismillahPre}) => {
  return (
    <div className='mt-3'>
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
                    />
                ))
            }
            </>

        }
    </div>
  )
}

export default QuranReader