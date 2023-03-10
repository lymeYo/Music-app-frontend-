'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { HomeIcon } from '@/ui/Icons'

const Home = () => {
  const router = useRouter()
  const directHomePage = () => {
    router.push('/')
  }

  return (
    <div className='hidden sm:block' onClick={directHomePage}>
      <HomeIcon extraClass='mr-2 cursor-pointer hover:text-lSecondary md:mr-5' />
    </div>
  )
}

export default Home
