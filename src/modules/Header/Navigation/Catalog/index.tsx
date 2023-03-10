'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { useOpenListener } from '@/utils/hooks'
import { CatalogShopIcon, ShotArrowIcon } from '@/ui/Icons'
import CatalogCard from '@/components/Catalog/CatalogCard'

const Catalog = () => {
  const router = useRouter()
  const [isOpen, setOpen] = useOpenListener('catalog-listener')

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  const handleRedirect = (title: string, subtitle: string) => {
    router.push(`/${title}/${subtitle}`)
    handleClick()
  }

  return (
    <div className=''>
      <div
        onClick={handleClick}
        className='catalog-listener group flex cursor-pointer items-center justify-center'
      >
        <span className='mr-1 hidden group-hover:text-lSecondary lg:block'>Каталог</span>
        <span className='mr-1 block lg:hidden'>
          <CatalogShopIcon extraClass='cursor-pointer hover:text-lSecondary' />
        </span>
        <ShotArrowIcon
          extraClass={
            `${isOpen ? 'rotate-90' : ''} ` +
            'w-4 h-4 transition-transform duration-300 group-hover:text-lSecondary'
          }
        />
      </div>
      <div
        className={`${
          isOpen ? '' : 'hidden'
        } absolute top-[65px] left-0 right-0 w-full border md:left-10 md:top-[95px] md:max-w-[640px]`}
      >
        <div className='catalog-listener relative'>
          <CatalogCard subtitleHandler={handleRedirect} />
        </div>
      </div>
    </div>
  )
}

export default Catalog
