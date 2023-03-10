'use client'

import React from 'react'
import MyMap from '@/modules/Poster/Info/Address/MyMap'

const Address = () => {
  return (
    <div className='inline-block py-5'>
      <div className='text-2xl font-bold'>Адрес</div>
      <div className='pt-3'>
        Республика Карелия, Петрозаводский г.о., Петрозаводск, ул. Зайцева р-н Октябрьский
      </div>
      <MyMap />
    </div>
  )
}

export default Address
