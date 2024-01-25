import React, { useEffect, useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import SortArea from '@/modules/PostersArea/Posters/SortArea'
import Filters from '@/modules/PostersArea/Posters/Filters'
import PosterCard from '@/components/Poster/PosterCard'
import {
  addMainPagePosters,
  selectMainPosters,
  selectMainPostersPage,
  TPoster
} from '@/redux/slices/poster'
import { isResponceError } from '@/pages/api/auth/login'

const isScrollFinished = (): boolean => {
  return (
    document.scrollingElement?.scrollHeight ==
    Math.floor(window.innerHeight + document.documentElement.scrollTop)
  )
}

const Posters = ({ handleFiltersVisible }) => {
  const dispatch = useDispatch()
  const scrollableList = useRef<HTMLDivElement>(null)
  const mainPostersPage: number = useSelector(selectMainPostersPage)
  const posters: TPoster[] = useSelector(selectMainPosters)

  const list = posters.map((data: TPoster, ind: number) => (
    <li key={ind}>
      <PosterCard data={data} />
    </li>
  ))

  useEffect(() => {
    const handleScroll = async () => {
      if (isScrollFinished()) {
        let mainPosters: TPoster[] = []
        const reqBody = {
          page: mainPostersPage
        }
        const res = await fetch('http://localhost:3000/api/poster/getAll', {
          method: 'POST',
          body: JSON.stringify(reqBody)
        })
        const postersData: TPoster[] = await res.json()
        if (isResponceError(res, postersData)) {
          mainPosters = []
        } else {
          mainPosters = postersData
        }
        dispatch(addMainPagePosters(mainPosters))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollableList, mainPostersPage])

  return (
    <div ref={scrollableList}>
      <div className='flex justify-between pt-4 lg:justify-end'>
        <Filters handleFiltersVisible={handleFiltersVisible} />
        <SortArea />
      </div>
      <ul className='grid grid-cols-1 gap-3 sm:w-full md:grid-cols-2 lg:grid-cols-1'>{list}</ul>
    </div>
  )
}
// lorem ipsum
export default Posters
