import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaCopy } from "react-icons/fa6";
import { toast } from 'react-toastify';

export default function UserCard({ _id, name, email, phone, handleDelete }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(
      name + " " + email + " " + phone
    )
    toast.success("Copied !")
  }
  return (
    <div>
      <div className="w-64 flex flex-col bg-white border border-gray-300 border-t-4 border-t-blue-600 shadow-sm rounded-xl">
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800 capitalize">
            {name}
          </h3>
          <p className="mt-2 text-[14px] text-gray-500">
            {email}
          </p>
          <p className="mt-2 text-gray-500">
            {phone}
          </p>
          <button onClick={() => handleDelete(_id, email)} className='float-right bg-blue-600 p-1.5 text-white rounded-full text-lg md:hover:scale-105 transition-all duration-200 ease-linear'><MdDelete /></button>
          <button onClick={handleCopy} className='float-right bg-blue-600 p-1.5 text-white rounded-full text-lg md:hover:scale-105 transition-all duration-200 ease-linear mr-2'><FaCopy /></button>

        </div>
      </div>
    </div>
  )
}
