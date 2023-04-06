import '@/styles/globals.css'
import { Header } from '@/components/layouts/Header'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'
import { useQuery } from 'react-query';

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  console.log('a')
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Header isAuthenticated={pageProps.layout}/>
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App