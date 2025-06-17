import React from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa'

export const WelcomeMessage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[294px] mt-48 space-y-4 bg-white rounded-md w-full absolute z-50 shadow-xl p-6'>
      <FaMapMarkedAlt size='50px' className='text-blue-500' />
      <p className='font-bold text-xl text-gray-800'>Track Globally</p>
      <p className='text-sm text-gray-600 text-center'>
        Enter an IP address or domain name to get started
      </p>
    </div>
  )
}
