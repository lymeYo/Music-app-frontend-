import { useContext, useRef } from 'react'

import { PosterStateContext } from '..'

const Price = () => {
  const posterState = useContext(PosterStateContext)
  const priceRef = useRef<HTMLInputElement>(null)
  const handleChange = () => {
    if (priceRef.current) posterState.price = +priceRef.current.value
  }

  return (
    <div className='create_parameters-box items-start'>
      <span className='create_parameters-title'>Цена</span>
      <input
        onChange={handleChange}
        ref={priceRef}
        className='create_parameters-area px-4'
        type='text'
      />
    </div>
  )
}

export default Price
