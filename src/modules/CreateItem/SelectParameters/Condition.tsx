import React, { useContext, useState } from 'react'

import { PosterStateContext } from '..'

const Condition = () => {
  const posterState = useContext(PosterStateContext)
  const [isNew, setNewStatus] = useState<boolean>(true)

  const handleState = (newStatus: boolean) => {
    setNewStatus(newStatus)
    posterState.condition = isNew ? 'new' : 'used'
  }

  return (
    <div className='create_parameters-box'>
      <span className='create_parameters-title'>Состояние</span>
      <div className='inline-flex border'>
        <span
          onClick={() => handleState(true)}
          className={
            'cursor-pointer border-r px-4 py-2 ' + (isNew ? 'bg-zinc-300' : 'hover:bg-zinc-100')
          }
        >
          Новое
        </span>
        <span
          onClick={() => handleState(false)}
          className={'cursor-pointer px-4 py-2 ' + (!isNew ? 'bg-zinc-300' : 'hover:bg-zinc-100')}
        >
          Б/у
        </span>
      </div>
    </div>
  )
}

export default Condition
