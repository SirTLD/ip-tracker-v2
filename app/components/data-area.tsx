import React, { useContext } from 'react'

import DataEntry from './data-entry'

import { DataTypes } from '../types/appTypes'

// import { AppContext } from '../context/useContext'

type DataAreaProps = {
  value: any
}

const DataArea = ({ value }: DataAreaProps) => {
  // const { ipData, setIpData } = useContext(AppContext)
  return (
    <div className='flex flex-col items-center justify-center h-[294px] mt-48 space-y-4 bg-white rounded-md w-full absolute z-50 shadow-xl'>
      <DataEntry title={'IP Address'} value={value.ip} />
      <DataEntry title={'Location'} value={value.location.city} />
      <DataEntry title={'Timezone'} value={value.location.timezone} />
      <DataEntry title={'Isp'} value={value.isp} />
    </div>
  )
}

export default DataArea
