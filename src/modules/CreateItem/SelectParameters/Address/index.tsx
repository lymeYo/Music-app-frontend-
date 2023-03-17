import React from 'react'

import MapArea from '@/modules/CreateItem/SelectParameters/Address/MapArea'
import PlaceSelection from '@/modules/CreateItem/SelectParameters/Address/PlaceSelection'

const Index = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold'>Место сделки</h2>
      <PlaceSelection />
      <MapArea />
    </div>
  )
}

export default Index
