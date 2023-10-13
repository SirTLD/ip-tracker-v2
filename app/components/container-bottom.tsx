import Image from '@/node_modules/next/image'
import React from 'react'
import MapLocation from '../../public/images/MapLocation.jpg'

const ContainerBottom = () => {
  return (
    <div className='flex justify-center items-center h-full w-full relative  bg-blue-900'>
      <Image
        src={MapLocation}
        fill={true}
        alt='map area'
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}

export default ContainerBottom
