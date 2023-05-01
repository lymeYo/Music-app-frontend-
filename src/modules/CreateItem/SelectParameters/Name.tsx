import React, { useContext, useRef } from 'react'

import { PosterStateContext } from '..'

const Name = ({ handleButtonDisabled }: { handleButtonDisabled: (value: string) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const posterState = useContext(PosterStateContext)
  const changeHandler = () => {
    const value = inputRef.current?.value
    if (value) posterState.name = value
    handleButtonDisabled(value || '')
  }

  return (
    <div className='create_parameters-box'>
      <span className='create_parameters-title'>Название инструмента</span>
      <input
        onChange={changeHandler}
        ref={inputRef}
        className='create_parameters-area px-4'
        type='text'
      />
    </div>
  )
}

export default Name
