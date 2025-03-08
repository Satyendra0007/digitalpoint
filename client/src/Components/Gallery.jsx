import 'flowbite'
import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import { initFlowbite } from 'flowbite'
import { fetchData } from '../actions/serverActions'
import image1 from "../gallery/1.jpg"
import image2 from "../gallery/2.jpg"

export default function Gallery() {

  const [images, setImages] = useState([image1, image2])
  const fetchAllImages = async () => {
    const serverResponse = await fetchData(`${import.meta.env.VITE_APP_SERVER_URI}api/gallery/image`, null)
    const response = await serverResponse.json()
    if (serverResponse.ok) {
      setImages(response.map(ele => ele.url))
    }
    else {
      console.log(response.message)
      toast.error(response.message)
    }
  }

  useEffect(() => {
    fetchAllImages();
  }, [])

  useEffect(() => {
    initFlowbite();
  }, [images])

  return (
    <div className=''>
      <Heading text='Gallery' />
      <div id="gallery" className="relative w-full pt-5" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.length > 0 && images.map((image, index) => {
            return <div key={index} className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src={image} className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain" alt="" />
            </div>
          })}
          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
