import React from 'react'

import PosterCard from '@/components/Poster/PosterCard'

const Index = () => {
  return (
    <div className='pt-5'>
      <div className='text-xl font-bold'>Похожие объявления</div>
      <ul className='grid grid-cols-[repeat(auto-fill,_300px)] justify-center gap-2'>
        <li>
          <PosterCard />
        </li>
        <li>
          <PosterCard />
        </li>
        <li>
          <PosterCard />
        </li>
        <li>
          <PosterCard />
        </li>
        <li>
          <PosterCard />
        </li>
      </ul>
    </div>
  )
}

export default Index
