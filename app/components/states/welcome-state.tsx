import React from 'react'
import { Card, CardContent } from '../ui/card'
import { MapPin, Search, Globe, Zap } from 'lucide-react'

const WelcomeState = () => {
  const features = [
    { icon: <Search size={18} />, text: 'Search any IP or domain' },
    { icon: <MapPin size={18} />, text: 'Get precise location data' },
    { icon: <Globe size={18} />, text: 'Interactive map view' },
    { icon: <Zap size={18} />, text: 'Real-time results' }
  ]

  return (
    <div className='w-full max-w-7xl mx-auto px-4 -mt-16 relative z-20'>
      <Card className='bg-white/95 backdrop-blur-sm border-white/30 shadow-2xl'>
        <CardContent className='p-12'>
          <div className='flex flex-col items-center justify-center space-y-8'>
            <div className='relative'>
              <div className='w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl'>
                <MapPin size={48} className='text-white' />
              </div>
              <div className='absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full animate-pulse flex items-center justify-center'>
                <div className='w-3 h-3 bg-white rounded-full'></div>
              </div>
            </div>

            <div className='text-center space-y-4'>
              <h2 className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Welcome to IP Tracker
              </h2>
              <p className='text-gray-600 text-xl max-w-2xl leading-relaxed'>
                Enter an IP address or domain name above to discover its
                location, timezone, and network details instantly
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='flex items-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
                >
                  <div className='w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600'>
                    {feature.icon}
                  </div>
                  <span className='text-sm font-semibold text-gray-700'>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default WelcomeState
