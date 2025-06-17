import React from 'react'
import { Search } from 'lucide-react'

interface SearchButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  loading?: boolean
}

export const SearchButton = ({
  onClick,
  disabled = false,
  loading = false
}: SearchButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled || loading}
      className='h-14 w-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center group'
    >
      <Search
        size={20}
        className={`transition-transform duration-300 ${
          loading ? 'animate-pulse' : 'group-hover:scale-110'
        }`}
      />
    </button>
  )
}
