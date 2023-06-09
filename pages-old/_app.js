import TopBar from '../src/components/TopBar/TopBar'
import RootContextProvider from '../src/context/RootContext'
import { TopbarContextProvider } from '../src/context/TopbarContext'
import StyleProvider from '../src/context/StyleContext'
import '../styles/globals.css'
import AudioPlayer from '../src/components/AudioPlayer/AudioPlayer'
import { DefaultSeo } from 'next-seo';
import { createSEOConfig } from '../src/utils/seo'
import Head from 'next/head'
import GoogleAnalytics from '../src/components/GoogleAnalytics/GoogleAnalytics'
import { AnimatePresence } from 'framer-motion'


function MyApp({ Component, pageProps, url }) {
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
            <AnimatePresence
              mode="wait"
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Component {...pageProps} key={url}/>
            </AnimatePresence>
          </TopbarContextProvider>
          <AudioPlayer/>
        </StyleProvider>
      </RootContextProvider>

      <GoogleAnalytics/>
    </>
  )
}

export default MyApp
