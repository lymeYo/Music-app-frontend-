import React from 'react'

import { PhotoIcon } from '@/ui/Icons'

const Images = () => {
  const handleImage = (event) => {
    console.log(event.target.files)
  }

  return (
    <div className='create_parameters-box'>
      <span className='create_parameters-title'>Название инструмента</span>
      <div className='cursor-pointer border px-5 py-1 hover:bg-zinc-100'>
        <PhotoIcon extraClass='w-16 h-16' />
        <input type='file' name='file' onChange={handleImage} />
      </div>
    </div>
  )
}

export default Images
