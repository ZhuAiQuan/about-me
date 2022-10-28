import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src='/icon/iconfont.js' strategy='beforeInteractive' />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
