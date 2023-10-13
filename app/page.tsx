'use client'

import { useContext, useState } from 'react'

import ContainerBottom from './components/container-bottom'

import ContainerTop from './components/container-top'

import DataArea from './components/data-area'

import SearchArea from './components/search-area'

import axios from 'axios'

import { DataTypes } from './types/appTypes'

// import { AppContextProvider } from './context/useContext'

export default function Home() {
  const [inputData, setInputData] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  // const [userIpData, setUserIpData] = useState<DataTypes | null>()
  const [ipData, setIpData] = useState<DataTypes | null>()

  const fetchIpData = async () => {
    try {
      setLoading(true)
      const URL = `https://geo.ipify.org/api/v1?apiKey=${process.env.NEXT_PUBLIC_GEO_KEY}&ipAddress=${inputData}&domain=${inputData}`
      const response = await axios.get(URL)
      setIpData(response?.data)
    } catch (err) {
      setError(true)
      console.log('[IP_TRACKER_ERROR]', err)
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

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   if (!inputData) returnxw
  //   fetchIpData()
  //   console.log('clicked')
  // }

  function RenderLoad() {
    return (
      <div className='flex flex-col items-center justify-center h-[294px] mt-48 space-y-4 bg-white rounded-md w-full absolute z-50 shadow-xl'>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <main className='relative'>
      <div className='flex h-screen w-screen flex-col items-center '>
        <ContainerTop />
        <div className='flex w-[90%] md:w-[60%] absolute mt-[30px]'>
          <SearchArea handleChange={handleChange} handleClick={handleClick} />
          {loading && <RenderLoad />}
          {ipData && <DataArea value={ipData} /> }
        </div>
        <ContainerBottom />
      </div>
    </main>
  )
}
