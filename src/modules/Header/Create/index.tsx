import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

import AddIcon from '@/ui/Icons/AddIcon'
import { selectIsAuth } from '@/redux/slices/user'

const Create = ({ openLoginModal }: { openLoginModal: () => void }) => {
  const router = useRouter()
  const isAuth: boolean = useSelector(selectIsAuth)
  const handleClick = () => {
    if (isAuth) {
      router.push('/create')
    } else {
      openLoginModal()
    }
  }

  return (
    <div className='ml-4 lg:w-[160px]'>
      <div
        onClick={handleClick}
        className='flex cursor-pointer items-center justify-between rounded-lg bg-lSecondary py-1 px-2 duration-500 lg:w-[150px] lg:pb-2 lg:hover:w-[160px]'
      >
        <AddIcon />
        <span className='hidden lg:block'>Разместить</span>
      </div>
    </div>
  )
}

export default Create
