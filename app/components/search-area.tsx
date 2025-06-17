import React from 'react'
import HoverIcon from '../../public/images/HoverIcon.svg'
import Image from 'next/image'
import { InputTypes } from '../types/appTypes'

const SearchArea = ({
  handleChange,
  handleClick,
  handleSubmit
}: InputTypes) => {
  return (
    <div className='flex justify-center items-center h-[58px] mt-28 w-full rounded-md shadow-lg'>
      <input
        className='h-full border-0 pl-[24px] outline-none rounded-tl-md rounded-bl-md placeholder:text-slate-300 font-inputFamily w-full'
        type='text'
        placeholder='Search for any IP Address or Domain.'
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
      <button
        className='w-[58px] h-full rounded-tr-md rounded-br-md cursor-pointer bg-black hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center'
        onClick={handleClick}
        type='button'
      >
        <Image src={HoverIcon} alt='search-icon' width={24} height={24} />
      </button>
    </div>
  )
}

export default SearchArea
