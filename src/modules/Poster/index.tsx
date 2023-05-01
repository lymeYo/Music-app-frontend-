'use client'

import React, { useMemo } from 'react'

import { useDispatch } from 'react-redux'

import Info from '@/modules/Poster/Info'
import Similar from '@/modules/Poster/Similar'
import { setGeneralPoster, TPoster } from '@/redux/slices/poster'
//yellow-500 lMain
type PosterProps = {
  data: TPoster
}
const Poster = ({ data }: PosterProps) => {
  const dispatch = useDispatch()
  useMemo(() => {
    dispatch(setGeneralPoster(data))
  }, [data])

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
