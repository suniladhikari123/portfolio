import React from 'react'

const About = () => {
  return (
    <section id='About' className='h-screen text-white'>
      {/* <div className='min-w-full text-'><p className='font-bold underline-offset-2 text-center text-'>About Me</p></div> */}
      <div className='flex justify-evenly relative top-28'>
        <div className='h-96 w-96'><img src="photo1234.jpg" alt="" className='rounded-full h-96' /></div>
        <div className='h-40 w-72'><h1 className='font-extrabold text-4xl text-green-600 underline mb-4'>About ME</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nisi assumenda nihil, aperiam officiis praesentium ipsa deleniti quae voluptatibus nobis modi expedita itaque esse, perferendis placeat impedit illum molestiae vitae.</p></div>
      </div>
      
    </section>
  )
}

export default About