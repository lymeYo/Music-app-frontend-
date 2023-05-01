import React from 'react'

import { useSelector } from 'react-redux'

import SortArea from '@/modules/PostersArea/Posters/SortArea'
import Filters from '@/modules/PostersArea/Posters/Filters'
import PosterCard from '@/components/Poster/PosterCard'
import { selectMainPagePosters, TPoster } from '@/redux/slices/poster'
//768-1024 grid-columns-3
const Posters = ({ handleFiltersVisible }) => {
  const posters: TPoster[] = useSelector(selectMainPagePosters)

  const list = posters.map((data: TPoster, ind: number) => (
    <li key={ind}>
      <PosterCard data={data} />
    </li>
  ))

  return (
    <div className=''>
      <div className='flex justify-between pt-4 lg:justify-end'>
        <Filters handleFiltersVisible={handleFiltersVisible} />
        <SortArea />
      </div>
      <ul className='grid grid-cols-1 gap-3 sm:w-full md:grid-cols-2 lg:grid-cols-1'>{list}</ul>
    </div>
  )
}

export default Posters
