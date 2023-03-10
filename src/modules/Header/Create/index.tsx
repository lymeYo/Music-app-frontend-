import React from 'react'
import Link from 'next/link'

import AddIcon from '@/ui/Icons/AddIcon'

const Create = () => {
  return (
    <div className='ml-4 lg:w-[160px]'>
      <Link href='/create'>
        <div className='flex cursor-pointer items-center justify-between rounded-lg bg-lSecondary py-1 px-2 duration-500 lg:w-[150px] lg:pb-2 lg:hover:w-[160px]'>
          <AddIcon />
          <span className='hidden lg:block'>Разместить</span>
        </div>
      </Link>
    </div>
  )
}

export default Create
