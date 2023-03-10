import React, { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

import SellerLocationMarker from '@/modules/Poster/Info/Address/MyMap/SellerLocationMarker'
import MyLocationMarker from '@/modules/Poster/Info/Address/MyMap/MyLocationMarker'
import { ShotArrowIcon } from '@/ui/Icons'

const MyMap = () => {
  const [isMapOpen, openMap] = useState(false)
  const handleMapOpen = () => {
    openMap((prev) => !prev)
  }

  return (
    <>
      <div
        className='flex cursor-pointer items-center justify-end pt-1 text-blue-500'
        onClick={handleMapOpen}
      >
        <span className='pr-1'>Показать карту</span>
        <ShotArrowIcon
          extraClass={
            `${isMapOpen ? 'rotate-90' : ''} ` +
            'h-4 w-4 transition-transform duration-300 group-hover:text-lSecondary'
          }
        />
      </div>
      <div className={`${isMapOpen ? 'h-[380px]' : 'h-0'} ` + 'mt-5 overflow-hidden duration-300'}>
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
    </>
  )
}

export default MyMap
