import React from 'react'

const Portfolio = () => {
  return (
    <section id='Portfolio' className='h-screen  text-green-600'>
        <div className='text-blue-400 text-2xl text-center font-extrabold py-20 font-serif'>MY SKILLS</div>
        <div className='flex justify-evenly'>
          <div><h1 className='mb-10 font-bold '>Technical Skills</h1>
          <img className='h-7' src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" />
           <div>HTML <span className='ml-40 '>70%</span></div>
           <div  className='w-80 h-2 rounded-md bg-fuchsia-600 mb-8'><div className=' color h-2 rounded-md'></div></div>

           <img className='h-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png" alt="" />
           <div>CSS <span className='ml-36'>60%</span></div>
           <div  className='w-80 h-2 rounded-md bg-fuchsia-600 mb-8'><div className=' color1 h-2 rounded-md'></div></div>

           <img className='h-8' src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="" />
           <div>JavaScript <span className='ml-16'>50%</span></div>
           <div  className='w-80 h-2 rounded-md bg-fuchsia-600 mb-8'><div className=' color2 h-2 rounded-md'></div></div>

           <img className='h-8' src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt="" />
           <div>React.js <span className='ml-14'>40%</span></div>
           <div  className='w-80 h-2 rounded-md bg-fuchsia-600 mb-24'><div className=' color3 h-2 rounded-md'></div></div>


          </div>
          
          <div className='text-green-600 font-bold'>Professional  Skills
          
          <div className='grid grid-cols-2 mt-10 gap-x-8 '>
            <div className=''>Leadership</div>
            <div className=''>Communiacation Skill</div>
            <div className='circuler  h-36 w-36'>
            <div className='circuler1 h-32 w-32 '>55%</div>
            </div>
            
            <div className='circuler0  h-36 w-36'>
            <div className='circuler1 h-32 w-32'>65%</div>
            </div>
           <div className='mt-8'>Creativity</div>
           <div className='mt-8'>Problem Solver</div>
            <div className='circuler2  h-36 w-36'>
            <div className='circuler1 h-32 w-32'>75%</div>
            </div>
            <div className='circuler3  h-36 w-36'>
            <div className='circuler1 h-32 w-32'>70%</div>
            </div>
            
            </div>
          </div>

        </div>
    </section>
  )
}

export default Portfolio