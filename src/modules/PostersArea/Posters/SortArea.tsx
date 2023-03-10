import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { useOpenListener } from '@/utils/hooks'

const sortBySymbols = {
  new: 'По новизне',
  asc: 'По возрастанию',
  desc: 'По убыванию'
}

const ListItem = ({ type, close }: { type: keyof typeof sortBySymbols; close: any }) => (
  <Link onClick={close} href={`/?sort=${type}`}>
    <div className='py-2 hover:text-yellow-500'>{sortBySymbols[type]}</div>
  </Link>
)

const SortParametersList = ({ isOpen, close }) => {
  if (!isOpen) return null
  return (
    <div className='sortAreaListener absolute top-[50px] z-10 flex cursor-pointer flex-col bg-lMain px-4 py-2 text-zinc-50'>
      <ListItem close={close} type='new' />
      <ListItem close={close} type='asc' />
      <ListItem close={close} type='desc' />
    </div>
  )
}

const SortParameters = () => {
  const sortingType = useSearchParams().get('sort')

  const [isOpen, setOpen] = useOpenListener('sortAreaListener')
  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className='relative z-[1] flex h-full'>
      <span
        onClick={handleClick}
        className='sortAreaListener w-[170px] cursor-pointer border-b-2 border-b-gray-800 pl-4 text-lg dark:border-b-dBgSecondary dark:text-zinc-50 xl:hover:border-b-zinc-50'
      >
        {sortBySymbols[sortingType ?? 'new']}
      </span>
      <SortParametersList isOpen={isOpen} close={handleClick} />
    </div>
  )
}

export default SortParameters
