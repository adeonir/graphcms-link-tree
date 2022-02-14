import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import * as gtag from 'lib/gtag'
import { Analytics } from 'components/Analytics'

import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default App
