import React from 'react'

import Address from '@/modules/Poster/Info/Address'
import { FavoriteIcon } from '@/ui/Icons'
import Gallery from '@/modules/Poster/Info/Gallery'
import Description from '@/modules/Poster/Info/Description'
import Footer from '@/modules/Poster/Info/Footer'

const Main = () => {
  return (
    <div className='flex justify-between'>
      <div className=''>
        <h2 className='text-3xl font-bold'>Электронное фортепиано Casio Privia PX-130</h2>
        <Gallery />
      </div>
      <div className='flex flex-col justify-start'>
        <div className='mb-5 flex'>
          <span className='mr-5 text-3xl font-bold'>35 990 ₽</span>
          <div>
            <FavoriteIcon extraClass='h-8 w-8 cursor-pointer hover:text-lMain' />
          </div>
        </div>
        <button className='rounded-md bg-lMain px-3 py-2 text-zinc-50 lg:hover:bg-lMain'>
          Написать сообщение
        </button>
      </div>
    </div>
  )
}

const Info = () => {
  return (
    <div className='dark:text-zinc-50'>
      <Main />
      <Address />
      <Description />
      <Footer />
    </div>
  )
}

export default Info
