import TopBar from '../src/components/TopBar/TopBar'
import RootContextProvider from '../src/context/RootContext'
import { TopbarContextProvider } from '../src/context/TopbarContext'
import StyleProvider from '../src/context/StyleContext'
import '../styles/globals.css'
import AudioPlayer from '../src/components/AudioPlayer/AudioPlayer'

function MyApp({ Component, pageProps }) {
  return (
    <RootContextProvider>
      <StyleProvider>
        <TopbarContextProvider>
          <TopBar/>
          <Component {...pageProps} />
        </TopbarContextProvider>
        <AudioPlayer/>
      </StyleProvider>
    </RootContextProvider>
  )
}

export default MyApp
