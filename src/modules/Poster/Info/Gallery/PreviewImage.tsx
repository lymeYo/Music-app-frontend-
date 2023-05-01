import React from 'react'

type PreviewImageProps = {
  ind: number
  src: string
  curImageOrder: number
  handleImage: (order: number) => void
}
const PreviewImage = ({ ind, src, curImageOrder, handleImage }: PreviewImageProps) => {
  const handleMouseOver = () => {
    handleImage(ind)
  }

  return (
    <div
      className={`w-full max-w-[75px] cursor-pointer border border-2 ${
        ind == curImageOrder ? 'border-blue-500' : 'border-transparent'
      }`}
    >
      <img
        src={src}
        data-order={ind}
        onMouseOver={handleMouseOver}
        className='h-[55px] w-full object-cover'
      />
    </div>
  )
}

export default PreviewImage
