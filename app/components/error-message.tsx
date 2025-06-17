import React from 'react'
import { MdError } from 'react-icons/md'

const ErrorMessage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[294px] mt-48 space-y-4 bg-white rounded-md w-full absolute z-50 shadow-xl p-6'>
      <MdError size='50px' className='text-red-500' />
      <p className='text-lg font-semibold text-red-600'>
        Something Went Wrong...
      </p>
      <p className='text-sm text-gray-600 text-center'>
        Please check your input and try again
      </p>
    </div>
  )
}

export default ErrorMessage
