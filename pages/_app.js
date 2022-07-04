import Navbar from '../src/components/Navbar/Navbar'
import RootContextProvider from '../src/context/RootContext'
import StyleProvider from '../src/context/StyleContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <RootContextProvider>
      <StyleProvider>
        <Component {...pageProps} />
        {/* <Navbar/> */}
      </StyleProvider>
    </RootContextProvider>
  )
}

export default MyApp
