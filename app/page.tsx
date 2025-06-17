'use client'
import React, { useState } from 'react'
import ContainerTop from './components/layout/container-top'
import DataArea from './components/data/data-area'
import SearchArea from './components/search/search-area'
import LoadingState from './components/states/loading-state'
import ErrorState from './components/states/error-state'
import WelcomeState from './components/states/welcome-state'
import DefaultImage from './components/container-bottom'
import axios from 'axios'
import { DataTypes } from './types/appTypes'
import dynamic from 'next/dynamic'
import SimpleMap from './components/map/simple-map'

// Dynamic import for map component with loading state
const Maps = dynamic(() => import('./components/map-data'), {
  ssr: false,
  loading: () => (
    <div className='flex justify-center items-center p-4 text-white'>
      Loading map...
    </div>
  )
})

export default function Home() {
  const [inputData, setInputData] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [ipData, setIpData] = useState<DataTypes | null>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')

  // Input validation function
  const validateInput = (input: string): boolean => {
    const trimmedInput = input.trim()
    if (!trimmedInput) return false

    // IP address regex pattern (more precise)
    const ipRegex =
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

    // Domain regex pattern
    const domainRegex =
      /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)*[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/

    // Check for localhost variations
    if (trimmedInput === 'localhost' || trimmedInput === '127.0.0.1') {
      return true
    }

    // Check for private IP ranges
    const privateIpRegex = /^(10\.|172\.(1[6-9]|2[0-9]|3[01])\.|192\.168\.)/
    if (privateIpRegex.test(trimmedInput)) {
      return true // Valid IP but will return limited location data
    }

    return ipRegex.test(trimmedInput) || domainRegex.test(trimmedInput)
  }

  // Fetch IP data with improved error handling
  const fetchIpData = async () => {
    const trimmedInput = inputData.trim()

    // Validate input before making API call
    if (!validateInput(trimmedInput)) {
      setError(true)
      setErrorMessage('Please enter a valid IP address or domain name')
      return
    }

    try {
      setLoading(true)
      setError(false)
      setErrorMessage('')

      // Improved API URL construction
      let URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_GEO_KEY}`

      // Check if input is IP address or domain
      const ipRegex =
        /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

      if (ipRegex.test(trimmedInput)) {
        URL += `&ipAddress=${encodeURIComponent(trimmedInput)}`
      } else {
        URL += `&domain=${encodeURIComponent(trimmedInput)}`
      }

      console.log('API URL:', URL) // For debugging

      const response = await axios.get(URL, {
        timeout: 10000, // 10 second timeout
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })

      // Check if response has the expected data structure
      if (response.data && response.data.location) {
        setIpData(response.data)
      } else {
        throw new Error('Invalid response format')
      }
    } catch (err) {
      console.error('API Error:', err)
      setError(true)

      // Set specific error messages based on error type
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 422) {
          // Check if it's a domain vs IP issue
          const ipRegex =
            /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
          if (ipRegex.test(trimmedInput)) {
            setErrorMessage(
              `Invalid IP address: ${trimmedInput}. Please check the format.`
            )
          } else {
            setErrorMessage(
              `Unable to resolve domain: ${trimmedInput}. Please check if the domain exists.`
            )
          }
        } else if (err.response?.status === 403) {
          setErrorMessage(
            'API key is invalid or you have exceeded the rate limit. Please try again later.'
          )
        } else if (err.response?.status === 429) {
          setErrorMessage(
            'Too many requests. Please wait a moment and try again.'
          )
        } else if (
          axios.isAxiosError(err) &&
          err.response &&
          err.response.status >= 500
        ) {
          setErrorMessage('Server error. Please try again later.')
        } else if (err.code === 'ECONNABORTED') {
          setErrorMessage(
            'Request timeout. Please check your connection and try again.'
          )
        } else {
          setErrorMessage(
            `Request failed: ${err.response?.statusText || 'Unknown error'}`
          )
        }
      } else {
        setErrorMessage(
          'Network error. Please check your connection and try again.'
        )
      }
    } finally {
      setLoading(false)
    }
  }

  // Handle input changes with validation feedback
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputData(value)

    // Reset error state when user starts typing
    if (error) {
      setError(false)
      setErrorMessage('')
    }
  }

  // Handle button click
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!inputData.trim() || loading) return
    fetchIpData()
  }

  // Handle Enter key press
  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (inputData.trim() && !loading) {
        fetchIpData()
      }
    }
  }

  // Handle retry functionality
  const handleRetry = () => {
    if (inputData.trim()) {
      fetchIpData()
    }
  }

  // Clear all data and reset to initial state
  const handleClear = () => {
    setInputData('')
    setIpData(null)
    setError(false)
    setErrorMessage('')
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
      {/* Header Section */}
      <ContainerTop />

      {/* Search Section */}
      <div className='relative -mt-8 z-30 px-4'>
        <SearchArea
          handleChange={handleChange}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
        />
      </div>

      {/* Content Section */}
      <div className='relative'>
        {/* Data/State Cards Section */}
        <div className='relative z-20 pb-8'>
          <div className='pt-16'>
            {loading && <LoadingState />}
            {error && (
              <ErrorState message={errorMessage} onRetry={handleRetry} />
            )}
            {ipData && !loading && !error && <DataArea value={ipData} />}
            {!ipData && !loading && !error && <WelcomeState />}
          </div>
        </div>

        {/* Map Section */}
        <div className='h-[60vh] w-full relative z-10'>
          {ipData &&
          !loading &&
          !error &&
          ipData.location.lat &&
          ipData.location.lng ? (
            <SimpleMap
              lat={ipData.location.lat}
              lng={ipData.location.lng}
              location={`${ipData.location.city}, ${ipData.location.region}`}
              key={`map-${ipData.location.lat}-${ipData.location.lng}`}
            />
          ) : (
            <DefaultImage />
          )}
        </div>
      </div>
    </div>
  )
}
