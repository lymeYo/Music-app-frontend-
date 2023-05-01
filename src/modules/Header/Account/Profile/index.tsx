import React from 'react'
import { useSelector } from 'react-redux'

import UnsignedProfile from '@/modules/Header/Account/Profile/UnsignedProfile'
import SignedProfile from '@/modules/Header/Account/Profile/SignedProfile'
import { selectIsAuth } from '@/redux/slices/user'

const Profile = ({ openLoginModal }: { openLoginModal: () => void }) => {
  const isAuth: boolean = useSelector(selectIsAuth)

  if (isAuth) return <SignedProfile />
  else return <UnsignedProfile handleClick={openLoginModal} />
}

export default Profile
