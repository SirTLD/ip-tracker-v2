import React from 'react'
import { MapPin, Globe, Navigation } from 'lucide-react'

const MapPlaceholder = () => {
  return (
    <div className='relative h-full w-full bg-gradient-to-br from-blue-50 via-blue-100 to-purple-50 flex items-center justify-center overflow-hidden'>
      {/* Animated background pattern */}
      <div className='absolute inset-0'>
        {/* Grid pattern */}
        <div
          className='absolute inset-0 opacity-20'
          style={{
            backgroundImage:
              'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Floating elements */}
        <div className='absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse'></div>
        <div className='absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000'></div>
        <div className='absolute bottom-32 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500'></div>
        <div className='absolute bottom-20 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-1500'></div>
      </div>

      {/* Central content */}
      <div className='relative z-10 text-center space-y-6'>
        <div className='relative'>
          <div className='w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl mx-auto'>
            <Globe size={48} className='text-white' />
          </div>
          <div className='absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full animate-ping'></div>
          <div className='absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full'></div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            Ready to Track
          </h3>
          <p className='text-gray-600 max-w-md mx-auto'>
            Enter an IP address or domain name above to see its location on an
            interactive map
          </p>
        </div>

        {/* Feature highlights */}
        <div className='flex justify-center space-x-8 pt-4'>
          <div className='flex items-center space-x-2 text-gray-500'>
            <MapPin size={16} />
            <span className='text-sm font-medium'>Precise Location</span>
          </div>
          <div className='flex items-center space-x-2 text-gray-500'>
            <Navigation size={16} />
            <span className='text-sm font-medium'>Interactive Map</span>
          </div>
        </div>
      </div>

      {/* Decorative world map silhouette */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent'>
        <svg
          className='w-full h-full opacity-10'
          viewBox='0 0 400 100'
          fill='none'
        >
          <path
            d='M50 60 C80 40, 120 40, 150 60 C180 80, 220 80, 250 60 C280 40, 320 40, 350 60 L350 100 L50 100 Z'
            fill='currentColor'
          />
          <path
            d='M0 70 C30 50, 70 50, 100 70 C130 90, 170 90, 200 70 L200 100 L0 100 Z'
            fill='currentColor'
          />
        </svg>
      </div>
    </div>
  )
}

export default MapPlaceholder
