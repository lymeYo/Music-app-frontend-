'use client'

import React from 'react'

import ImageArea from '@/components/Poster/PosterCard/ImageArea'
import Info from '@/components/Poster/PosterCard/Info'
import { TPoster } from '@/redux/slices/poster'

type PosterCardProps = {
  data: TPoster
}
const PosterCard = ({ data }: PosterCardProps) => (
  <div className='mt-8 h-full min-w-[290px] rounded-2xl border border-2 border-zinc-500 @container dark:border-zinc-300  dark:bg-dBgSecondary dark:text-zinc-50'>
    <div className='flex h-full flex-1 flex-col p-3 text-lg @lg:p-5 @xl:flex-row'>
      <ImageArea id={data.id} paths={data.images} />
      <Info
        title={data.name}
        description={data.description}
        price={data.price}
        location={data.location}
        createdAt={data.createdAt}
      />
    </div>
  </div>
)

export default PosterCard
