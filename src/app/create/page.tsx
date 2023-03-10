'use client'

import React, { useRef } from 'react'

import CreateItem from '@/modules/CreateItem'
import { initialItemState, TItemState } from '@/modules/CreateItem/constants'

const Page = () => {
  const itemState = useRef<TItemState>(initialItemState)
  return <CreateItem state={itemState.current} />
}

export default Page
