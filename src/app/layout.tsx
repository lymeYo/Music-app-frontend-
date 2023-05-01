import React from 'react'

import Header from '@/modules/Header'
import Providers from './providers'
import './global.css'
import { myGetCookies } from '@/utils/constants'

import { cookies } from 'next/headers'

import { useDispatch } from 'react-redux'

import { renderProfile, TprofileData } from '@/redux/slices/user'
import { isResponceError } from '@/pages/api/auth/login'

//{ children }: { children: React.ReactNode }
export default async function RootLayout(props) {
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value
  let profile: TprofileData | null = null
  if (token) {
    const userDataRes = await fetch('http://localhost:3000/api/user/profile', {
      method: 'POST',
      body: token
    })
    const profileInfo: TprofileData = await userDataRes.json()
    profile = profileInfo
    if (isResponceError(userDataRes, profileInfo)) {
      cookieStore.delete('token')
      profile = null
    }
  }

  return (
    <html lang='en' className='light'>
      {/*
        <head /> will contain the modules returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head />
      <body className='dark:bg-dBgMain'>
        <Providers>
          <div className='flex h-full flex-col'>
            <header>
              <Header profileData={profile} />
            </header>

            <main className='flex-auto'>{props.children}</main>
            <footer>footer</footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
