import React from 'react'


const Home = () => {
  return (
    <section id='Home' className='h-screen border-red-400 text-white flex justify-evenly items-center'> 
    <div className='my-52 text-center'>
    <h1 className=''>Hello</h1>
    <h1 className='font-bold text-lg'>i am Sunil Adhikari</h1>
    <h1 className=''>Website developer</h1>
    <h1 className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, cumque maiores optio placeat .</h1>
    </div>


     <div className='relative'>
     <div className='photo relative '> </div>
     <img className='photo1 rounded-full absolute  ' src="photo.png" alt="" />
     </div>
     


    </section>
  )
}

export default Home