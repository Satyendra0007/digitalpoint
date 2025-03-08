import React, { useContext, useEffect, useState } from 'react'
import ServiceCard from '../Components/ServiceCard'
import Heading from '../Components/Heading'
import { ContextStore } from '../store/ContextStore'
import { useNavigate } from 'react-router-dom'
import { fetchData } from '../actions/serverActions'

export default function Service() {
  const navigate = useNavigate()
  const { isLoggedIn } = useContext(ContextStore)
  const [services, setServices] = useState([])

  const fetchAllServices = async () => {
    const serverResponse = await fetchData(`${import.meta.env.VITE_APP_SERVER_URI}api/services`)
    const response = await serverResponse.json();
    if (serverResponse.ok) {
      setServices(response.filter((service) => !service.isAdmin))
    }
    else {
      console.log(response)
    }
  }

  useEffect(() => {
    if (!isLoggedIn)
      navigate("/login")
    fetchAllServices()
  }, [])
  return (
    <div className='container mx-auto md:max-w-7xl' >
      <Heading text={"Our Services"} />
      <div className="px-6 flex flex-col gap-6 md:flex-row md:flex-wrap justify-center ">
        {services.map((service, index) => {
          return <ServiceCard key={index} {...service} />
        })}
      </div>
    </div>
  )
}
