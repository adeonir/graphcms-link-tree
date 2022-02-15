import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { User, UserProps } from 'components/User'
import { Link, LinkProps } from 'components/Link'

import { client } from 'graphql/client'

import { PageBySlugQuery, PagesQuery } from 'graphql/types'
import { PAGES, PAGE_BY_SLUG } from 'graphql/queries'

export type PageProps = {
  slug: string
  creator: UserProps
  blocks: LinkProps[]
}

const Creator = (props: PageProps) => {
  const { slug, creator, blocks } = props
  const { isFallback } = useRouter()

  if (isFallback) {
    return <div className="min-h-screen py-12 px-5 text-center">Loading...</div>
  }

  return (
    <div className="flex min-h-screen flex-col items-center py-12 px-5">
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

      <main className="w-full max-w-[400px] flex-1 space-y-7">
        <User {...creator} />

        <ul className="space-y-4">
          {blocks.map((block) => (
            <Link key={block.url} {...block} />
          ))}
        </ul>
      </main>

      <hr className="border-1 my-5 w-full max-w-xl border-gray-300" />

      <footer className="flex max-w-xl flex-col items-center">
        <p className="text-gray-600">
          <a
            className="text-blue-500 transition hover:text-blue-800"
            href="https://github.com/adeonir/graphcms-link-tree"
          >
            Click here
          </a>
          {` to know more about this project!`}
        </p>
      </footer>
    </div>
  )
}

export default Creator

export const getStaticPaths: GetStaticPaths = async () => {
  const { pages } = await client.request<PagesQuery>(PAGES)

  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<PageBySlugQuery>(PAGE_BY_SLUG, {
    slug: params?.slug,
  })

  return {
    revalidate: 60 * 60,
    props: {
      slug: params?.slug,
      creator: page?.creator,
      blocks: page?.blocks,
    },
  }
}
