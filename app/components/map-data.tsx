'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

type MapDataProps = {
  lat: number
  lng: number
}

// Create the actual map component that will only render on client
const LeafletMap = ({ lat, lng }: MapDataProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const initializeMap = async () => {
      // Dynamically import Leaflet to ensure it only runs on client
      const L = (await import('leaflet')).default

      // Remove any existing map container
      const existingContainer = document.getElementById('map-container')
      if (existingContainer) {
        existingContainer.innerHTML = ''
      }

      // Import marker images
      const markerIcon = await import('leaflet/dist/images/marker-icon.png')
      const markerShadow = await import('leaflet/dist/images/marker-shadow.png')
      const markerIconRetina = await import(
        'leaflet/dist/images/marker-icon-2x.png'
      )

      // Configure default icon
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconUrl: markerIcon.default.src,
        iconRetinaUrl: markerIconRetina.default.src,
        shadowUrl: markerShadow.default.src
      })

      // Create map
      const map = L.map('map-container', {
        center: [lat, lng],
        zoom: 13,
        scrollWheelZoom: true
      })

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

      // Add marker
      const marker = L.marker([lat, lng]).addTo(map)
      marker.bindPopup(`
        <div style="text-align: center;">
          <strong>Location Found!</strong><br/>
          Coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)}
        </div>
      `)

      // Cleanup function
      return () => {
        map.remove()
      }
    }

    const cleanup = initializeMap()

    return () => {
      cleanup.then((cleanupFn) => cleanupFn && cleanupFn())
    }
  }, [lat, lng, isClient])

  if (!isClient) {
    return (
      <div className='h-full w-full absolute z-0 flex items-center justify-center bg-gray-100'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto'></div>
          <p className='mt-2 text-sm text-gray-600'>Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className='h-full w-full '>
      <div
        id='map-container'
        style={{
          height: '100%',
          width: '100%'
        }}
      />
    </div>
  )
}

// Export with dynamic import to prevent SSR issues
const Map = dynamic(() => Promise.resolve(LeafletMap), {
  ssr: false,
  loading: () => (
    <div className='h-full w-full absolute z-0 flex items-center justify-center bg-gray-100'>
      <div className='text-center'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto'></div>
        <p className='mt-2 text-sm text-gray-600'>Loading map...</p>
      </div>
    </div>
  )
})

export default Map
