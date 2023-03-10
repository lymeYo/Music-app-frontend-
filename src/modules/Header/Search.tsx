import React from 'react'

import { SearchIcon } from '@/ui/Icons'

const Search = () => {
  return (
    <div className='flex w-1/3 flex-auto justify-center px-2 md:px-5'>
      <div className='relative h-full w-full max-w-[500px] text-lg'>
        <input
          className='w-full rounded-2xl bg-zinc-50 p-1 pr-8 text-zinc-900 dark:bg-dBgSecondary dark:text-zinc-50 sm:pr-16 md:p-3 md:pr-32'
          placeholder='Скрипка'
          type='text'
        />
        <button className='absolute right-0 top-0 hidden h-full w-[60px] rounded-2xl bg-lSecondary text-sm text-zinc-50 duration-500 sm:block md:w-[120px] md:text-lg md:hover:w-[150px]'>
          <div>Поиск</div>
        </button>
        <div className='absolute right-0 top-1 right-1 text-lSecondary sm:hidden'>
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}

export default Search
