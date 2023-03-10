import React, { useEffect } from 'react'

import { CloseIcon } from '@/ui/Icons'
import Arrow from '@/modules/Poster/Info/Gallery/Arrow'
import { srcOrder } from '@/modules/Poster/Info/Gallery/index'

type GalleryExtendedProps = {
  close: () => void
  handle: () => void
  switchImage: (type: 'left' | 'right') => void
  curImageOrder: number
  isExtended: boolean
}
const GalleryExtended = ({
  close,
  handle,
  switchImage,
  curImageOrder,
  isExtended
}: GalleryExtendedProps) => {
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (event.code == 'ArrowRight' || event.code == 'ArrowLeft') {
        const type = event.code == 'ArrowRight' ? 'right' : 'left'
        switchImage(type)
      }
      if (event.code == 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  }, [isExtended])

  return !isExtended ? null : (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-[1150] bg-zinc-800/80'>
      <div className='absolute left-1/2 top-1/2 h-full max-h-[960px] w-full max-w-[1280px] -translate-x-1/2 -translate-y-1/2 px-[45px]'>
        <Arrow isExtend onClick={switchImage} way={'left'} />
        <div className='flex h-full w-full items-center justify-center'>
          <img
            className='max-h-full w-full max-w-full object-contain'
            src={srcOrder[curImageOrder]}
            alt=''
          />
        </div>
        <Arrow isExtend onClick={switchImage} way={'right'} />
        <div onClick={handle} className='absolute right-0 top-0 cursor-pointer'>
          <CloseIcon extraClass='h-10 w-10 text-zinc-400' />
        </div>
      </div>
    </div>
  )
}

export default GalleryExtended
