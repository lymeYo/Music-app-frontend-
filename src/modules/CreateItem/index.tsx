import React, { useState } from 'react'

import SelectCategory from '@/modules/CreateItem/SelectCategory'
import { TItemState } from '@/modules/CreateItem/constants'
import SelectParameters from '@/modules/CreateItem/SelectParameters'

const ButtonNext = ({ handler }) => {
  const handleClick = () => {
    handler((prev) => prev + 1)
  }

  return (
    <button
      onClick={handleClick}
      className='mt-10 self-end rounded-lg bg-lSecondary px-4 py-2 text-zinc-50 hover:bg-lSecondaryDark'
    >
      Далее
    </button>
  )
}

type curStageProps = {
  stageIndex: number
  state: TItemState
}
const CurStage = ({ stageIndex, state }: curStageProps) => {
  const handleCategory = (title: string, subtitle: string) => {
    state.category.title = title
    state.category.subtitle = subtitle
  }
  return <SelectParameters state={state} />
  switch (stageIndex) {
    case 1:
      return <SelectCategory key={1} handle={handleCategory} />
    case 2:
      return <SelectParameters state={state} />
    default:
      return null
  }
}

const CreateItem = ({ state }: { state: TItemState }) => {
  const [stageIndex, setStageIndex] = useState(1)

  return (
    <div className='my-container-wrapper'>
      <div className='my-container flex flex-col sm:px-5'>
        <CurStage state={state} stageIndex={stageIndex} />
        <ButtonNext handler={setStageIndex} />
      </div>
    </div>
  )
}

export default CreateItem
