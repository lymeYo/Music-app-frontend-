'use client'

import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import Navigation from '@/modules/Header/Navigation'
import Search from '@/modules/Header/Search'
import Account from '@/modules/Header/Account'
import Create from '@/modules/Header/Create'
import Login from './Login'
import Auth from './Auth'
import { renderProfile, TprofileData } from '@/redux/slices/user'

type HeaderProps = {
  profileData: TprofileData | null
}
const Header = ({ profileData }: HeaderProps) => {
  // const res = await fetch('http://localhost:3004/posters')
  // const categories = await res.json()
  const dispatch = useDispatch()
  const [isLoginModalClose, setLoginModalClose] = useState(true)
  const handleLoginModalClose = () => {
    setLoginModalClose(prev => !prev)
  }

  if (profileData) {
    dispatch(renderProfile(profileData))
  }

  return (
    <>
      <div className='fixed top-0 z-[1100] flex h-[60px] w-full items-center bg-lMain px-2 text-sm text-zinc-50 md:h-[90px] md:px-5 md:text-lg'>
        <Navigation />
        <Search />
        <Account openLoginModal={handleLoginModalClose} />
        <Create openLoginModal={handleLoginModalClose} />
      </div>
      <Auth isClose={isLoginModalClose} handleModalClose={handleLoginModalClose} />
    </>
  )
}

export default Header
