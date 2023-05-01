import React from 'react'
import { useSelector } from 'react-redux'

import Favorite from '@/modules/Header/Account/Favorite'
import Profile from '@/modules/Header/Account/Profile'
import { selectIsAuth, selectProfile } from '@/redux/slices/user'

const Account = ({ openLoginModal }: { openLoginModal: () => void }) => {
  return (
    <div className='flex lg:w-full lg:max-w-[300px]'>
      <Favorite openLoginModal={openLoginModal} />
      <Profile openLoginModal={openLoginModal} />
    </div>
  )
}

export default Account
