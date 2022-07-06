import Navbar from '../src/components/Navbar/Navbar'
import TopBar from '../src/components/TopBar/TopBar'
import RootContextProvider from '../src/context/RootContext'
import { TopbarContextProvider } from '../src/context/TopbarContext'
import StyleProvider from '../src/context/StyleContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <RootContextProvider>
      <StyleProvider>
        <TopbarContextProvider>
          <TopBar/>
          <Component {...pageProps} />
        </TopbarContextProvider>
      </StyleProvider>
    </RootContextProvider>
  )
}

export default MyApp
