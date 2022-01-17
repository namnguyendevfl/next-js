import '../styles/globals.css'
import store from '../app/store'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
      <Component {...pageProps} />
  )
}

