'use client'

import React, { useContext, useState } from 'react'

import ContainerBottom from './components/container-bottom'

import ContainerTop from './components/container-top'

import DataArea from './components/data-area'

import SearchArea from './components/search-area'

import axios from 'axios'

import { DataTypes } from './types/appTypes'

import RenderLoad from './components/render-loading'
import ErrorMessage from './components/error-message'
import WelcomeMessage from './components/welcome-message'
import MapLocation from '../../public/images/MapLocation.jpg'

import Image from '@/node_modules/next/image'
import DefaultImage from './components/container-bottom'
import Map from './components/map-data'

export default function Home() {
  const [inputData, setInputData] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [ipData, setIpData] = useState<DataTypes | null>()

  const fetchIpData = async () => {
    try {
      setLoading(true)
      const URL = `https://geo.ipify.org/api/v1?apiKey=${process.env.NEXT_PUBLIC_GEO_KEY}&ipAddress=${inputData}&domain=${inputData}`
      const response = await axios.get(URL)

      setIpData(response?.data)
    } catch (err) {
      setError(true)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      return
    }
    setInputData(e.target.value)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!inputData) return
    fetchIpData()
  }

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetchIpData()
    }
  }

  return (
    <main className='relative'>
      <div className='flex h-screen w-screen flex-col items-center '>
        <ContainerTop />
        <div className='flex w-[90%] md:w-[60%] absolute mt-[30px]'>
          <SearchArea
            handleChange={handleChange}
            handleClick={handleClick}
            handleSubmit={handleSubmit}
          />
          {loading && <RenderLoad />}
          {error && <ErrorMessage />}
          {ipData && <DataArea value={ipData} />}
          {!ipData && <WelcomeMessage />}
        </div>
        <div className='flex justify-center items-center h-full w-full relative '>
          {ipData ? (
            <Map lat={ipData.location.lat} lng={ipData.location.lng} />
          ) : (
            <DefaultImage />
          )}
        </div>
      </div>
    </main>
  )
}
