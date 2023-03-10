import React from 'react'

import Catalog from '@/modules/Header/Navigation/Catalog'
import Home from '@/modules/Header/Navigation/Home'

const Navigation = () => {
  return (
    <div className='flex items-center'>
      <Home />
      <Catalog />
    </div>
  )
}

export default Navigation
