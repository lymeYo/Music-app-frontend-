import React, { useState } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import * as L from 'leaflet'

const greenIcon = new L.Icon({
  iconUrl:
    'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF'
})

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
