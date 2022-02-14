import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { User, UserProps } from 'components/User'
import { Link, LinkProps } from 'components/Link'

import { client } from 'graphql/client'

import { PageBySlugQuery } from 'graphql/types'
import { PAGE_BY_SLUG } from 'graphql/queries'

export type PageProps = {
  page: {
    creator: UserProps
    blocks: LinkProps[]
  }
}

const Creator = ({ page }: PageProps) => {
  const { creator, blocks } = page
  const { isFallback, query } = useRouter()
  const { slug } = query

  if (isFallback) {
    return <div className="min-h-screen py-12 px-5 text-center">Loading...</div>
  }

  return (
    <div className="min-h-screen py-12 px-5">
      <Head>
        <title>{creator.name} | GraphCMS Link Tree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextSeo
        title={`${creator.name} | GraphCMS Link Tree`}
        description={`Social media reference landing page for ${creator.name}, developed by @adeonir and powered by GraphCMS.`}
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: `https://graphcms-link-tree.vercel.app/${slug}`,
          site_name: 'GraphCMS Link Tree',
          title: `${creator.name} | GraphCMS Link Tree`,
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

      <main className="mx-auto max-w-[400px] space-y-7">
        <User {...creator} />

        <ul className="space-y-4">
          {blocks.map((block) => (
            <Link key={block.url} {...block} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Creator

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { page } = await client.request<PageBySlugQuery>(PAGE_BY_SLUG, {
    slug: params?.slug,
  })

  return {
    props: {
      page,
    },
  }
}
