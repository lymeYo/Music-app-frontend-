import React, { useState } from 'react'

import Link from 'next/link'

import { FavoriteIcon } from '@/ui/Icons'

const Title = ({ value }: { value: string }) => {
  const [isFavorite, setFavorite] = useState(false)
  const handleFavorite = () => {
    setFavorite(prev => !prev)
  }

  return (
    <div className='flex justify-between'>
      <Link href='/posters/1'>
        <span className='cursor-pointer text-2xl text-lMain dark:text-zinc-50'>{value}</span>
      </Link>
      <FavoriteIcon
        extraClass={
          'h-7 w-7 cursor-pointer text-lMain dark:text-zinc-300 duration-200 hover:translate-y-0.5 ' +
          `${isFavorite ? 'fill-lMain dark:fill-zinc-300' : ''}`
        }
        onClick={handleFavorite}
      />
    </div>
  )
}

export default Title
