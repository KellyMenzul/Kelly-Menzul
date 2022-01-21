import '../styles/globals.css'
import MyThemeProvider from '../utils/provider'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
