'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import Posters from '@/modules/PostersArea/Posters'
import Navbar from '@/modules/PostersArea/Navbar'
import { catalogData } from '@/utils/constants'

type PostersAreaProps = {
  catTitle: string
  catSubTitle: string
}

const PostersArea = ({ catTitle, catSubTitle }: PostersAreaProps) => {
  const router = useRouter()
  const [isFiltersOpen, filtersOpen] = useState(false)

  const handleFiltersVisible = () => {
    filtersOpen((prev) => {
      if (!prev == true) {
        // @ts-ignore
        document.body.style = 'overflow: hidden'
      }
      if (!prev == false) {
        // @ts-ignore
        document.body.style = 'overflow: auto'
      }
      return !prev
    })
  }
  try {
    const curCategories = catalogData
      .find((item) => item.name == catTitle)
      ?.subcatalog.find((item) => item.name == catSubTitle)
    if (!curCategories) throw new Error() //сделал такую реализацию как затычку запроса с бэкенда

    return (
      <div className='flex h-full w-full px-3 dark:bg-dBgMain xl:px-8'>
        <div
          className={`fixed bottom-0 left-0 top-[60px] right-0 z-[10] mr-16 w-full overflow-y-scroll bg-zinc-200 px-8 md:top-[90px] lg:relative lg:left-auto lg:right-auto lg:top-auto lg:bottom-auto lg:mt-3 lg:w-1/4 lg:overflow-auto lg:bg-zinc-50 lg:px-0 ${
            isFiltersOpen ? null : 'hidden'
          } dark:bg-dBgMain lg:block`}
        >
          <Navbar handleFiltersVisible={handleFiltersVisible} categories={curCategories} />
        </div>

        <div className='w-full lg:w-3/4'>
          <Posters handleFiltersVisible={handleFiltersVisible} />
        </div>
      </div>
    )
  } catch (e) {
    console.warn(e, 'error')
    router.push('/')
  }
  return null
}

export default PostersArea
