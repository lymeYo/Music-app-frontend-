import React from 'react'

import PostersArea from '@/modules/PostersArea'

type pageProps = {
  params: {
    category: string
    subcategory: string
  }
}

const Page = ({ params }: pageProps) => {
  const category = decodeURI(params.category)
  const subcategory = decodeURI(params.subcategory)

  return <PostersArea catTitle={category} catSubTitle={subcategory} />
}

export default Page
