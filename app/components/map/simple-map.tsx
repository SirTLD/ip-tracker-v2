import React from 'react'
import { MapPin, ExternalLink } from 'lucide-react'

type SimpleMapProps = {
  lat: number
  lng: number
  location?: string
}

const SimpleMap = ({ lat, lng, location = 'Location' }: SimpleMapProps) => {
  // Create Google Maps and OpenStreetMap URLs
  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`
  const openStreetMapUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&zoom=13`

  return (
    <div className='relative h-full w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden'>
      {/* Animated Map Background Pattern */}
      <div className='absolute inset-0'>
        {/* Primary grid */}
        <div
          className='absolute inset-0 opacity-30'
          style={{
            backgroundImage:
              'linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        {/* Secondary grid */}
        <div
          className='absolute inset-0 opacity-20'
          style={{
            backgroundImage:
              'linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />

        {/* Floating map elements */}
        <div className='absolute top-16 left-16 w-3 h-3 bg-blue-400 rounded-full animate-pulse'></div>
        <div className='absolute top-32 right-24 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000'></div>
        <div className='absolute bottom-24 left-1/4 w-4 h-4 bg-indigo-400 rounded-full animate-pulse delay-500'></div>
        <div className='absolute bottom-16 right-16 w-3 h-3 bg-violet-400 rounded-full animate-pulse delay-1500'></div>
        <div className='absolute top-1/2 left-8 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-700'></div>
        <div className='absolute top-20 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-200'></div>

        {/* Map-like paths */}
        <svg
          className='absolute inset-0 w-full h-full opacity-10'
          viewBox='0 0 400 300'
        >
          <path
            d='M50 150 Q150 100 250 150 T350 120'
            stroke='rgb(59, 130, 246)'
            strokeWidth='2'
            fill='none'
            className='animate-pulse'
          />
          <path
            d='M100 200 Q200 150 300 200 T400 180'
            stroke='rgb(147, 51, 234)'
            strokeWidth='2'
            fill='none'
            className='animate-pulse delay-1000'
          />
          <path
            d='M0 100 Q100 50 200 100 T300 80'
            stroke='rgb(99, 102, 241)'
            strokeWidth='2'
            fill='none'
            className='animate-pulse delay-500'
          />
        </svg>
      </div>

      {/* Location Card */}
      <div className='relative z-10 h-full flex items-center justify-center p-8'>
        <div className='bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 max-w-md w-full text-center space-y-6 transform hover:scale-105 transition-all duration-300'>
          {/* Location marker */}
          <div className='relative mx-auto w-16 h-16'>
            <div className='w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-xl'>
              <MapPin size={32} className='text-white drop-shadow-lg' />
            </div>
            <div className='absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full animate-pulse flex items-center justify-center shadow-lg'>
              <div className='w-2 h-2 bg-white rounded-full'></div>
            </div>
            {/* Ripple effect */}
            <div className='absolute inset-0 bg-red-400 rounded-full animate-ping opacity-20'></div>
          </div>

          {/* Location info */}
          <div className='space-y-3'>
            <h3 className='text-2xl font-bold text-gray-800'>
              Location Found!
            </h3>
            <div className='space-y-2'>
              <p className='text-base text-gray-700 font-semibold'>
                {location}
              </p>
              <p className='text-sm text-gray-500 font-mono bg-gray-100 rounded-xl px-4 py-2 inline-block border'>
                {lat.toFixed(4)}, {lng.toFixed(4)}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className='space-y-4'>
            <p className='text-sm text-gray-600 font-medium'>View on map:</p>
            <div className='flex space-x-3'>
              <a
                href={googleMapsUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm font-semibold'
              >
                <span>Google Maps</span>
                <ExternalLink size={14} />
              </a>
              <a
                href={openStreetMapUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm font-semibold'
              >
                <span>OpenStreetMap</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Helper text */}
          <div className='pt-4 border-t border-gray-200'>
            <p className='text-xs text-gray-500'>
              Click above to view detailed maps with directions
            </p>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className='absolute top-8 left-8 w-4 h-4 bg-blue-400/40 rounded-full animate-bounce'></div>
      <div className='absolute top-12 right-12 w-3 h-3 bg-purple-400/40 rounded-full animate-bounce delay-300'></div>
      <div className='absolute bottom-12 left-12 w-3 h-3 bg-indigo-500/40 rounded-full animate-bounce delay-700'></div>
      <div className='absolute bottom-8 right-8 w-4 h-4 bg-violet-500/40 rounded-full animate-bounce delay-1000'></div>
    </div>
  )
}

export default SimpleMap
