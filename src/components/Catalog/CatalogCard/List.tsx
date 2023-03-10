import React from 'react'

import { catalogData } from '@/utils/constants'
import { ShotArrowIcon } from '@/ui/Icons'
import SubList from '@/components/Catalog/CatalogCard/SubList'

const ListItem = ({ title, activeTitle, setTitle }) => {
  const handleHover = () => {
    setTitle()
  }
  return (
    <li tabIndex={0} onMouseOver={handleHover} className={``}>
      <div
        className={
          'flex cursor-pointer justify-between py-1 pl-1 hover:bg-zinc-200 dark:hover:bg-dBgMain sm:pl-2 lg:py-3 ' +
          `${activeTitle == title ? 'bg-zinc-200 dark:bg-dBgMain' : ''}`
        }
      >
        <span>{title}</span>
        <ShotArrowIcon extraClass='h-5 w-5 -rotate-90' />
      </div>
      <div className={`${activeTitle == title ? '' : 'hidden'} `}>
        <SubList
          activeTitle={activeTitle}
          subtitleHandler={() => {
            console.log('close')
          }}
          mobileDesign={true}
        />
      </div>
    </li>
  )
}

const List = ({ activeTitle, setActiveTitle }) => {
  const items = catalogData.map((data: (typeof catalogData)[number], ind: number) => {
    const changeActiveTitle = () => {
      setActiveTitle(data.name)
    }
    return (
      <ListItem
        key={ind}
        title={data.name}
        activeTitle={activeTitle}
        setTitle={changeActiveTitle}
      />
    )
  })

  return <ul className='w-full @sm:w-2/3'>{items}</ul>
}

export default List
