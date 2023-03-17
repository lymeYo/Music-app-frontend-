import React, { useRef } from 'react'

import { PhotoIcon } from '@/ui/Icons'

const InputArea = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImage = (event) => {
    console.log(event.target.files)
  }

  const clickImitate = () => {
    fileInputRef?.current?.click()
  }

  return (
    <div className='flex cursor-pointer items-center justify-center rounded-sm border px-5 py-1 hover:bg-zinc-100'>
      <div onClick={clickImitate}>
        <PhotoIcon extraClass='w-16 h-16' />
      </div>
      <input
        ref={fileInputRef}
        className='absolute -z-30 hidden h-0 w-0'
        type='file'
        name='file'
        onChange={handleImage}
      />
    </div>
  )
}

const ImageItem = ({ src }) => (
  <div className='cursor-pointer rounded-sm border'>
    <img src={src} alt='' />
  </div>
)

const Images = () => {
  return (
    <div className='grid grid-cols-[repeat(4,_100px)] gap-y-5 gap-x-3'>
      <ImageItem
        src={
          'https://40.img.avito.st/image/1/1.6_SOh7a-Rx2gJpce1NCFzLslRRswLOUcgCZFHz4m3R3qJUU.G5zFTyrTvsnV6Zf2HEFa63PHBGW4ZJc9iFJJxiijQCI'
        }
      />
      <ImageItem
        src={
          'https://91.img.avito.st/image/1/1.Ku5ZP7a-hgd3nlYEARNP1mydhAHnlCQGV56EBemeHAc9nYQ.m6D8yxF1YZo8ja5q93SmyFT_azqwX3ckD4GZZUwYMJg'
        }
      />
      <ImageItem
        src={
          'https://10.img.avito.st/image/1/1.O9O8PLa-lzqSnUc5xjhe64melTwClzU7sp2VOAydDTrYnpU.sJb5bihzZUv-3V-A_t4nZwWgWkL1nwURCXfKe0now4E'
        }
      />
      <ImageItem
        src={
          'https://20.img.avito.st/image/1/1.Ku75P7a-hgfXnlYEoTtP1sydhAFHlCQG956EBUmeHAednYQ.eRNVXxm5hd52XZXboEHbgGGHBNEx1p2A54T_tN_U14c'
        }
      />
      <ImageItem
        src={
          'https://94.img.avito.st/image/1/1.C3SOqba-p52gCHeelK1uTLsLpZswAgWcgAilnz4IPZ3qC6U.7QYvmRb04IkAaA6koqQaxADYoXeaAc9dnoryNQHV4ts'
        }
      />
      <ImageItem
        src={
          'https://59.img.avito.st/image/1/1.ynez3La-Zp6dfbadq9evT4Z-ZJgNd8SfvX1knAN9_J7XfmQ.444C7JqxJ4wNpvU7FdAIv88TU3DgDPTojzIcniQljo4'
        }
      />
      <ImageItem
        src={
          'https://80.img.avito.st/image/1/1.FUx4oba-uaVWAGmmXqVwdE0Du6PGChukdgC7p8gAI6UcA7s.Gup04mFq7Qab2UpkyK5Ok7QMNCdDdNQmVNjjvnMZNUI'
        }
      />
      <InputArea />
    </div>
  )
}

const ImagesArea = () => {
  return (
    <div className='create_parameters-box'>
      <div className='create_parameters-title text-z flex flex-col self-start'>
        <span className='text-zinc-500'>Фотографии</span>
        <span className='text-[12px] text-zinc-400'>7 из 7</span>
      </div>
      <Images />
    </div>
  )
}

export default ImagesArea
