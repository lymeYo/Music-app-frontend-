import React from 'react'
import { useSelector } from 'react-redux'

import { ProfileIcon } from '@/ui/Icons'
import { selectProfile } from '@/redux/slices/user'

const SignedProfile = () => {
  const profileData = useSelector(selectProfile)

  return (
    <div className='flex cursor-pointer pl-1 md:pl-3'>
      <ProfileIcon extraClass='cursor-pointer hover:text-lSecondary' />
      <div className='ml-1 hidden hover:text-lSecondary lg:block'>{profileData?.username}</div>
    </div>
  )
}

export default SignedProfile
