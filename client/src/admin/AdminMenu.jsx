import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { GrGallery } from "react-icons/gr";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";

export default function AdminMenu() {
  return (
    <>
      <nav className=' w-full h-[80vh] flex flex-col '>
        <NavLink
          className=" p-3 text-center font-bold text-gray-700 flex justify-center items-center gap-3 md:justify-start md:px-6"
          to="users"
          style={({ isActive }) => isActive ? { backgroundColor: "blue", color: "white" } : {}}
        >
          <FaUser />
          <span className='hidden md:block'>Users</span>
        </NavLink>
        <NavLink
          className=" p-3 text-center font-bold text-gray-700 flex justify-center items-center gap-3 md:justify-start md:px-6 "
          to="messages"
          style={({ isActive }) => isActive ? { backgroundColor: "blue", color: "white" } : {}}
        >
          <SiGooglemessages />
          <span className='hidden md:block'>Messages</span>
        </NavLink>
        <NavLink
          className=" p-3 text-center font-bold text-gray-700 flex justify-center items-center gap-3 md:justify-start md:px-6 "
          to="gallery"
          style={({ isActive }) => isActive ? { backgroundColor: "blue", color: "white" } : {}}
        >
          <GrGallery />
          <span className='hidden md:block'>Gallery</span>
        </NavLink>
        <NavLink
          className=" p-3 text-center font-bold text-gray-700 flex justify-center items-center gap-3 md:justify-start md:px-6"
          to="services"
          style={({ isActive }) => isActive ? { backgroundColor: "blue", color: "white" } : {}}
        >
          <MdOutlineMiscellaneousServices />
          <span className='hidden md:block'>Services</span></NavLink>

        <NavLink
          className=" p-3 text-center font-bold text-gray-700 flex justify-center items-center gap-3 md:justify-start md:px-6"
          to="adminservices"
          style={({ isActive }) => isActive ? { backgroundColor: "blue", color: "white" } : {}}
        >
          <RiAdminLine />
          <span className='hidden md:block'> Admin Link</span></NavLink>
      </nav >

    </>
  )
}
