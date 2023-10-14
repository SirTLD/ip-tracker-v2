import React from 'react'

import { BsFillPinMapFill } from 'react-icons/bs'

const WelcomeMessage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[294px] mt-48 space-y-4 bg-white rounded-md w-full absolute z-50 shadow-xl'>
      <BsFillPinMapFill size='40px' />
      <p>Track Globally</p>
    </div>
  )
}

export default WelcomeMessage
