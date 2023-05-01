'use client'

import React, { createContext, useContext, useState } from 'react'

import { getInitialItemState, lastStageIndex, TReqPosterData } from '@/modules/CreateItem/constants'
import ButtonNext from './ButtonNext'
import SelectParameters from './SelectParameters'
import SelectCategory from './SelectCategory'
import { myGetCookies } from '@/utils/constants'

export const PosterStateContext = createContext<TReqPosterData>(getInitialItemState())

const CreateItem = () => {
  const posterState = useContext(PosterStateContext)
  const [isButtonDisabled, setButtonDisabled] = useState(true)
  const [stageIndex, setStageIndex] = useState(1)

  const handleToggle = () => {
    setStageIndex(prev => {
      if (prev == lastStageIndex) {
        handleSubmit()
        return prev
      }
      return prev + 1
    })
  }

  const handleButtonDisabled = (value: string) => {
    console.log(posterState)

    if (!value.length) setButtonDisabled(true)
    else setButtonDisabled(false)
  }

  const handleSubmit = async () => {
    const token: string = myGetCookies().token

    const res = await fetch('http://localhost:3000/api/poster/create', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify(posterState)
    })
  }

  return (
    <div className='my-container-wrapper'>
      <div className='my-container flex flex-col sm:px-5'>
        {stageIndex == 1 ? (
          <SelectCategory nextSection={handleToggle} />
        ) : (
          <>
            <SelectParameters handleButtonDisabled={handleButtonDisabled} />
            <ButtonNext
              isDisabled={isButtonDisabled}
              handler={handleToggle}
              isLastSection={stageIndex == lastStageIndex}
            />
          </>
        )}
      </div>
    </div>
  )
}

const CreateItemWrapper = () => {
  return (
    <PosterStateContext.Provider value={getInitialItemState()}>
      <CreateItem />
    </PosterStateContext.Provider>
  )
}

export default CreateItemWrapper
