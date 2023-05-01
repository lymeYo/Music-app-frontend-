import React, { useState } from 'react'

import InputArea from '@/modules/CreateItem/SelectParameters/ImagesArea/InputArea'
import { TimageData } from '@/utils/images/type'
import { CloseIcon } from '@/ui/Icons'

type ImageItemProps = {
  src: string
  handleDelete: () => void
  isMainImage: boolean
}
const ImageItem = ({ src, handleDelete, isMainImage }: ImageItemProps) => (
  <li className='create__item-images group relative flex cursor-pointer items-center justify-center rounded-sm border object-cover'>
    <div
      onClick={handleDelete}
      className='absolute top-0 right-0 flex h-4 items-center justify-end bg-slate-200 opacity-0 duration-150 group-hover:opacity-80'
    >
      <CloseIcon extraClass='h-5 w-5' />
    </div>
    <img className='h-full w-full border object-cover' src={src} alt='' />
    {isMainImage ? (
      <span className='absolute -top-4 left-0 text-[12px] text-slate-400'>Основное фото</span>
    ) : null}
  </li>
)

type ImagesProps = {
  imagesData: TimageData[] | undefined
  handle: (data: TimageData[]) => void
  deleteImage: (ind: number) => void
  fileInputRef: any
}
const Images = ({ imagesData, handle, deleteImage, fileInputRef }: ImagesProps) => {
  const imagesList = imagesData
    ? imagesData.map((data, ind) => {
        const handleDelete = () => {
          deleteImage(ind)
        }
        return (
          <ImageItem
            key={ind}
            handleDelete={handleDelete}
            src={data.filePath}
            isMainImage={ind == 0}
          />
        )
      })
    : null

  return (
    <ul className='grid w-full max-w-[450px] grid-cols-[repeat(auto-fill,_100px)] gap-y-5 gap-x-1 sm:gap-x-3'>
      {imagesList}
      <InputArea fileInputRef={fileInputRef} handleImages={handle} />
    </ul>
  )
}

export default Images
