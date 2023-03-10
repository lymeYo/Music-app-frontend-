import React from 'react'
import Poster from '@/modules/Poster'

type pageProps = {
  params: {
    id: string
  }
}

const Page = ({ params }: pageProps) => {
  return <Poster />
}

export default Page
