import '@/styles/globals.css'
import { Header } from '@/components/layouts/Header'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Header currentUserId={pageProps.currentUserId} />
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App