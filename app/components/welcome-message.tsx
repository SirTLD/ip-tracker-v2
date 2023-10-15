import React from 'react'

import { FaMapMarkedAlt } from 'react-icons/fa'

const WelcomeMessage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[294px] mt-48 space-y-4 bg-white rounded-md w-full absolute z-50 shadow-xl'>
      <FaMapMarkedAlt size='50px' />
      <p className='font-bold'>Track Globally</p>
    </div>
  )
}

export default WelcomeMessage
