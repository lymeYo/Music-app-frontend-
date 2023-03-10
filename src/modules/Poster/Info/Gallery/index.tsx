'use client'

import React, { useState } from 'react'

import GalleryDefault from '@/modules/Poster/Info/Gallery/GalleryDefault'
import GalleryExtended from '@/modules/Poster/Info/Gallery/GalleryExtended'

export const srcOrder = [
  'https://57.img.avito.st/image/1/1.pEPqkLa5CKrcOcqvrpqTKSEzDqBeswBoWzMKrlY5Aqg.Rf1tUSnM7FDMdSMvAyxqehqnf7l_TOI-b3A0Cznb3eY',
  'https://25.img.avito.st/image/1/1.pEP2kLa5CKrAOcqvsoaTKT0zDqBCswBoRzMKrko5Aqg.I8RFtDdNEYkKjbeO5gw2Alab8nyTK_pUm6iDA-_TufE',
  'https://48.img.avito.st/image/1/1.Qe3DqLa57QT1AS8BzaV2hwgL6w53i-XGcgvvAH8B5wY.gHGpSM-9cdOU81wqV-ev-mPCD5FdjYnBiQAgh9G5Mks',
  'https://i.pinimg.com/564x/5e/80/99/5e80992571ce1413c46d6b6ba2575d56.jpg',
  'https://i.pinimg.com/736x/72/27/1f/72271f9d8bd7a311f04758d886f1cb41.jpg'
]

const Gallery = () => {
  const [curImageOrder, setImageOrder] = useState(0)
  const [isGalleryExtended, extendGallery] = useState(false)

  const handleImage = (e) => {
    setImageOrder(e.target.dataset.order)
  }

  const handleGalleryExtend = () => {
    extendGallery((prev) => !prev)
  }

  const closeGalleryExtend = () => {
    extendGallery(false)
  }

  const switchImage = (type: 'left' | 'right') => {
    const unit = type == 'left' ? -1 : 1
    setImageOrder((prevOrder) => {
      if (prevOrder + unit > srcOrder.length - 1) return 0
      if (prevOrder + unit < 0) return srcOrder.length - 1
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
