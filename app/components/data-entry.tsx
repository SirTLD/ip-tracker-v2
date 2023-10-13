import React from 'react'

import { DataTypes } from '../types/appTypes'

type DataEntryProps = {
  title: string
  value?: string
}

const DataEntry = ({ title, value }: DataEntryProps) => {
  return (
    <div>
      <h2 className='text-xs text-slate-500 text-center font-bold leading-[11.85px] tracking-wide uppercase font-inputFamily'>
        {title}
      </h2>
      <p className='text-lg text-center leading-[24px] text-black font-bold mt-[7px]'>
        {value}
      </p>
    </div>
  )
}

export default DataEntry
