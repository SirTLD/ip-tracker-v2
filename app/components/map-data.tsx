'use client'

import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import MarkerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png'

import MarkerShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png'

import L from 'leaflet'

type MapDataProps = {
  lat?: any
  lng?: any
}

type PositionType = [number, number]

const Map = ({ lat, lng }: MapDataProps) => {
  const position: PositionType = [lat, lng]
  return (
    <div className='h-full w-full absolute z-0'>
      <MapContainer
        style={{
          height: 'inherit',
          width: 'inherit'
        }}
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker
          icon={
            new L.Icon({
              shadowUrl: MarkerShadow.src,
              iconSize: [30, 50],
              iconRetinaUrl: MarkerIcon.src,
              iconUrl: MarkerIcon.src
            })
          }
          position={[lat, lng]}
        >
          <Popup>Address is here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
