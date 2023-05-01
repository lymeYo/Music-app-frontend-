import React, { useState } from 'react'

import { CloseIcon } from '@/ui/Icons'
import FormArea from './FormArea'
import { TauthType } from './constants'
import Login from './Login'
import Registration from './Registration'

const ImageArea = () => (
  <div className='hidden justify-end md:flex md:w-1/2 lg:w-2/3'>
    <img
      className='w-full max-w-[500px] rounded-2xl object-contain opacity-80'
      src='https://i.pinimg.com/564x/18/89/2b/18892bbe6fe2fc589941c0e85954b31d.jpg'
    />
  </div>
)

type AuthProps = {
  isClose: boolean
  handleModalClose: () => void
}

export default function Auth({ isClose, handleModalClose }: AuthProps) {
  const [authType, setAuthType] = useState<TauthType>('login')

  const changeAuthType = (type: TauthType) => {
    setAuthType(type)
  }

  return (
    <div
      className={
        'fixed top-0 right-0 bottom-0 left-0 z-[10000] bg-slate-100/30 ' +
        `${isClose ? 'hidden' : ''}`
      }
    >
      <div className='absolute top-1/2 left-1/2 w-full max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-lMain bg-white p-10 lg:p-16'>
        <div className='flex justify-end'>
          {authType == 'login' ? (
            <Login handleModalClose={handleModalClose} changeType={changeAuthType} />
          ) : (
            <Registration changeType={changeAuthType} />
          )}
          <ImageArea />
        </div>
        <div onClick={handleModalClose} className='absolute top-3 right-3 cursor-pointer'>
          <CloseIcon extraClass='text-slate-500 ' />
        </div>
      </div>
    </div>
  )
}
