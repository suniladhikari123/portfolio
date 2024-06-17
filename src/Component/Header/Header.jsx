import React from 'react'
import { Link } from 'react-scroll'


const Header = () => {
  return (
    <>
    <div  className=' navbar h-24 w-screen  flex justify-evenly align-middle text-white fixed'>
    <div className=''><Link to='Home'><img className='h-24' src="logo.png" alt="logo" /></Link></div>
    <div>
        <ul className='h-10 w-96 flex justify-evenly my-8 text-xl' >
            <li className=' hover:text-yellow-600  '><Link activeClass='active' to='Home' spy='true' smooth='true' offset={-100} duration={500}  >Home</Link></li>
            <li className=' hover:text-yellow-600  '><Link activeClass='active' to='About' spy='true' smooth='true' offset={-100} duration={500}>About</Link></li>
            <li className=' hover:text-yellow-600 '><Link  activeClass='active' to='Portfolio' spy='true' smooth='true' offset={-100} duration={500}>Skills</Link></li>
            <li className=' hover:text-yellow-600 '><Link  activeClass='active' to='Contact' spy='true' smooth='true' offset={-100} duration={500}>Contact</Link></li>
        </ul>
    </div>
    </div>
    
    </>
    
  )
}

export default Header