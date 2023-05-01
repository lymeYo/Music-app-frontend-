import React, { useContext } from 'react'

import CatalogCard from '@/components/Catalog/CatalogCard'
import { PosterStateContext } from '..'

type SelectCategoryProps = {
  nextSection: () => void
}
const SelectCategory = ({ nextSection }: SelectCategoryProps) => {
  const posterState = useContext(PosterStateContext)

  const handleClick = (title: string, subtitle: string) => {
    posterState.category = title + '; ' + subtitle
    nextSection()
  }
  return (
    <div>
      <h2 className='text-3xl text-lMain'>Выберете категорию</h2>
      <div className='mt-5'>
        <CatalogCard subtitleHandler={handleClick} />
      </div>
    </div>
  )
}

export default SelectCategory
