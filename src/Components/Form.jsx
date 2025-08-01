import React from "react";
import { Link } from "react-router-dom";
import nexticon from "../assets/next-icon.svg"
import ScrollToTop from "./ScrollToTop"

const Form = ({ FormTitle, formData, onChange, onSubmit }) => {
  return (
    <>
      <main>
        <div className="flex items-center gap-4 pd-15 ">
          <Link to="/all-task " className="flex items-center gap-4 ">
            <img
              src={nexticon}
              alt="next-icon"
              className="w-[15px] md:w-[18px] h-[26px] md:h-[36px] "
            />
            <span className="font-[400] text-[35px] md:text-[50px] text-[#292929] ">
              {FormTitle}
            </span>
          </Link>
        </div>
        {/* form */}
        <form onSubmit={onSubmit} className=" flex flex-col gap-10 md:gap-20">
            {/* task title */}
            <div className="relative">
                <label htmlFor="task-title" className="bg-white font-[400] text-[30px] text-[#9C9C9C]"> Task Title</label>
                <input type="text" className="w-full border-1 border-[#B8B6B6] rounded-[5px] h-[84px] outline-none ps-10 placeholder:text-[#CCCCCC] placeholder:text-[20px] 
                md:placeholder:text-[22px] placeholder:font-400"  placeholder="E.g Project Defense, Assignment..." id="task-title" value={formData.taskTitle}
                onChange={onChange} name="taskTitle"/>
            </div>
            {/* textarea */}
            <div className="relative">
                <label htmlFor="description" className="absolute bottom-58 left-9 bg-white font-[400] text-[30px]
                text-[#9C9C9C] ">Description</label>
                <textarea name="description" id="description" className="w-full border-1 border-[#B8B6B6] rounded-[5px] h-[250px] outline-none
                ps-10 pt-10 placeholder:text-[#CCCCCC] placeholder:text-[20px] 
                md:placeholder:text-[22px] placeholder:font-400 " placeholder="Briefly describe your task..." value={formData.description} onChange={onChange}></textarea>

            </div>
            {/* select field */}
            <div  className="flex flex-col relative">
                <label htmlFor="tags" className="absolute bottom-9 left-9 bg-white font-[400] text-[30px] text-[#9C9C9C]">Tags</label>
                <select name="tag" id="tags" className="border-1 outline-none h-15 border-[#B8B6B6] rounded-[15px] ps-9 " 
                value={formData.tag} onChange={onChange}>
                    <option value="" disabled selected className="text-red-800 font-[400] text-[22px] ">Urgent Important</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Important">Important</option>

                </select>

            </div>
            <div>
                <button className="text-[#FAF9FB] text-[35px] font-[500] w-full h-[70px] rounded-[8px] bg-[#974FD0]">Done</button>
            </div>
            <div className="p-5">
                <ScrollToTop/>

            </div>
        

        </form>
      </main>
    </>
  );
};

export default Form;
