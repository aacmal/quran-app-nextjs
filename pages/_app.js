import TopBar from '../src/components/TopBar/TopBar'
import RootContextProvider from '../src/context/RootContext'
import { TopbarContextProvider } from '../src/context/TopbarContext'
import StyleProvider from '../src/context/StyleContext'
import '../styles/globals.css'
import AudioPlayer from '../src/components/AudioPlayer/AudioPlayer'
import { DefaultSeo } from 'next-seo';
import { createSEOConfig } from '../src/utils/seo'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json"/>
      </Head>
      <RootContextProvider>
        <StyleProvider>
          <DefaultSeo {...createSEOConfig({ locale: 'id', description: "Aplikasi Quran Sederhana" })}/>
          <TopbarContextProvider>
            <TopBar/>
            <Component {...pageProps} />
          </TopbarContextProvider>
          <AudioPlayer/>
        </StyleProvider>
      </RootContextProvider>
    </>
  )
}

export default MyApp
