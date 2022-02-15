import Head from 'next/head'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-5 p-12">
      <Head>
        <title>GraphCMS Link Tree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold text-gray-800">GraphCMS Link Tree</h1>
      </main>

      <hr className="border-1 w-full max-w-xl border-gray-300" />

      <footer>
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

export default Home
