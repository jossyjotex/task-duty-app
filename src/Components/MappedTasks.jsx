import React from "react";
import trashsign from "../assets/trash-sign.svg";
import editsign from "../assets/edit-sign.svg";
import { Link } from "react-router-dom";

const MappedTasks = ({ _id, taskTitle, description, tag }) => {
  return (
    <>
      <div className="flex justify-between items-center border-b-[0.5px] border-b-[#B8B6B6]">
      <h3
          className={`${
            tag === "Urgent" ? "text-[#F38383]" : "text-[#73C3A6]"
          } text-[24px] font-[400] pb-2 `}
        >
          {tag}
        </h3>
        <div className="font-[500] text-[24px] flex items-center gap-4 py-2">
          <button
            className="bg-[#974FD0] cursor-pointer text-[#FAF9FB] w-[50px] md:w-[126px] h-[40px] md:h-[50px] rounded-[8px] flex 
          items-center justify-center"
          >
            <Link to={`/task-id/${_id}`} className="flex items-center gap-1 ">
              <img src={editsign} alt="edit-sign" className="w-8 h-8 " />
              <span className="hidden md:block">Edit</span>
            </Link>
          </button>
          <button
            className="border-[#974FD0] border-1 cursor-pointer text-[#974FD0] w-[50px] md:w-[126px] h-[40px] md:h-[50px] rounded-[8px] flex 
          items-center justify-center gap-2"
          >
            <img src={trashsign} alt="trash-sign" />
            <span className="hidden md:block">Delete</span>
          </button>
        </div>
      </div>
      <h1 className="py-2 font-[400] text-[28px] md:text-[35px] text-[#292929]">
        {taskTitle}
      </h1>
      <p className="text-[18px] md:text-[24px] font-[400] text-[#737171]">
        {description}
      </p>
    </>
  );
};

export default MappedTasks;
