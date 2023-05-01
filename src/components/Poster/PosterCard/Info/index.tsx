import React from 'react'

import Title from '@/components/Poster/PosterCard/Info/Title'
import DescriptionArea from '@/components/Poster/PosterCard/Info/DescriptionArea'

type InfoProps = {
  title: string
  description: string
  price: number | null
  location: string
  createdAt: any
}
const Info = ({ title, description, price, location, createdAt }: InfoProps) => {
  return (
    <div className='flex w-full flex-col text-base xl:text-lg'>
      <Title value={title} />
      <DescriptionArea
        description={description}
        price={price}
        location={location}
        createdAt={createdAt}
      />
    </div>
  )
}

export default Info
