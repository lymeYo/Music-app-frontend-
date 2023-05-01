import React from 'react'

import { ProfileIcon } from '@/ui/Icons'

const UnsignedProfile = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div onClick={handleClick} className='flex cursor-pointer pl-1 md:pl-3'>
      <ProfileIcon extraClass='cursor-pointer hover:text-lSecondary' />
      <div className='ml-1 hidden hover:text-lSecondary lg:block'>Войти</div>
    </div>
  )
}

export default UnsignedProfile
