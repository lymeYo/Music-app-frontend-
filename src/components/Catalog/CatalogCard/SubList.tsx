import React from 'react'
import Link from 'next/link'

import { catalogData } from '@/utils/constants'

const SubListItem = ({ title, subtitle, subtitleHandler }) => {
  const handleClick = () => {
    subtitleHandler(title, subtitle)
  }
  return (
    <li
      onClick={handleClick}
      className='cursor-pointer py-1 hover:text-zinc-600 dark:hover:text-zinc-400'
    >
      {subtitle}
    </li>
  )
}

const SubList = ({ activeTitle, subtitleHandler, mobileDesign = false }) => {
  const data = catalogData.find((item) => item.name == activeTitle)?.subcatalog
  const list = data?.map((item, ind) => (
    <SubListItem
      subtitleHandler={subtitleHandler}
      key={ind}
      title={activeTitle}
      subtitle={item.name}
    />
  ))

  return (
    <>
      {mobileDesign ? (
        <ul className='block w-1/3 px-5 @sm:hidden'>{list}</ul>
      ) : (
        <ul className='hidden w-1/3 px-5 @sm:block'>{list}</ul>
      )}
    </>
  )
}

export default SubList
