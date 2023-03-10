import React, { useRef } from 'react'

const Name = ({ setName }: { setName: (name: string) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const changeHandler = () => {
    setName(inputRef.current?.value ?? '')
  }

  return (
    <div className='create_parameters-box'>
      <span className='create_parameters-title'>Название инструмента</span>
      <input
        onChange={changeHandler}
        ref={inputRef}
        className='create_parameters-area'
        type='text'
      />
    </div>
  )
}

export default Name
