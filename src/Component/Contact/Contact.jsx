import React from 'react'
import { Link } from 'react-scroll'

const Contact = () => {
  return (
    <section id='Contact' className='h-screen text-white' >
        <div className='flex justify-evenly items-center relative top-32'>
        <div className=''><h1 className='contact'>Contact Me</h1>
        <br />
        <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="" className='h-7 inline-block'  /> <h1 className='inline-block'>adhikarisuil@gmail.com</h1>
       <br /> <img src="https://cdn4.iconfinder.com/data/icons/social-media-2097/94/phone-512.png" alt="" className='h-7 inline-block mt-2 ' /><p className='inline-block mt-2 mx-2'> 9818386600</p>
       <br />
       
       <div className='inline-flex mt-10 '>
        <a href="https://www.facebook.com/sunil.adhikari.796774?mibextid=ZbWKwL"><img src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png" alt="Facebook" className='h-9 mx-2'/></a>
        <a href='https://instagram.com/sunil_adhikar?igshid=NzZlODBkYWE4Ng=='><img src="https://static-00.iconduck.com/assets.00/social-instagram-icon-2048x2048-xuel0xhc.png" alt="instragram" className='h-9 rounded-full  mx-2 '/></a>
        <a href="https://youtube.com/@SunilAdhikari123?si=t6NOjHgKOBLjnxtp"><img className='h-9 rounded-full  mx-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQef52Vwir6e-8A50addY0TRgsW3dbPEe5KYg&usqp=CAU" alt="youtube"/></a>
        <a href="https://twitter.com/SunilAd37961698"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0PE-93cmA6TEr6O3Pd7EQdn3dTnOBjzRmw&usqp=CAU" alt="twitter" className='h-9 rounded-full  mx-2'/></a>
       </div>
       </div>
       
 
 <div className='form '>
  <input type="text" placeholder='Enter Your Full Name' className='name' /><br />
  <input type="text" placeholder='Enter Your Email'  className='name'  /><br />
  <input type="text" placeholder='Give Your Messsege' className='message'/>
  <button className='h-12 w-36 bg-red-800 mb-0 rounded-md active:scale-50'>Submit</button>
 </div>
        </div>
       
    </section>
  )
}

export default Contact