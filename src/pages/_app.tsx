import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'

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
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://graphcms-link-tree.vercel.app/',
          site_name: 'GraphCMS Link Tree',
          title: 'GraphCMS Link Tree',
          images: [
            {
              url: `https://graphcms-link-tree.vercel.app/og-image.png`,
              alt: 'GraphCMS Link Tree',
              width: 480,
              height: 360,
            },
          ],
        }}
        twitter={{
          handle: '@adeonir',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default App
