import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

import LocationMarker from '@/ui/leaflet/LocationMarker'

type MapAreaProps = {
  latLon: [number, number]
  isMapFly: boolean
}
const MapArea = ({ latLon, isMapFly }: MapAreaProps) => {
  return (
    <div className='pt-8'>
      <MapContainer
        className='h-[190px] w-[300px] sm:h-[266px] sm:w-[448px] md:h-[380px] md:w-[640px]'
        center={latLon}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <LocationMarker
          lat={latLon[0]}
          lon={latLon[1]}
          popupMess='Место сделки'
          isMapFly={isMapFly}
        />
      </MapContainer>
    </div>
  )
}

export default MapArea
