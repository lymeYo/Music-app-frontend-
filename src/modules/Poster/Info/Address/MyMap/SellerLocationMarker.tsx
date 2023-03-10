import React, { useState } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import * as L from 'leaflet'

const blueIcon = new L.Icon({
  iconUrl:
    'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF'
})

const SellerLocationMarker = () => {
  const position: any = [61.763645, 34.30633] //позицию доставать из редакса, сейчас у всех это Петрозаводск р-н Древлянка

  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      map.flyTo(position, map.getZoom())
    }
  })

  return (
    <Marker position={position} icon={blueIcon}>
      <Popup>Продавец здесь</Popup>
    </Marker>
  )
}

export default SellerLocationMarker
