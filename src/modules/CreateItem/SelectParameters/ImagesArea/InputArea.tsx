import React, { ChangeEventHandler, memo, useRef } from 'react'

import { PhotoIcon } from '@/ui/Icons'
import { TimageData } from '@/utils/images/type'

const InputArea = ({
  handleImages,
  fileInputRef
}: {
  fileInputRef: any
  handleImages: (data: TimageData[]) => void
}) => {
  // const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = async event => {
    try {
      if (!event.target.files) return
      const files = Array.from(event.target.files)

      const formData = new FormData()
      files.forEach((file: any) => {
        formData.append('images', file)
      })

      const res = await fetch('http://localhost:5000/upload/image', {
        method: 'POST',
        body: formData
      })
      const images = await res.json()
      handleImages(images)
    } catch (error) {
      console.warn(error)
    }
  }

  const clickImitate = () => {
    fileInputRef?.current?.click()
  }

  return (
    <li className='create__item-images flex cursor-pointer items-center justify-center rounded-sm border px-5 py-1 hover:bg-zinc-100'>
      <div onClick={clickImitate}>
        <PhotoIcon extraClass='w-16 h-16' />
      </div>
      <input
        ref={fileInputRef}
        className='absolute -z-30 hidden h-0 w-0'
        type='file'
        name='file'
        onChange={handleChange}
        multiple
      />
    </li>
  )
}

export default memo(InputArea)
