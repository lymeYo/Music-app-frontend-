import React, { useState } from 'react'
import { Marker, Popup } from 'react-leaflet'

import { greenIcon } from '@/ui/leaflet/icons'

const MyLocationMarker = () => {
  const [position, setPosition] = useState<any>(null)

  const success = ({ coords }) => {
    const { latitude, longitude } = coords
    setPosition([latitude, longitude])
  }
  navigator.geolocation.getCurrentPosition(success, undefined, {
    enableHighAccuracy: true
  })

  return position === null ? null : (
    <Marker position={position} icon={greenIcon}>
      <Popup>Вы здесь</Popup>
    </Marker>
  )
}

export default MyLocationMarker
