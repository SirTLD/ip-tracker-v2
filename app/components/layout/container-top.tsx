import Image from 'next/image'
import React from 'react'
import BannerTop from '../../../public/images/BannerTop.svg'

const ContainerTop = () => {
  return (
    <div className='relative w-full h-80 flex flex-col justify-center items-center overflow-hidden'>
      {/* Background with overlay */}
      <div className='absolute inset-0'>
        <Image
          src={BannerTop}
          alt='background pattern'
          fill={true}
          style={{ objectFit: 'cover' }}
          className='opacity-90'
        />
        <div className='absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-blue-800/90'></div>
        {/* Subtle animated overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 text-center space-y-4 px-4'>
        <h1 className='text-4xl md:text-5xl font-bold text-white drop-shadow-lg'>
          IP Tracker
        </h1>
        <p className='text-xl text-white/90 font-medium drop-shadow'>
          Discover location and network information
        </p>
      </div>
    </div>
  )
}

export default ContainerTop
