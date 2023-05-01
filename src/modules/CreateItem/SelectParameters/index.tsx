import React, { useContext } from 'react'

import './style.css'
import Name from '@/modules/CreateItem/SelectParameters/Name'
import Condition from '@/modules/CreateItem/SelectParameters/Condition'
import Address from '@/modules/CreateItem/SelectParameters/Address'
import Description from './Description'
import ImagesArea from './ImagesArea'
import { PosterStateContext } from '..'
import Price from './Price'

type SelectParametersProps = {
  handleButtonDisabled: (value: string) => void
}
const SelectParameters = ({ handleButtonDisabled }: SelectParametersProps) => {
  return (
    <div>
      <Name handleButtonDisabled={handleButtonDisabled} />
      <Price />
      <Description />
      <Condition />
      <ImagesArea />
      <Address />
    </div>
  )
}

export default SelectParameters
