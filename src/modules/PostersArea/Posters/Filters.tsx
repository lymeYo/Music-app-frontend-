import React from 'react'

import { ParametersIcon } from '@/ui/Icons'

const Filters = ({ handleFiltersVisible }) => {
  return (
    <div onClick={handleFiltersVisible} className='block cursor-pointer lg:hidden'>
      <ParametersIcon />
    </div>
  )
}

export default Filters
