import React from 'react'

import { TauthType } from './constants'
import FormArea from './FormArea'

type RegistrationProps = {
  changeType: (type: TauthType) => void
}
export default function Registration({ changeType }: RegistrationProps) {
  const submit = async data => {
    const res = await fetch('http://localhost:3000/api/auth/registration', {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  return <FormArea type='registration' changeType={changeType} submit={submit} />
}
