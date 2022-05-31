import Head from 'next/head'
import Image from 'next/image'
import Banner from '../src/components/Banner'
import Chapter from '../src/components/chapters/Chapter'
import Header from '../src/components/Header'
import Search from '../src/components/Search'
import Wrapper from '../src/components/Wrapper'

export default function Home() {
  return (
    <Wrapper>
      <Header className="mb-3">Quran App</Header>
      <Banner/>
      <Search/>
      <Chapter/>
    </Wrapper> 
  )
}
