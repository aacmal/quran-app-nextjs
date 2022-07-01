import Navbar from '../src/components/Navbar/Navbar'
import StyleProvider from '../src/context/StyleContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StyleProvider>
      <Component {...pageProps} />
      {/* <Navbar/> */}
    </StyleProvider>
  )
}

export default MyApp
