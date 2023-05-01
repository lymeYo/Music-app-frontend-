import React from 'react'

type ButtonNextProps = {
  handler: () => void
  isLastSection: boolean
  isDisabled: boolean
}
const ButtonNext = ({ handler, isLastSection, isDisabled }: ButtonNextProps) => {
  const handleClick = () => {
    handler()
  }

  return (
    <button
      disabled={isDisabled}
      onClick={handleClick}
      className={
        'mt-10 self-end rounded-lg bg-lSecondary px-4 py-2 text-zinc-50 hover:bg-lSecondaryDark ' +
        `${isDisabled ? 'opacity-50 hover:bg-lSecondary' : ''}`
      }
    >
      {isLastSection ? 'Разместить' : 'Далее'}
    </button>
  )
}

export default ButtonNext
