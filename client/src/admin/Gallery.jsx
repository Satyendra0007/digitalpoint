import { initFlowbite } from 'flowbite';
import { useEffect, useState, useContext } from 'react'
import { MdAdd } from "react-icons/md";
import { toast } from 'react-toastify';
import { fetchData, deleteRequest } from '../actions/serverActions';
import { ContextStore } from '../store/ContextStore'
import ImageCard from '../Components/ImageCard';
import Spinner from '../Components/Spinner';

export default function Gallery() {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const { token } = useContext(ContextStore)

  function handleChange(e) {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  }

  const uploadImage = async () => {
    setUploading(true)
    const formData = new FormData();
    formData.append("image", file)
    const serverResponse = await fetch(`${import.meta.env.VITE_APP_SERVER_URI}api/gallery/image`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: formData
    })
    const response = await serverResponse.json()
    if (serverResponse.ok) {
      toast.success(response.message)
      setPreview(null)
      setFile(null)
      fetchAllImages()
    }
    else {
      toast.error(response.message)
    }
    setUploading(false)
  }


  const fetchAllImages = async () => {
    setLoading(true)
    const serverResponse = await fetchData(`${import.meta.env.VITE_APP_SERVER_URI}api/gallery/image`, null)
    const response = await serverResponse.json()
    if (serverResponse.ok) {
      setImages(response)
    }
    else {
      console.log(response.message)
      toast.error(response.message)
    }
    setLoading(false)
  }

  const handleDelete = async (id) => {
    let flag = confirm("Do you really want to delete this Image !")
    if (flag) {
      setLoading(true)
      const serverResponse = await deleteRequest(`${import.meta.env.VITE_APP_SERVER_URI}api/gallery/image/${id}`, token)
      const response = await serverResponse.json()
      if (serverResponse.ok) {
        fetchAllImages();
        toast.success(response.message)
      }
      else {
        console.log(response)
        toast.error(response.message)
      }
      setLoading(false)
    }
  }

  useEffect(() => {
    initFlowbite()
    fetchAllImages();
  }, [])

  return (
    <div className=''>
      <div className="top container md:max-w-4xl mx-auto  py-5">
        {/* <!-- Modal toggle --> */}
        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center gap-2" type="button">
          <MdAdd className='text-lg' /> Add Image
        </button>

        {/* <!-- Main modal --> */}
        <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Add New Image
                </h3>
                <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-3">
                <div >
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                  <input className="block w-full md:w-96 flex-grow text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" onChange={handleChange} />
                </div>
                <div className="preview mx-auto my-4">
                  <img src={preview} className={`w-20 h-20 ${!file ? "invisible" : ""}`} alt="" />
                </div>

                <button onClick={uploadImage} disabled={!file || uploading} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-32 h-10 flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-400" type="button" >
                  {uploading ? <>
                    <div className='flex space-x-2 justify-center items-center '>
                      <span className='sr-only'>Loading...</span>
                      <div className='h-2.5 w-2.5 bg-blue-700 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                      <div className='h-2.5 w-2.5 bg-blue-700 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                      <div className='h-2.5 w-2.5 bg-blue-700 rounded-full animate-bounce'></div>
                    </div>
                  </>
                    : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="bottom">
        <h1 className='text-2xl font-bold my-5  text-center text-blue-700'>All Images</h1>
        <div className="flex flex-wrap gap-4 justify-center items-center min-h-96">
          {loading ? <Spinner /> : <>
            {images.map((image) => {
              return <ImageCard key={image.public_id} {...image} handleDelete={handleDelete} />
            })}
          </>}
        </div>
      </div>
    </div>
  )
}
