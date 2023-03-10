'use client'

import React from 'react'

import ImageArea from '@/components/Poster/PosterCard/ImageArea'
import Info from '@/components/Poster/PosterCard/Info'

const PosterCard = () => {
  return (
    <div className='mt-8 min-w-[290px] rounded-2xl border border-2 border-zinc-500 @container dark:border-zinc-300  dark:bg-dBgSecondary dark:text-zinc-50'>
      <div className='flex flex-col p-3 text-lg @lg:p-5 @xl:flex-row'>
        <ImageArea />
        <Info />
      </div>
    </div>
  )
}

export default PosterCard
