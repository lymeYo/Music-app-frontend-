import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { selectGeneralPoster } from '@/redux/slices/poster'

const Footer = () => {
  const { createdAt } = useSelector(selectGeneralPoster)
  const dateRuString = useMemo(() => {
    const date = new Date(createdAt)
    const dateString = date.toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    return dateString
  }, [createdAt])

  return <div className='border-t-2 pt-3 text-sm text-zinc-400'>{dateRuString}</div>
}

export default Footer
