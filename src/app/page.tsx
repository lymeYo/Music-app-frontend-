import React from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

import PostersArea from '@/modules/PostersArea'
import { TPoster } from '@/redux/slices/poster'
import { isResponceError } from '@/pages/api/auth/login'

export default async function Home({ searchParams }) {
  let mainPosters: TPoster[] = []
  const res = await fetch('http://localhost:3000/api/poster/getAll', {
    method: 'POST',
    body: JSON.stringify(searchParams)
  })
  const postersData: TPoster[] = await res.json()
  if (isResponceError(res, postersData)) {
    mainPosters = []
  } else {
    mainPosters = postersData
  }

  return <PostersArea posters={mainPosters} catTitle='Гитара' catSubTitle='Классические гитары' />
}
