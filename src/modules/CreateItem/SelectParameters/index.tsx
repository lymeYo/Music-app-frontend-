import React from 'react'

import './style.css'
import Name from '@/modules/CreateItem/SelectParameters/Name'
import Condition from '@/modules/CreateItem/SelectParameters/Condition'
import ImagesArea from '@/modules/CreateItem/SelectParameters/ImagesArea'
import { TItemState } from '@/modules/CreateItem/constants'
import Address from '@/modules/CreateItem/SelectParameters/Address'

const SelectParameters = ({ state }: { state: TItemState }) => {
  const setName = (name: string) => {
    state.name = name
  }
  const setState = (isNew: boolean) => {
    state.state = isNew ? 'new' : 'used'
  }

  return (
    <div>
      <Name setName={setName} />
      <Condition setState={setState} />
      <ImagesArea />
      <Address />
    </div>
  )
}

export default SelectParameters
