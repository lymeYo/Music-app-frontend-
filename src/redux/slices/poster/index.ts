import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/redux/store'

export type TPoster = {
  id: number
  authorId: number
  category: string
  name: string
  price: number | null
  condition: 'new' | 'used'
  images: string[]
  location: string
  description: string
  createdAt: any
  updatedAt: any
}

export interface PosterState {
  mainPagePosters: TPoster[]
  generalPoster?: TPoster
}

const initialState: PosterState = {
  mainPagePosters: [],
  generalPoster: undefined
}

export const posterSlice = createSlice({
  name: 'poster',
  initialState,
  reducers: {
    setMainPagePosters: (state: PosterState, action: PayloadAction<TPoster[]>) => {
      state.mainPagePosters = action.payload
    },
    setGeneralPoster: (state: PosterState, action: PayloadAction<TPoster>) => {
      state.generalPoster = action.payload
    }
  }
})

export const { setMainPagePosters, setGeneralPoster } = posterSlice.actions

export const selectMainPagePosters = (state: RootState): TPoster[] => state.poster.mainPagePosters

export const selectGeneralPoster = (state: RootState): TPoster =>
  state.poster.generalPoster as TPoster

export default posterSlice.reducer
