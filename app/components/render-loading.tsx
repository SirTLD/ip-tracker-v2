import React from 'react'

import { Bars } from 'react-loader-spinner'

const RenderLoad = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[294px] mt-48 space-y-4 bg-white rounded-md w-full absolute z-50 shadow-xl'>
      <Bars
        height='80'
        width='80'
        color='#4fa94d'
        ariaLabel='bars-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </div>
  )
}
export default RenderLoad
