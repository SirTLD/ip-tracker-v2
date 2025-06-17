import React from 'react'
import { Card, CardContent } from '../ui/card'

interface DataStatCardProps {
  label: string
  value: string
  icon?: React.ReactNode
}

export const DataStatCard = ({ label, value, icon }: DataStatCardProps) => {
  return (
    <div className='group'>
      <Card className='h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-blue-500 bg-gradient-to-br from-white to-gray-50/50'>
        <CardContent className='p-6'>
          <div className='flex items-start gap-4'>
            {icon && (
              <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300'>
                {icon}
              </div>
            )}
            <div className='flex-1 min-w-0'>
              <p className='text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-hover:text-blue-600 transition-colors'>
                {label}
              </p>
              <p className='text-lg font-bold text-gray-900 break-words leading-tight group-hover:text-gray-700 transition-colors'>
                {value || 'N/A'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
