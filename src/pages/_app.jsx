import Layout from '@/components/Layout'
import { Provider } from 'react-redux'
import { store } from '@/services/store'
import '@/styles/tailwind.css'
import 'focus-visible'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
