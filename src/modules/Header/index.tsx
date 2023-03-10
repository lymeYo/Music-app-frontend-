import React from 'react'

import Navigation from '@/modules/Header/Navigation'
import Search from '@/modules/Header/Search'
import Account from '@/modules/Header/Account'
import Create from '@/modules/Header/Create'

const Header: any = async () => {
  // const res = await fetch('http://localhost:3004/posters')
  // const categories = await res.json()

  return (
    <div className='fixed top-0 z-[1100] flex h-[60px] w-full items-center bg-lMain px-2 text-sm text-zinc-50 md:h-[90px] md:px-5 md:text-lg'>
      <Navigation />
      <Search />
      <Account />
      <Create />
    </div>
  )
}

export default Header
