import React from 'react'

import Info from '@/modules/Poster/Info'
import Similar from '@/modules/Poster/Similar'
//yellow-500 lMain
const Poster = () => {
  return (
    <div className='my-container-wrapper justify-center'>
      <div className='my-container px-4 py-3'>
        <Info />
        <Similar />
      </div>
    </div>
  )
}

export default Poster
