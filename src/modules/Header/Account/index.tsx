import React from 'react'

import Favorite from '@/modules/Header/Account/Favorite'
import Profile from '@/modules/Header/Account/Profile'

const Account = () => {
  const isAuth = true

  return (
    <div className='flex lg:w-full lg:max-w-[300px]'>
      <Favorite isAuth={isAuth} />
      <Profile isAuth={isAuth} />
    </div>
  )
}

export default Account
