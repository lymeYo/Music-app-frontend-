'use client'

import React, { useState } from 'react'

import PriceSelection from '@/modules/PostersArea/Navbar/PriceSelection'
import PlaceSelection from '@/modules/PostersArea/Navbar/PlaceSelection'
import { CheckIcon, CloseIcon } from '@/ui/Icons'

const ItemLine = ({ item }) => {
  const [isSelected, select] = useState<boolean>(false)
  const handleClick = () => {
    select((prev) => !prev)
  }

  return (
    <li className='flex py-1'>
      <button
        onClick={handleClick}
        className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-md ${
          isSelected ? 'bg-slate-600 dark:bg-slate-500' : 'bg-slate-400 hover:bg-slate-500'
        }`}
      >
        {isSelected ? <CheckIcon extraClass='h-4 w-4 text-zinc-50' strokeWidth={3} /> : null}
      </button>
      <span className='mx-3 flex-auto'>{item.name}</span>
      <span>{item.amount}</span>
    </li>
  )
}

const NavItem = ({ subtitles }) => {
  const list = subtitles.map((item, ind) => <ItemLine key={ind} item={item} />)

  return (
    <div>
      <div className='flex justify-between'>
        <span className='cursor-pointer text-zinc-500 hover:text-lMain'>Reset</span>
      </div>
      <ul>{list}</ul>
    </div>
  )
}

const ListElement = ({ children, title, isOptions = false }) => (
  <li className='border-b-2 py-5 dark:border-dBgSecondary dark:text-zinc-50'>
    {isOptions ? (
      <div className='flex justify-between'>
        <div className='mb-2 text-xl text-lMain dark:text-zinc-50'>{title}</div>
        <span className='cursor-pointer text-zinc-500 hover:text-lMain dark:text-zinc-100 hover:dark:text-zinc-400'>
          Reset
        </span>
      </div>
    ) : (
      <div className='mb-2 text-xl text-lMain dark:text-zinc-50'>{title}</div>
    )}
    {children}
  </li>
)

const Navbar = ({ categories, handleFiltersVisible }) => {
  const list = [
    <ListElement key={-2} title='Город'>
      <PlaceSelection />
    </ListElement>,

    <ListElement key={-1} title='Цена'>
      <PriceSelection min={1000} max={100000} />
    </ListElement>,

    categories.parameters.map((cat, ind) => (
      <ListElement key={ind} title={cat.name} isOptions={true}>
        <NavItem subtitles={cat.list} />
      </ListElement>
    ))
  ]

  return (
    <div className='relative dark:bg-dBgMain lg:fixed lg:left-0 lg:ml-8 lg:w-1/4'>
      <ul>{list}</ul>
      <div onClick={handleFiltersVisible} className='absolute top-3 -right-4 lg:hidden'>
        <CloseIcon />
      </div>
    </div>
  )
}

export default Navbar
