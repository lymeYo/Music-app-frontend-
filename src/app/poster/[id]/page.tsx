import React from 'react'

import Poster from '@/modules/Poster'

type pageProps = {
  params: {
    id: string
  }
}

export default async function Page({ params }: pageProps) {
  const res = await fetch(`http://localhost:3000/api/poster/${params.id}`, {
    method: 'GET'
  })
  const data = await res.json()
  console.log('SHOW RESULT: ', data)
  if (!res.ok) return null
  return <Poster data={data} />
}
