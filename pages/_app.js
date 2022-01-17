import '../styles/globals.css'
import store from '../app/store'
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
  // <Component {...pageProps} />
  // <Provider store={store}>
      <Component {...pageProps} />
  // </Provider>
  )
}

