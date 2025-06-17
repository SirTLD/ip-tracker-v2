import React from 'react'

type DataEntryProps = {
  title: string
  value?: string
}

const DataEntry = ({ title, value }: DataEntryProps) => {
  return (
    <div className='text-center md:text-left'>
      <h2 className='text-xs text-slate-500 text-center md:text-left font-bold leading-[11.85px] tracking-wide uppercase font-inputFamily'>
        {title}
      </h2>
      <p className='text-lg text-center md:text-left leading-[24px] text-black font-bold mt-[7px] break-words'>
        {value || 'N/A'}
      </p>
    </div>
  )
}

export default DataEntry
