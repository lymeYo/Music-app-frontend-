import React from 'react'

import { FavoriteIcon } from '@/ui/Icons'

const Favorite = ({ isAuth }) => {
  return (
    <div tabIndex={1} className='relative flex cursor-pointer pr-1 md:pr-4'>
      <FavoriteIcon extraClass='cursor-pointer hover:text-lSecondary' />
      {isAuth ? (
        <div className='absolute -right-1 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500'>
          <span className='absolute text-xs text-zinc-50'>0</span>
        </div>
      ) : (
        <div className='ml-1 hidden hover:text-lSecondary lg:block'>Войти</div>
      )}
    </div>
  )
}

export default Favorite
