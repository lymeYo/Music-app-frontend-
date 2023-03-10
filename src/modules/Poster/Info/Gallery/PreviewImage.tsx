import React from 'react'

const PreviewImage = ({ ind, src, curImageOrder, handleImage }) => {
  return (
    <div
      className={`w-full max-w-[75px] cursor-pointer border border-2 ${
        ind == curImageOrder ? 'border-blue-500' : 'border-transparent'
      }`}
    >
      <img
        src={src}
        data-order={ind}
        onMouseOver={handleImage}
        className='h-[55px] w-full object-cover'
      />
    </div>
  )
}

export default PreviewImage
