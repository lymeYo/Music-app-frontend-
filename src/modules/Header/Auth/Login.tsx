import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { renderProfile, TprofileData } from '@/redux/slices/user'
import { TauthType, TtokenData } from './constants'
import FormArea from './FormArea'
import { mySetCookie } from '@/utils/constants'
import { isResponceError } from '@/pages/api/auth/login'

type LoginProps = {
  changeType: (type: TauthType) => void
  handleModalClose: () => void
}
export default function Login({ changeType, handleModalClose }: LoginProps) {
  const dispatch = useDispatch()
  const [errorMess, setErrorMess] = useState<string>('')

  const submit = async requestData => {
    try {
      const tokenRes = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(requestData)
      })

      const tokenData: TtokenData = await tokenRes.json()
      if (isResponceError(tokenRes, tokenData)) {
        setErrorMess(tokenData.message)
        return
      }
      const token: string = tokenData.token
      mySetCookie('token', token)
      const userDataRes = await fetch('http://localhost:3000/api/user/profile', {
        method: 'POST',
        body: token
      })
      const profileData: TprofileData = await userDataRes.json()
      if (isResponceError(userDataRes, profileData)) {
        setErrorMess(profileData.message)
        return
      }
      dispatch(renderProfile(profileData))
      handleModalClose()
    } catch (e) {
      console.log('error here')

      console.warn(e)
    }
  }

  return <FormArea type='login' changeType={changeType} submit={submit} errorMess={errorMess} />
}
