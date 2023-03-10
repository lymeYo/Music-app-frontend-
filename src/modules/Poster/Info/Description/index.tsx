import React from 'react'

const Description = () => {
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis doloremque incidunt inventore libero nemo neque possimus sequi vel velit?'
  return (
    <div className='py-5'>
      <div className='text-2xl font-bold'>Описание</div>
      <div className='pt-3'>{description}</div>
    </div>
  )
}

export default Description
