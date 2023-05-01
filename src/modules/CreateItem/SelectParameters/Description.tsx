import { useContext, useRef } from 'react'

import { PosterStateContext } from '..'

const Description = () => {
  const posterState = useContext(PosterStateContext)
  const areaRef = useRef<HTMLTextAreaElement>(null)
  const handleChange = () => {
    if (areaRef?.current?.value) posterState.description = areaRef.current.value
  }

  return (
    <div className='create_parameters-box items-start'>
      <span className='create_parameters-title'>Описание</span>
      <textarea
        ref={areaRef}
        className='create_parameters-area min-h-[40px] px-2'
        onChange={handleChange}
        cols={30}
        rows={10}
      ></textarea>
    </div>
  )
}

export default Description
