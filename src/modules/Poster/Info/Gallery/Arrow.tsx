import React from 'react'

import { ShotArrowIcon } from '@/ui/Icons'

type ArrowProps = {
  way: 'left' | 'right'
  onClick: (way: 'left' | 'right') => void
  isExtend?: boolean
}

const Arrow = ({ way, onClick, isExtend }: ArrowProps) => {
  const handleClick = () => {
    onClick(way)
  }

  // const xPosition = way + (isExtend ? '-[45px]' : '-0')
  let xPosition
  if (isExtend) {
    xPosition = way == 'right' ? 'right-[45px]' : 'left-[45px]'
  } else {
    xPosition = way == 'right' ? 'right-0' : 'left-0'
  }

  return (
    <div
      onClick={handleClick}
      className={
        `absolute top-0 bottom-0  ${xPosition} flex cursor-pointer select-none items-center justify-center bg-zinc-600/0 duration-200 ` +
        `${
          isExtend
            ? 'w-[80px] hover:bg-zinc-100/30'
            : 'w-[40px] hover:bg-zinc-600/25 dark:hover:bg-zinc-400/25'
        }`
      }
    >
      <ShotArrowIcon
        extraClass={`${way == 'left' ? 'rotate-90' : '-rotate-90'} ${
          isExtend ? 'text-zinc-200' : 'text-zinc-900'
        } `}
      />
    </div>
  )
}

export default Arrow
