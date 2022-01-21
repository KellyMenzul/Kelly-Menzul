import '../styles/globals.css'
import MyThemeProvider from '../utils/provider'

function MyApp({ Component, pageProps }) {
  return <MyThemeProvider> <Component {...pageProps} />
}

export default MyApp
