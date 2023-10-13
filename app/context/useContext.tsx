// import React, { useState, createContext } from 'react'

// import axios from 'axios'

// import { DataTypes } from '../types/appTypes'

// // interface contextProps {
// //   inputData: string
// //   setInputData: string
// //   loading: boolean
// //   error: boolean
// //   IpData: React.Dispatch<DataTypes>
// // }

// // const InitialValues: contextProps = {
// //   inputData: '',
// //   loading: false,
// //   setInputData: '',
// //   error: false,

// //   }
// // }

// // const appContext = createContext({} as contextProps)

// // type appContextTypes = {
// //   children: React.ReactNode
// // }

// // export const AppContextProvider = ({ children }: appContextTypes) => {
// //   const [ipData, setIpData] = useState<contextProps | null>
// //   return (
// //     <appContext.Provider value={{ ipData, setIpData }}>
// //       {children}
// //     </appContext.Provider>
// //   )
// // }

// // export const AppContext = createContext({})

// type appContextProps = {
//   children: React.ReactNode
// }

// export const AppContextProvider = ({ children }: appContextProps) => {
//   const [inputData, setInputData] = useState<string>()
//   const [loading, setLoading] = useState<boolean>()
//   const [error, setError] = useState<boolean>()
//   // const [userIpData, setUserIpData] = useState<DataTypes | null>()
//   const [ipData, setIpData] = useState<DataTypes | null>()

//   const fetchIpData = () => {
//     const URL = `https://geo.ipify.org/api/v1?apiKey=${process.env.NEXT_PUBLIC_GEO_KEY}&ipAddress=${inputData}&domain=${inputData}`

//     axios
//       .get(URL)
//       .then(({ res }: any) => {
//         if (res.status !== 200) {
//           setError(true)
//         }

//         setIpData(res.data)

//         setError(false)
//       })
//       .catch(({ err }: any) => {
//         setError(true)

//         console.log('[IP_TRACKER_ERROR]', err)
//       })
//   }

//   const fetchCallData = {
//     inputData,
//     setInputData,
//     ipData,
//     setIpData,
//     error,
//     setError,
//     loading,
//     setLoading,
//     fetchIpData
//   }

//   return (
//     <AppContextProvider value={fetchCallData}>{children}</AppContextProvider>
//   )
// }
