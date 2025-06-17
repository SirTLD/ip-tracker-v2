import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Loader2 } from 'lucide-react'

const LoadingState = () => {
  return (
    <div className='w-full max-w-6xl mx-auto px-4 -mt-16 relative z-20'>
      <Card className='bg-white/95 backdrop-blur-sm border-white/30'>
        <CardContent className='p-12'>
          <div className='flex flex-col items-center justify-center space-y-4'>
            <div className='relative'>
              <Loader2 size={48} className='text-blue-500 animate-spin' />
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-20'></div>
            </div>
            <div className='text-center space-y-2'>
              <h3 className='text-xl font-bold text-gray-800'>Locating...</h3>
              <p className='text-gray-600'>
                Fetching location data for your request
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoadingState
