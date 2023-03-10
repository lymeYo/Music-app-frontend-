import React from 'react'

import SortArea from '@/modules/PostersArea/Posters/SortArea'
import Filters from '@/modules/PostersArea/Posters/Filters'
import PosterCard from '@/components/Poster/PosterCard'
//768-1024 grid-columns-3
const Posters = ({ handleFiltersVisible }) => {
  return (
    <div className=''>
      <div className='flex justify-between pt-4 lg:justify-end'>
        <Filters handleFiltersVisible={handleFiltersVisible} />
        <SortArea />
      </div>
      <ul className='grid grid-cols-1 gap-3 sm:w-full md:grid-cols-2 lg:grid-cols-1'>
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

export default Posters
