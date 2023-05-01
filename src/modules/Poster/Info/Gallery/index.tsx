'use client'

import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import GalleryDefault from '@/modules/Poster/Info/Gallery/GalleryDefault'
import GalleryExtended from '@/modules/Poster/Info/Gallery/GalleryExtended'
import { selectGeneralPoster, TPoster } from '@/redux/slices/poster'

const Gallery = () => {
  const { images } = useSelector(selectGeneralPoster)
  const [curImageOrder, setImageOrder] = useState<number>(0)
  const [isGalleryExtended, extendGallery] = useState<boolean>(false)

  const handleImage = (order: number) => {
    setImageOrder(order)
  }

  const handleGalleryExtend = () => {
    extendGallery(prev => !prev)
  }

  const closeGalleryExtend = () => {
    extendGallery(false)
  }

  const switchImage = (type: 'left' | 'right') => {
    const unit = type == 'left' ? -1 : 1
    setImageOrder(prevOrder => {
      if (prevOrder + unit > images.length - 1) return 0
      if (prevOrder + unit < 0) return images.length - 1
      return prevOrder + unit
    })
  }

  return (
    <div className='mt-5'>
      <GalleryDefault
        curImageOrder={curImageOrder}
        handleGalleryExtend={handleGalleryExtend}
        switchImage={switchImage}
        handleImage={handleImage}
      />
      <GalleryExtended
        close={closeGalleryExtend}
        handle={handleGalleryExtend}
        switchImage={switchImage}
        curImageOrder={curImageOrder}
        isExtended={isGalleryExtended}
      />
    </div>
  )
}

export default Gallery
