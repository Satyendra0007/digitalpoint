import React from 'react'

export default function AmentiesCard({ Icon, text }) {
  const Logo = () => {
    return <Icon />
  }

  return (
    <div className='bg-gray-100 p-4 w-[21rem]  flex gap-5 items-center m-2 rounded-full shadow-lg'>
      <div className="icon border-2 border-black p-3 rounded-full text-xl ">
        < Logo />
      </div>
      <div className="text text-base font-bold">
        {text}
      </div>
    </div>
  )
}
