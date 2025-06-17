import React from 'react'
import { DataStatCard } from './data-stat-card'
import { Card, CardContent } from '../ui/card'
import { Globe, MapPin, Clock, Wifi } from 'lucide-react'

type DataAreaProps = {
  value: {
    ip: string
    location: {
      city: string
      country: string
      postalCode: string
      region: string
      timezone: string
      lat?: number
      lng?: number
    }
    isp: string
  }
}

const DataArea = ({ value }: DataAreaProps) => {
  const stats = [
    {
      label: 'IP Address',
      value: value.ip,
      icon: <Globe size={18} />
    },
    {
      label: 'Location',
      value: `${value.location.city}, ${value.location.region}, ${value.location.postalCode}`,
      icon: <MapPin size={18} />
    },
    {
      label: 'Timezone',
      value: value.location.timezone,
      icon: <Clock size={18} />
    },
    {
      label: 'ISP',
      value: value.isp,
      icon: <Wifi size={18} />
    }
  ]

  return (
    <div className='w-full max-w-7xl mx-auto px-4 -mt-16 relative z-20'>
      <Card className='bg-white/95 backdrop-blur-sm border-white/30 shadow-2xl'>
        <CardContent className='p-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
            {stats.map((stat, index) => (
              <DataStatCard
                key={index}
                label={stat.label}
                value={stat.value}
                icon={stat.icon}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default DataArea
