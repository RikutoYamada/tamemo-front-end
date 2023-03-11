import '@/styles/globals.css'
import Header from '@/components/layouts/Header/Header'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}
