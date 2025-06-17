import React from 'react'
import { Search } from 'lucide-react'
import { InputTypes } from '../../types/appTypes'

const SearchArea = ({
  handleChange,
  handleClick,
  handleSubmit
}: InputTypes) => {
  return (
    <div className='w-full max-w-2xl mx-auto px-4'>
      <div className='flex gap-3 items-center'>
        {/* Search Input */}
        <div className='relative flex-1'>
          <input
            type='text'
            onChange={handleChange}
            onKeyDown={handleSubmit}
            placeholder='Search for any IP Address or Domain...'
            className='w-full h-14 pl-6 pr-4 text-lg bg-white/95 backdrop-blur-sm border-2 border-white/30 rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 transition-all duration-300 placeholder:text-gray-400 shadow-lg'
          />
        </div>

        {/* Search Button */}
        <button
          type='button'
          onClick={handleClick}
          className='h-14 w-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center group'
        >
          <Search
            size={20}
            className='transition-transform duration-300 group-hover:scale-110'
          />
        </button>
      </div>
    </div>
  )
}

export default SearchArea
