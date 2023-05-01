import React, { useCallback, useContext, useState } from 'react'

import MapArea from '@/modules/CreateItem/SelectParameters/Address/MapArea'
import PlaceSelection from '@/modules/CreateItem/SelectParameters/Address/PlaceSelection'
import { PosterStateContext } from '../..'

const initialLatLon: [number, number] = [61.763645, 34.30633]

const Index = () => {
  const posterState = useContext(PosterStateContext)
  const [latLon, setLatLon] = useState<[number, number]>(initialLatLon)
  const [isMapFly, setMapFly] = useState<boolean>(false)
  const handleLocation = (locationStringLocale: string, lat: number, lon: number) => {
    setLatLon([lat, lon])
    posterState.location = locationStringLocale + ';' + lat + ';' + lon
  }
  const handleIsMapFly = (isFly: boolean) => {
    setMapFly(isFly)
  }

  return (
    <div>
      <h2 className='text-xl font-bold md:text-2xl'>Место сделки</h2>
      <PlaceSelection handleIsMapFly={handleIsMapFly} handleLocation={handleLocation} />
      <MapArea isMapFly={isMapFly} latLon={latLon} />
    </div>
  )
}

export default Index
