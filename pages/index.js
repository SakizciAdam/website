import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SakizciAdam's Shack</title>
        
   
      </Head>

      <main>
        <Navbar/>
        <h1 className="title">Welcome to SakizciAdam's Shack</h1>

        <p className="description">Javascript gud😊. Python bad🤮.</p>
      </main>

      <Footer/>

    </div>
  )
}
