import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

export default function ServiceCard({ thumbnail, name, url }) {
  return (
    <div>
      <a href={url}
        className=" block md:w-96 md:h-80 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 group hover:scale-105 transition-all ease-in-out duration-300">
        <div>
          <img className=" p-8 w-full h-64  rounded-t-lg " src={thumbnail} />
        </div>
        <div className="px-5 pb-5 ">
          <div className='flex justify-between items-center text-lg'>
            <h5 className=" text-center font-semibold tracking-tight text-gray-900 dark:text-white capitalize">   {name}
            </h5>
            <div className="arrow group-hover:text-blue-600">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
