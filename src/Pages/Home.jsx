import React from 'react'
import heroimg from "../assets/hero-img.svg"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <main className='wrapper grid lg:grid-cols-4 lg:gap-35 gap-10 items-center'>
      {/* text */}
      <section className='col-span-2 order-2 lg:order-1  md:pt-6'>
        <h1 className='font-[500] text-[36px] md:text-[50px]'>
        
          <span>Manage your Tasks on  </span>
          
          <span className='text-[#974FD0]'>TaskDuty</span>
        </h1>
        <p className='font-[400] text-[20px] md:text-[24px] text-[#737171]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.
        </p>
        <div className='mt-6'>
          <button className=' bg-[#974FD0] w-full lg:w-[201px] md:h-[60px] h-[50px] rounded-[8px] text-[#FAF9FB] text-[24px]'>
            <Link to="/all-task">
            Go to My Tasks
            </Link>

          </button>
        </div>

      </section>
      {/* hero img */}
      <section className='col-span-2 order-1 lg:order-2  pt-8'>
        <img src={heroimg} alt="hero-img" className='w-full' />

      </section>
        
    </main>
    </>
  )
}

export default Home