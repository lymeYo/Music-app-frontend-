import React from 'react'

import { useSelector } from 'react-redux'

import PreviewImage from '@/modules/Poster/Info/Gallery/PreviewImage'
import Arrow from '@/modules/Poster/Info/Gallery/Arrow'
import { selectGeneralPoster } from '@/redux/slices/poster'

type GalleryDefaultProps = {
  switchImage: (type: 'left' | 'right') => void
  handleGalleryExtend: () => void
  curImageOrder: number
  handleImage: (order: number) => void
}
const GalleryDefault = ({
  switchImage,
  handleGalleryExtend,
  curImageOrder,
  handleImage
}: GalleryDefaultProps) => {
  const { images } = useSelector(selectGeneralPoster)

  const previewList = images.map((src, ind) => (
    <PreviewImage
      key={ind}
      ind={ind}
      src={src}
      curImageOrder={curImageOrder}
      handleImage={handleImage}
    />
  ))

  return (
    <div className='w-full'>
      <div className='relative h-full max-h-[480px] w-full max-w-[636px] border'>
        <Arrow onClick={switchImage} way={'left'} />
        <img
          onClick={handleGalleryExtend}
          className='h-[480px] w-full cursor-pointer object-contain'
          src={images[curImageOrder]}
          alt=''
        />
        <Arrow onClick={switchImage} way={'right'} />
      </div>
      <div className='flex gap-1 pt-5'>{previewList}</div>
    </div>
  )
}

export default GalleryDefault
