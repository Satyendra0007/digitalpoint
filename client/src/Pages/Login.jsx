import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { sendPostRequest } from '../actions/serverActions';
import { toast } from 'react-toastify';
import { ContextStore } from '../store/ContextStore';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate()
  const { saveToLocalStorage } = useContext(ContextStore)
  const { register, handleSubmit, formState: { errors, isSubmiting } } = useForm()
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false);

  const handleOnSubmit = async (data) => {
    setLoading(true)
    const serverResponse = await sendPostRequest(`${import.meta.env.VITE_APP_SERVER_URI}api/auth/login`, data)
    const response = await serverResponse.json()
    if (serverResponse.ok) {
      saveToLocalStorage(response.token)
      toast.success(response.message)
      navigate("/")
    }
    else {
      toast.error(response.message)
    }
    setLoading(false)
  }

  return (
    <div>
      <div className='container mx-auto min-h-[84vh]  py-28'>
        {loading && <Spinner />}
        <div className='md:max-w-xl md:m-auto  py-10 m-4 bg-white border border-gray-200 shadow-2xl  rounded-2xl'>
          <div className="text-center text-2xl md:text-[2rem] font-semibold whitespace-nowrap dark:text-white"> Kanhaiya<span className='text-blue-700'>Digital</span>Point</div>
          <h1 className='font-semibold text-xl md:text-2xl text-center my-5'>Login to your Account</h1>
          <form onSubmit={handleSubmit(handleOnSubmit)} className='space-y-12 px-8 '>
            <div className="relative z-0">
              <input type="email" id="floating_standard2" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " autoComplete='username' {...register("email", { required: { value: true, message: "Email is required " } })} />
              <label htmlFor="floating_standard2" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email </label>
              {errors.email && <span className='text-red-600 text-xs font-bold'>{errors.email.message}</span>}
            </div>
            <div className="relative z-0">
              <input type={show ? "text" : "password"} id="floating_standard4" className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " autoComplete='new-password' {...register("password", { required: { value: true, message: "Password is required " } })} />
              <label htmlFor="floating_standard4" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
              <span className='absolute top-4 right-4 cursor-pointer text-gray-700' onClick={() => setShow(!show)}>
                {show ? <FaEye /> : <FaEyeSlash />}</span>
              {errors.password && <span className='text-red-600 text-xs font-bold'>{errors.password.message}</span>}
            </div>
            <div className="button text-center">
              <button disabled={isSubmiting} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Login</button>
              <div className="info text-xs my-2"> Don't have Account ? <NavLink to="/register" className="text-blue-700 font-bold hover:underline">
                Create an Account</NavLink></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
