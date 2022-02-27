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

        <p className="description">Javascript gud😊. Python bad🤮. Eclipse bad🤮. IntellIj and VSCode gud😊. 
        Remix JS 😐. Next JS🤩. SvelveKit😶. Arch kinda overrated but ubuntu 💀. Web3 pretty useless😴. <a href="https://www.youtube.com/watch?v=9Nskc3bF6FU">he he ha.</a> 
         amog us is a dead game and meme. tf ppl still play fnf?? nfts best scam😁. super nes be running better than iphone 13 😂. btw plz recommend me some games to play 10gb or less plz.
        my internet is pretty shit thats why.

        </p>
      </main>

      <Footer/>

    </div>
  )
}
