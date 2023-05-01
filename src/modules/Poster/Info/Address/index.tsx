'use client'

import React from 'react'

import { useSelector } from 'react-redux'

import MyMap from '@/modules/Poster/Info/Address/MyMap'
import { selectGeneralPoster } from '@/redux/slices/poster'

const Address = () => {
  const { location } = useSelector(selectGeneralPoster)

  const locationString = location.split(';')[0]

  return (
    <div className='inline-block py-5'>
      {location ? (
        <>
          <div className='text-2xl font-bold'>Адрес</div>
          <div className='pt-3'>{locationString}</div>
          <MyMap />
        </>
      ) : null}
    </div>
  )
}

export default Address
