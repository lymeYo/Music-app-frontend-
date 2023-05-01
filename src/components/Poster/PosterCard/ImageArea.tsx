import React from 'react'
import Link from 'next/link'

type ImageAreaProps = {
  paths?: string[]
  id: number
}
const ImageArea = ({ paths, id }: ImageAreaProps) => {
  return (
    <Link href={`/poster/${id}`}>
      <div className='flex flex-auto cursor-pointer items-start justify-center pb-3 @xl:pr-3 @xl:pb-0'>
        {paths ? <img className='max-w-600px max-h-[300px]' src={paths[0]} alt='' /> : null}
      </div>
    </Link>
  )
}

export default ImageArea
