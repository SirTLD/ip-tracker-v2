import Image from '@/node_modules/next/image'
import React from 'react'

import BannerTop from '../../public/images/BannerTop.svg'

const ContainerTop = () => {
  return (
    <div className='flex flex-col h-justify-center items-center bg-cover h-[380px] relative w-full '>
      <Image
        src={BannerTop}
        alt='top background image'
        fill={true}
        style={{ objectFit: 'cover' }}
      />
      <h1 className='font-bold text-2xl  text-center text-white absolute mt-[33px] z-10'>
        IP Tracker
      </h1>
    </div>
  )
}

export default ContainerTop
