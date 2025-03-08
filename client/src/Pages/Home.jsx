import React, { useContext } from 'react'
import Heading from '../Components/Heading'
import AmentiesCard from '../Components/AmentiesCard'
import amenties from '../data/AmentiesData'
import { NavLink } from 'react-router-dom'
import Gallery from '../Components/Gallery'
import { ContextStore } from '../store/ContextStore'

export default function Home() {

  const { isLoggedIn } = useContext(ContextStore)
  return (
    <div>
      <section className=" bg-center bg-no-repeat bg-[url('https://img77.uenicdn.com/image/upload/v1546967109/category/shutterstock_1198260439.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 md:h-[30rem]">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

          {!isLoggedIn &&
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <NavLink to="/login" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Login
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </NavLink>
              <NavLink to="/register" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Register
              </NavLink>
            </div>}
        </div>
      </section>

      <section className="about py-10">
        <Heading text="About Us" />
        <div className="container space-y-5 md:max-w-7xl mx-auto">

          <div className="aboutcontainer md:flex md:h-96 border border-gray-100">
            <div className="info p-6 md:w-1/2 md:p-10 ">
              <h1 className=' font-bold leading-5 mb-6 text-gray-00 md:text-2xl'>Foremost Administrative Services in Dandwadih</h1>
              <p className='text-sm text-gray-700 font-semibold md:text-base'>For an organisation to achieve its goals, there needs to be proper planning, supervision, coordination, record keeping, and facility maintenance. These are the basic responsibilities of our virtual administrative managers. With Kanhaiya Csc Services - Digital Seva you can be sure to get these online services, and others, for your company. Our major aim is to help businesses build, grow and achieve their objectives. For more inquiries, you can visit us in Etah or call us on +91 9525104359.</p>
            </div>
            <div className="image md:w-1/2">
              <img className='h-56 md:h-full' src="https://speedy.uenicdn.com/acc5446d-41d1-4b17-a115-1179678aa7b9/c1344_500a/image/upload/v1567704953/category/shutterstock_479851081.jpg" alt="" />
            </div>
          </div>

          <div className="aboutcontainer md:flex md:flex-row-reverse md:h-96 border border-gray-100">
            <div className="info p-6 md:w-1/2 md:p-10 ">
              <h1 className=' font-bold leading-5 mb-6 text-gray-00 md:text-2xl'>Why Choose Us</h1>
              <p className='text-sm text-gray-700 font-semibold md:text-base'>As a trusted eMitra service provider, we are able to cover all the usual services you’d expect – from the Agriculture Department, the Commercial Taxes Department, DISCOM, the Finance Department, as well as other government services. So why patronise our centre in particular? Many people, as well as businesses, approach us for our friendliness and trustworthiness. We are transparent in our business processes and will continue to be one. Beyond eMitra, Kanhaiya Csc Services - Digital Seva is regarded for its experience in online payments across several industries and businesses.</p>
            </div>
            <div className="image md:w-1/2">
              <img className='h-56 md:h-full' src="https://img.uenicdn.com/cdn-cgi/image/width=1344,height=500,fit=crop,f=auto/image/upload/v1558448842/category/shutterstock_718540039.jpg" alt="" />
            </div>
          </div>


        </div>
      </section >

      <section className="about py-10" >
        <div className="container mx-auto md:max-w-4xl">
          <Gallery />
        </div>
      </section>

      <section className="amenties">
        <Heading text="Amenties" />
        <div className="container mx-auto flex flex-col items-center justify-center  md:max-w-7xl md:flex-row md:flex-wrap">
          {
            amenties.map((elem, index) => {
              return <AmentiesCard key={index} {...elem} />
            })
          }
        </div>
      </section>
    </div >
  )
}
