import React from 'react'
import Link from 'next/link'

const ImageArea = () => {
  return (
    <div className='flex cursor-pointer items-start justify-center pb-3 @xl:pr-3 @xl:pb-0'>
      <Link href='/posters/1'>
        <img
          src='https://static.wixstatic.com/media/47e445_7a9abb957aaa4a98ac98681640a802a7~mv2.jpg/v1/fill/w_490,h_343,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/47e445_7a9abb957aaa4a98ac98681640a802a7~mv2.jpg'
          alt=''
        />
      </Link>
    </div>
  )
}

export default ImageArea
