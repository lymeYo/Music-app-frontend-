import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import MyLocationMarker from '@/modules/Poster/Info/Address/MyMap/MyLocationMarker'
import SellerLocationMarker from '@/modules/Poster/Info/Address/MyMap/SellerLocationMarker'

const MapArea = () => {
  return (
    <div>
      <MapContainer
        className='h-[380px] w-[640px]'
        center={[61.761734, 34.307256]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MyLocationMarker />
        <SellerLocationMarker />
      </MapContainer>
    </div>
  )
}

export default MapArea
