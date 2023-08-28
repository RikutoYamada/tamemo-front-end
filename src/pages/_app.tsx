import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Header } from '@/components/layouts/Header'
import createEmotionCache from '@/createEmotionCache'
import theme from '@/theme'

const queryClient = new QueryClient()

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

type PageProps = {
  currentUserId: string
}

export type MyAppProps = Omit<AppProps<PageProps>, 'pageProps'> & {
  pageProps: PageProps
  emotionCache?: EmotionCache
}

const MyApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header currentUserId={pageProps.currentUserId} />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </CacheProvider>
  )
}

export default MyApp
