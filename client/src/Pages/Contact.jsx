import React, { useContext, useEffect, useState } from 'react'
import Heading from '../Components/Heading'
import { ContextStore } from '../store/ContextStore'
import { toast } from 'react-toastify';
import { sendPostRequest } from '../actions/serverActions';
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  
  const { userData } = useContext(ContextStore)
  const [form, setForm] = useState({
    name: userData ? userData.name : "",
    email: userData ? userData.email : "",
    phone: userData ? userData.phone : "",
    message: ""
  })
  const [loading, setLoading] = useState(false)

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const serverResponse = await sendPostRequest(`${import.meta.env.VITE_APP_SERVER_URI}api/form/contact`, form)
    const response = await serverResponse.json()
    if (serverResponse.ok) {
      toast.success(response.message)
      setForm({ ...form, message: "" })
    }
    else {
      toast.error(response.message)
    }
    setLoading(false)
  }


  return (
    <div className=" pb-10 px-4 md:max-w-4xl md:mx-auto m-4 bg-white shadow-2xl  rounded-2xl border border-gray-200"  >
      <Heading text="Contact Us" />
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" > Your Email</label >
        <div className="relative mb-4">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input type="text" name="email" value={form.email} onChange={handleOnChange} id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
        </div>
        <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
        <div className="flex mb-4">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input type="text" name="name" value={form.name} onChange={handleOnChange} id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk" />
        </div>

        <label htmlFor="phone-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number:</label>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
              <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
            </svg>
          </div>
          <input type="number" name="phone" value={form.phone} onChange={handleOnChange} id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
        </div>


        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
        <textarea name="message" value={form.message} onChange={handleOnChange} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="Write your thoughts here..."></textarea>


        <div className="button">
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-40 h-12 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  mx-auto">
            {loading ?
              <>
                <div className='flex space-x-2 justify-center items-center '>
                  <span className='sr-only'>Loading...</span>
                  <div className='h-2.5 w-2.5 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                  <div className='h-2.5 w-2.5 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                  <div className='h-2.5 w-2.5 bg-white rounded-full animate-bounce'></div>
                </div>
              </>
              :
              <div className='flex justify-center items-center gap-1'>
                <IoIosSend /> <span>Send</span>
              </div>}
          </button>
        </div>
      </form >
    </div >
  )
}
