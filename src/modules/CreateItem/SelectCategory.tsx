import React from 'react'

import CatalogCard from '@/components/Catalog/CatalogCard'

const SelectCategory = ({ handle }) => {
  const handleClick = (title: string, subtitle: string) => {
    handle(title, subtitle)
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
