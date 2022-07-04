import classNames from 'classnames'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import HomeBanner from '../src/components/Banner/HomeBanner'
import BookmarkedVerseLists from '../src/components/BookmarkedVerseLists/BookmarkedVerseLists'
import Chapter from '../src/components/chapters'
import Header from '../src/components/Header'
import Switch from '../src/components/Switch'
import Wrapper from '../src/components/Wrapper'
import { getAllChaptersData } from '../src/utils/chapter'

export default function Home() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [view, setView] = useState('chapter')

  useEffect(() => {
      setLoading(true)
      getAllChaptersData('en')
      .then((data) => {
          setData(data)
          setTimeout(() => {
            setLoading(false)
          }, 500)
        })
  }, [])
  return (
    <Wrapper>
      <Head>
        <title>Quran App</title>
      </Head>
      <Header className="mb-3">Quran App</Header>
      {
        !isLoading && 
        <BookmarkedVerseLists chapterLists={data.chapters}/>
      }
      {/* <HomeBanner/> */}
      <div className={classNames('px-5 py-5 lg:p-12 bg-gray-100 dark:bg-slate-700 min-h-screen rounded-t-2xl')}>
        <Switch setView={setView} view={view}/>
        <Chapter isLoading={isLoading} chapterLists={data.chapters} view={view}/>
      </div>
    </Wrapper> 
  )
}
