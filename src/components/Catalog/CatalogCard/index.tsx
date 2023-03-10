import React, { useState } from 'react'

import SubList from '@/components/Catalog/CatalogCard/SubList'
import List from '@/components/Catalog/CatalogCard/List'

type CatalogCardProps = {
  subtitleHandler: (title: string, subtitle: string) => void
}
const CatalogCard = ({ subtitleHandler }: CatalogCardProps) => {
  const [activeTitle, setActiveTitle] = useState('Гитара')

  return (
    <div className='flex w-full max-w-[650px] border-4 border-lMain bg-zinc-50 text-zinc-900 @container dark:border-zinc-300 dark:bg-dBgSecondary dark:text-zinc-50'>
      <List activeTitle={activeTitle} setActiveTitle={setActiveTitle} />
      <SubList subtitleHandler={subtitleHandler} activeTitle={activeTitle} />
    </div>
  )
}

export default CatalogCard
