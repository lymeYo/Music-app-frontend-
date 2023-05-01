import { selectGeneralPoster } from '@/redux/slices/poster'
import React from 'react'
import { useSelector } from 'react-redux'

const Description = () => {
  const { description } = useSelector(selectGeneralPoster)
  return (
    <div className='py-5'>
      <div className='text-2xl font-bold'>Описание</div>
      <div className='pt-3'>{description}</div>
    </div>
  )
}

export default Description
