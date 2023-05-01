export type TReqPosterData = {
  category: string
  name: string
  price?: number
  condition: 'new' | 'used'
  images: string[]
  location: string
  description: string
}

export const getInitialItemState: () => TReqPosterData = () => ({
  category: '',
  name: '',
  condition: 'new',
  price: undefined,
  images: [],
  location: '',
  description: ''
})

export const lastStageIndex = 2
