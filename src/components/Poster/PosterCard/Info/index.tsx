import React from 'react'

import Title from '@/components/Poster/PosterCard/Info/Title'
import Description from '@/components/Poster/PosterCard/Info/Description'

const Info = () => {
  return (
    <div className='flex w-full flex-col text-base xl:text-lg'>
      <Title />
      <Description />
    </div>
  )
}

export default Info
