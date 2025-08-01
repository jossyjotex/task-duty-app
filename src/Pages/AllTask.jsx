import React from 'react'
import addsign from "../assets/add-sign.svg"
import { Link } from 'react-router-dom'
import { taskData } from '../db'
import MappedTasks from '../Components/MappedTasks'
import ScrollToTop from '../Components/ScrollToTop'

const AllTask = () => {
  return (
    <>
    <main className='wrapper'>
        <>
        <section className='flex justify-between items-center font-[500] py-2 md:py-4'>
          <h1 className='text-[25px] md:text-[50px] text-[#292929]'>My Tasks</h1>
          <Link to="/new-task" className='text-[20px] md:text-[24px] text-[#974FD0] flex gap-3 items-center'>
          <img src={addsign} alt="add-sign"  className='w-[15px] h-[15px] md:w-[18px] md:h-[18px]'/>
          Add New Task
          
          </Link>

        </section>
        <section className='flex flex-col gap-10 md:gap-18 items-center '>
          {taskData.map((task)=>{
            const {_id,description,tag,taskTitle}=task
            return(
              <div key={_id} className='border-[#B8B6B6] border-[0.5px] rounded-[10px] py-6 px-3 w-full '>
                <MappedTasks taskTitle={taskTitle} _id={_id} description={description} tag={tag}/>

              </div>
            )
          })}
          
          <ScrollToTop/>
        </section>
        </>
    </main>
    
    </>
  )
}

export default AllTask