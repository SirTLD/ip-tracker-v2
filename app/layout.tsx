import './globals.css'

import type { Metadata } from 'next'

// import { AppContextProvider } from './context/useContext'

export const metadata: Metadata = {
  title: 'IP Address Tracker',
  description: 'Track IP Addresses Globally'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
