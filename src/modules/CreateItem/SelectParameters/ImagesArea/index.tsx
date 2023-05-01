import React, { useCallback, useContext, useRef, useState } from 'react'

import Images from '@/modules/CreateItem/SelectParameters/ImagesArea/Images'
import { TimageData } from '@/utils/images/type'
import './style.css'
import { PosterStateContext } from '../..'

const SectionName = ({ quantity }: { quantity: number }) => (
  <div className='create_parameters-title text-z flex flex-col self-start'>
    <span className='text-zinc-500'>Фотографии</span>
    <span className='text-[12px] text-zinc-400'>{quantity} из 7</span>
  </div>
)

const ImagesArea = () => {
  const posterState = useContext(PosterStateContext)
  const maxImages = 7
  const [imagesData, setImagesData] = useState<TimageData[]>([])
  const handleImagesData = useCallback(
    (images: TimageData[]) => {
      setImagesData(prevImages => {
        let newImagesRow: TimageData[]
        if (!prevImages.length) {
          newImagesRow = images.slice(0, maxImages)
          posterState.images = newImagesRow.map(data => data.filePath)
          return newImagesRow
        }
        const prevImagesQuality = prevImages.length
        const imagesQuality = images.length

        if (imagesQuality >= maxImages) return images.slice(0, maxImages)

        if (prevImagesQuality + imagesQuality > maxImages) {
          const diff = maxImages - imagesQuality
          newImagesRow = [...prevImages.slice(0, diff), ...images]
        } else {
          newImagesRow = prevImages.concat(images)
        }
        posterState.images = newImagesRow.map(data => data.filePath)
        return newImagesRow
      })
    },
    [setImagesData]
  )

  const deleteImageData = (deletedImageInd: number) => {
    if (fileInputRef.current?.value) fileInputRef.current.value = '' //чтобы можно было добавить удаленную фотографию снова

    setImagesData(prevImages => {
      return prevImages?.filter((_, imageInd) => imageInd != deletedImageInd)
    })
  }

  const fileInputRef = useRef<HTMLInputElement>(null)

  return (
    <div className='create_parameters-box'>
      <SectionName quantity={imagesData?.length ?? 0} />
      <Images
        fileInputRef={fileInputRef}
        deleteImage={deleteImageData}
        handle={handleImagesData}
        imagesData={imagesData}
      />
    </div>
  )
}

export default ImagesArea
