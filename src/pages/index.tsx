import type { NextPage } from 'next'
import Head from 'next/head'

import { User } from 'components/User'
import { Video } from 'components/Video'
import { Link } from 'components/Link'

const user = {
  avatar: '/avatar.png',
  name: 'Adeonir',
  bio: 'Front-End Engineer',
}

const links = [
  {
    text: 'Github',
    url: 'https://github.com/adeonir',
  },
  {
    text: 'YouTube',
    url: 'https://youtube.com/adeonir',
  },
]

const Home: NextPage = () => {
  return (
    <div className="min-h-screen py-12 px-5">
      <Head>
        <title>GraphCMS Link Tree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-[400px] space-y-7">
        <User {...user} />

        <div className="space-y-4">
          {links.map((link) => (
            <Link key={link.text} {...link} />
          ))}
          <Video />
        </div>
      </main>
    </div>
  )
}

export default Home
