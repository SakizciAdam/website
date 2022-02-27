import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function Contacts() {

    let name="Full Name"
    let email="Email"
    let message="Message"

    const send=()=>{
        if (name.length>=30||name.length<=3) {
            alert("Name must be between 3 and 30 characters")
            return
        }
        if (!isValidEmail(email)) {
          alert("Invalid email!")
          return
        }
        if (message.length>=256||message.length<=20) {
            alert("Message must be between 20 and 256 characters")
            return
        }

        alert('i didnt implement it... yet')

        
    }

  return (
    <div className="container">
      <Head>
        <title>SakizciAdam's Shack | Contact me lol</title>
        
   
      </Head>

      <main>
        <Navbar/>
        <h1 className="title">Contact Form</h1>

        <div className='form'>
            <div className='form-title'>Contact Form</div>
            <ul>
                <li>
             
                 <input type="text" className='text-input' defaultValue={name} onChange={(e) => {
                     name=e.target.value
                     
                 }}/>

                <input type="email" className='text-input' defaultValue={email} onChange={(e) => {
                     email=e.target.value
                 
                 }}/>



                <textarea className='text-area' rows="10" cols="40" defaultValue={message} onChange={(e) => {
                     message=e.target.value
                 
                 }}/>

                </li>
         
            </ul>

            <button className='submit' onClick={send}>Submit!</button>

            

        </div>
      </main>

      <Footer/>

    </div>
  )
}
