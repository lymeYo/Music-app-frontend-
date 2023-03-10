import React from 'react'

import Header from '@/modules/Header'
import './global.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='light'>
      {/*
        <head /> will contain the modules returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head />
      <body className='dark:bg-dBgMain'>
        <div className='flex h-full flex-col'>
          <header>
            <Header />
          </header>

          <main className='flex-auto'>{children}</main>
          <footer>footer</footer>
        </div>
      </body>
    </html>
  )
}
