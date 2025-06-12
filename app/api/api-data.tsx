// 'use client'
// import axios from 'axios'

// import React, { useState } from 'react'

// import { DataTypes } from '../types/appTypes'

// export const FetchIpData = async () => {
//   const [inputData, setInputData] = useState<string>('')
//   const [loading, setLoading] = useState<boolean>(false)
//   const [error, setError] = useState<boolean>(false)
//   const [ipData, setIpData] = useState<DataTypes | null>()
//   try {
//     setLoading(true)
//     const URL = `https://geo.ipify.org/api/v1?apiKey=${process.env.NEXT_PUBLIC_GEO_KEY}&ipAddress=${inputData}&domain=${inputData}`
//     const response = await axios.get(URL)

//     setIpData(response?.data)
//   } catch (err) {
//     setError(true)
//     setLoading(false)
//   } finally {
//     setLoading(false)
//   }
// }
