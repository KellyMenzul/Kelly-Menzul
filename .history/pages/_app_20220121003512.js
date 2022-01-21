import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <MyThemeProvider> 
    <Component {...pageProps} />
    </MyThemeProvider>
}

export default MyApp
