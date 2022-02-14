import Head from 'next/head'

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-5">
      <Head>
        <title>GraphCMS Link Tree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-xl font-bold">GraphCMS Link Tree</h1>
    </div>
  )
}

export default Home
