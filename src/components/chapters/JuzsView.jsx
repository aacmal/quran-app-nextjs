import React, { useEffect, useState } from 'react'
import ChapterCard from './Card/ChapterCard'
import JuzWrapper from './Card/JuzWrapper'

const JuzsView = ({chapterData}) => {
  const [isLoading, setLoading] = useState(true)
  const [juzsData, setJuzsData] = useState(null)
  
  useEffect(() => {
    const getJuzData = () => {
      fetch('https://api.quran.com/api/v4/juzs')
      .then((res) => res.json())
      .then((data) => {
        setJuzsData(data)
        setLoading(false)
      })
    }

    if(!juzsData){
      getJuzData()
    }

  }, [])

  console.log(juzsData);

  return (
    isLoading ?
    <div>Loading</div>:
    juzsData.juzs.map((e) => {
      return (
        <JuzWrapper 
          key={e.id}
          juz_number={e.juz_number}
        >
          <>
            {
              Object.keys(e.verse_mapping).map((key, index) => {
                let {id, translated_name, name_arabic, name_simple} = chapterData[parseInt(key)-1]
                return (
                  <ChapterCard
                    key={index}
                    showAyah
                    chapterId={id}
                    translated_name={translated_name.name}
                    name_arabic={name_arabic}
                    name_simple={name_simple}
                    verses_count={e.verse_mapping[key]}
                  />
                )
              })
            }
          </>
        </JuzWrapper>
      )
    })
  )
}

export default JuzsView