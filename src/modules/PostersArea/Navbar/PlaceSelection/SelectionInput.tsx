import React, { Ref, useState } from 'react'

import { useOpenListener } from '@/utils/hooks'

const CitiesList = ({ data, selectCity }) => {
  const handleCLick = () => {
    selectCity(data)
  }
  return (
    <div
      onClick={handleCLick}
      className='cursor-pointer p-2 hover:bg-zinc-200 dark:bg-dBgSecondary dark:hover:bg-dBgMain'
    >
      {data}
    </div>
  )
}

type SelectionInputProps = {
  cities: string[]
  handleChange: () => void
  inputRef: Ref<any>
}
const SelectionInput = ({ cities, handleChange, inputRef }: SelectionInputProps) => {
  const [isOpen, openList] = useOpenListener('selection-input-listener')
  const [curCity, setCurCity] = useState<string>('')

  const listShowHandler = () => {
    openList((prev) => !prev)
  }

  const selectCity = (city: string) => {
    setCurCity(city)
    listShowHandler()
  }

  const list = cities.map((cityData, ind) => (
    <li key={ind}>
      <CitiesList selectCity={selectCity} data={cityData} />
    </li>
  ))

  return (
    <div className='selection-input-listener relative'>
      <div className='max-w-[400px] border border-zinc-300 text-lg'>
        <input
          onClick={listShowHandler}
          readOnly
          value={curCity}
          className='w-full cursor-pointer p-2 dark:bg-dBgSecondary'
          type='text'
        />
      </div>
      {isOpen ? (
        <div className='absolute w-full max-w-[400px] border border-zinc-300 bg-zinc-100'>
          <input
            onChange={handleChange}
            className='w-full border-b-2 p-1 dark:bg-dBgSecondary'
            placeholder='Поиск'
            type='text'
            ref={inputRef}
          />
          <ul className=''>{list}</ul>
        </div>
      ) : null}
    </div>
  )
}

export default SelectionInput
