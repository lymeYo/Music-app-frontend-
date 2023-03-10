import React from 'react'

import UnsignedProfile from '@/modules/Header/Account/Profile/UnsignedProfile'
import SignedProfile from '@/modules/Header/Account/Profile/SignedProfile'

const Profile = ({ isAuth }) => {
  if (isAuth) return <SignedProfile />
  else return <UnsignedProfile />
}

export default Profile
