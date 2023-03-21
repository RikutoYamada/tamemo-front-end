import '@/styles/globals.css'
import { Header } from '@/components/layouts/Header'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <Header />
    <Component {...pageProps} />
  </QueryClientProvider>
)

export default App