import React from 'react'

const Input = ({ distance }) => (
  <div className='border border-zinc-300'>
    <input
      className='w-full max-w-[200px] p-2 dark:bg-dBgSecondary'
      placeholder={`От ${distance}`}
      type='text'
    />
  </div>
)

type PriceHorizonProps = {
  min: number
  max: number
}
const PriceSelection = ({ min, max }: PriceHorizonProps) => {
  return (
    <div className='flex justify-between'>
      <Input distance={min} />
      <Input distance={max} />
    </div>
  )
}

export default PriceSelection
