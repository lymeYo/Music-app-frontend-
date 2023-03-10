import React from 'react'

import PreviewImage from '@/modules/Poster/Info/Gallery/PreviewImage'
import Arrow from '@/modules/Poster/Info/Gallery/Arrow'
import { srcOrder } from '@/modules/Poster/Info/Gallery/index'

const GalleryDefault = ({ switchImage, handleGalleryExtend, curImageOrder, handleImage }) => {
  const previewList = srcOrder.map((src, ind) => (
    <PreviewImage
      key={ind}
      ind={ind}
      src={src}
      curImageOrder={curImageOrder}
      handleImage={handleImage}
    />
  ))

  return (
    <div>
      <div className={'relative h-full max-h-[480px] w-full max-w-[636px] border'}>
        <Arrow onClick={switchImage} way={'left'} />
        <img
          onClick={handleGalleryExtend}
          className='h-[480px] w-full cursor-pointer object-contain'
          src={srcOrder[curImageOrder]}
          alt=''
        />
        <Arrow onClick={switchImage} way={'right'} />
      </div>
      <div className='flex gap-1 pt-5'>{previewList}</div>
    </div>
  )
}

export default GalleryDefault
