import React from 'react'
import { Search } from 'lucide-react'

interface SearchInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  disabled?: boolean
  placeholder?: string
}

export const SearchInput = ({
  value,
  onChange,
  onKeyDown,
  disabled = false,
  placeholder = 'Search for any IP Address or Domain...'
}: SearchInputProps) => {
  return (
    <div className='relative flex-1'>
      <input
        type='text'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
        placeholder={placeholder}
        className='w-full h-14 pl-6 pr-4 text-lg bg-white/95 backdrop-blur-sm border-2 border-white/30 rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 transition-all duration-300 placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg'
      />
    </div>
  )
}
