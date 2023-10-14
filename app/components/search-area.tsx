import React, { useContext } from 'react'

import DataValue from './data-area'

import HoverIcon from '../../public/images/HoverIcon.svg'

import Image from '@/node_modules/next/image'

import { InputTypes } from '../types/appTypes'

// import { ApiContext } from '../context/useContext'

const SearchArea = ({
  handleChange,
  handleClick,
  handleSubmit
}: InputTypes) => {
  return (
    <div className='flex justify-center items-center h-[58px] mt-28 w-full rounded-md '>
      <input
        className='h-full border-0 pl-[24px] outline-none rounded-tl-md rounded-bl-md placeholder:text-slate-300 font-inputFamily w-full'
        type='text'
        placeholder='Search for any IP Address or Domain.'
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
      <Image
        className='w-[58px] h-full rounded-tr-md rounded-br-md cursor-pointer bg-center'
        src={HoverIcon}
        alt='search-icon'
        onClick={handleClick}
      />
    </div>
  )
}

export default SearchArea
