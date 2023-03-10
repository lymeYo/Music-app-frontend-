import React from 'react'

import './style.css'
import Name from '@/modules/CreateItem/SelectParameters/Name'
import Condition from '@/modules/CreateItem/SelectParameters/Condition'
import Images from '@/modules/CreateItem/SelectParameters/Images'
import { TItemState } from '@/modules/CreateItem/constants'

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
      <Images />
    </div>
  )
}

export default SelectParameters
