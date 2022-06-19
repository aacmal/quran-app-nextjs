import Navbar from '../src/components/Navbar/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Navbar/>
    </>
  )
}

export default MyApp
