import React from 'react'
import { Card, CardContent } from '../ui/card'
import { AlertTriangle, RefreshCw } from 'lucide-react'

interface ErrorStateProps {
  message?: string
  onRetry?: () => void
}

const ErrorState = ({
  message = 'Something went wrong while fetching location data',
  onRetry
}: ErrorStateProps) => {
  return (
    <div className='w-full max-w-6xl mx-auto px-4 -mt-16 relative z-20'>
      <Card className='bg-white/95 backdrop-blur-sm border-white/30 border-l-4 border-l-red-500'>
        <CardContent className='p-12'>
          <div className='flex flex-col items-center justify-center space-y-6'>
            <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center'>
              <AlertTriangle size={32} className='text-red-500' />
            </div>
            <div className='text-center space-y-3'>
              <h3 className='text-xl font-bold text-gray-800'>
                Unable to fetch location
              </h3>
              <p className='text-gray-600 max-w-md'>{message}</p>
            </div>
            {onRetry && (
              <button
                onClick={onRetry}
                className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl'
              >
                <RefreshCw size={16} />
                Try Again
              </button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ErrorState
