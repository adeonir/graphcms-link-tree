import type { GetServerSideProps } from 'next'
import Head from 'next/head'

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

  return (
    <div className="min-h-screen py-12 px-5">
      <Head>
        <title>{creator.name} | GraphCMS Link Tree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-[400px] space-y-7">
        <User {...creator} />

        <div className="space-y-4">
          {blocks.map((block) => (
            <Link key={block.url} {...block} />
          ))}
        </div>
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
