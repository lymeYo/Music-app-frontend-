import React from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'

import { blueIcon } from '@/ui/leaflet/icons'

type LocationMarkerProps = {
  lat: number
  lon: number
  popupMess: string
  isMapFly?: boolean
}

const LocationMarker = ({ lat, lon, popupMess, isMapFly }: LocationMarkerProps) => {
  // const position: any = [61.763645, 34.30633] //позицию доставать из редакса, сейчас у всех это Петрозаводск р-н Древлянка
  const position: [number, number] = [lat, lon] //позицию доставать из редакса, сейчас у всех это Петрозаводск р-н Древлянка

  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      map.flyTo(position, map.getZoom())
    }
  })

  if (isMapFly) map.flyTo(position, map.getZoom())

  return (
    <Marker position={position} icon={blueIcon}>
      <Popup>{popupMess}</Popup>
    </Marker>
  )
}

export default LocationMarker
