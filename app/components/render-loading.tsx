import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const RenderLoad = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[294px] mt-48 space-y-4 bg-white rounded-md w-full absolute z-50 shadow-xl'>
      <AiOutlineLoading3Quarters
        size='50px'
        className='text-blue-500 animate-spin'
      />
      <p className='text-center font-semibold text-blue-600'>Loading...</p>
      <p className='text-sm text-gray-500'>Fetching location data</p>
    </div>
  )
}

export default RenderLoad
