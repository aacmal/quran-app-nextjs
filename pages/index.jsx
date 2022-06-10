import { useEffect, useState } from 'react'
import HomeBanner from '../src/components/Banner/HomeBanner'
import Chapter from '../src/components/chapters/Chapter'
import Header from '../src/components/Header'
import Search from '../src/components/Search'
import Wrapper from '../src/components/Wrapper'

export default function Home() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
      setLoading(true)
      fetch('https://api.quran.com/api/v4/chapters?language=id')
      .then((res) => res.json())
      .then((data) => {
          setData(data)
          setLoading(false)
        })
      console.log(data);
  }, [])
  return (
    <Wrapper>
      <Header className="mb-3">Quran App</Header>
      <HomeBanner/>
      <Search/>
      <Chapter isLoading={isLoading} chapterLists={data}/>
    </Wrapper> 
  )
}
