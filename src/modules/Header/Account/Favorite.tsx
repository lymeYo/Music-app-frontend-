import React from 'react'
import { useSelector } from 'react-redux'

import { FavoriteIcon } from '@/ui/Icons'
import { selectIsAuth } from '@/redux/slices/user'

const Favorite = ({ openLoginModal }: { openLoginModal: () => void }) => {
  const isAuth: boolean = useSelector(selectIsAuth)
  const handleClick = () => {
    if (!isAuth) openLoginModal()
  }

  return (
    <div onClick={handleClick} tabIndex={1} className='relative flex cursor-pointer pr-1 md:pr-4'>
      <FavoriteIcon extraClass='cursor-pointer hover:text-lSecondary' />
      {isAuth ? (
        <div className='absolute -right-1 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500'>
          <span className='absolute text-xs text-zinc-50'>0</span>
        </div>
      ) : null}
    </div>
  )
}

export default Favorite
