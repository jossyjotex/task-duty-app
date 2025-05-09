import React from "react";
import navlogo from "/navlogo.svg";
// import profileimg from "../assets/profile-img.svg";
import { Link, useMatch } from "react-router-dom";
// import menu from "../assets/menu.svg";
import NavLinks from "../Components/NavLinks";

const Navbar = () => {
  const isTask = useMatch("/all-task");
  const isNew = useMatch("/new-task");
  return (
    <>
      <nav className="wrapper flex justify-between border-b-1  border-b-[#B8B6B6]">
        {/* navlogo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={navlogo} alt="nav-logo" className="w-[39px]" />
            <span className="font-[600] text-[27px] text-[#2D0050]">
              TaskDuty
            </span>
          </Link>
        </div>
        {/* nav-links */}
        <NavLinks isTask={isTask} isNew={isNew}/>
       
      </nav>
    </>
  );
};

export default Navbar;
