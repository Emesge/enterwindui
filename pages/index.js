import Head from 'next/head'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Enterwind UI</title>
        <meta name="description" content="Free Tailwind Components for Sat-set Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='flex items-center justify-center min-h-screen'>
        <Hero />
      </main>
    </div>
  )
}

export default Home
