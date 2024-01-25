import React, { useCallback, useEffect, useMemo, useState } from 'react'

type DescriptionAreaProps = {
  description: string
  price: number | null
  location: string
  createdAt: any
}
const DescriptionArea = ({ description, price, location, createdAt }: DescriptionAreaProps) => {
  const locationString = location.split(';')[0]
  const responsiveDescribe = useMemo(
    () => ({
      default: description.slice(0, 80).split(' ').slice(0, -1).join(' ') + '...',
      medium: description.slice(0, 190).split(' ').slice(0, -1).join(' ') + '...',
      xl: description.slice(0, 500).split(' ').slice(0, -1).join(' ') + '...'
    }),
    [description]
  )

  const timePassed: string = useMemo(() => {
    const createdAtDateNum = new Date(Date.parse(createdAt))
    const createdAtDateData = {
      minutes: createdAtDateNum.getUTCMinutes(),
      hours: createdAtDateNum.getUTCHours(),
      days: createdAtDateNum.getDate(),
      months: createdAtDateNum.getMonth(),
      years: createdAtDateNum.getFullYear()
    }

    const curDateNum = new Date()
    const curDateData = {
      minutes: curDateNum.getUTCMinutes(),
      hours: curDateNum.getUTCHours(),
      days: curDateNum.getDate(),
      months: curDateNum.getMonth(),
      years: curDateNum.getFullYear()
    }

    if (curDateData.years > createdAtDateData.years)
      return `${curDateData.years - createdAtDateData.years} года назад`
    if (curDateData.months > createdAtDateData.months)
      return `${curDateData.months - createdAtDateData.months} месяцев назад`
    if (curDateData.days > createdAtDateData.days)
      return `${curDateData.days - createdAtDateData.days} дней назад`
    if (curDateData.hours > createdAtDateData.hours)
      return `${curDateData.hours - createdAtDateData.hours} часов назад`
    return `${curDateData.minutes} минут назад`
  }, [createdAt])

  return (
    <div>
      <div className='font-bold'>{price} ₽</div>
      <div className='flex-auto py-4 text-zinc-500 dark:text-zinc-300'>
        <span className='hidden @5xl:inline'>{responsiveDescribe.xl}</span>
        <span className='@, 5xl:hidden hidden @2xl:inline'>{responsiveDescribe.medium}</span>
        <span className='hidden @xl:inline @2xl:hidden'>{responsiveDescribe.default}</span>
        <span className='inline @xl:hidden'>{responsiveDescribe.medium}</span>
      </div>
      <div className='flex items-end justify-between'>
        <div className='flex flex-col text-zinc-500 dark:text-zinc-300'>
          <span>{locationString}</span>
          <span>{timePassed}</span>
        </div>
        <button className='flex-initial justify-self-end rounded-md border border-2 border-zinc-500 px-3 py-1 text-sm text-lMain hover:bg-zinc-100 @5xl:px-6 @5xl:py-2 @5xl:text-lg dark:border-zinc-300 dark:text-zinc-50 dark:hover:bg-dBgMain'>
          Написать
        </button>
      </div>
    </div>
  )
}

export default DescriptionArea
