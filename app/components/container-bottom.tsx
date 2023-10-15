import Image from '@/node_modules/next/image'
import React from 'react'
import DefaultMap from '../../public/images/DefaultMap.png'

const DefaultImage = () => {
  return (
    <div>
      <Image
        src={DefaultMap}
        fill={true}
        alt='map area'
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}

export default DefaultImage
