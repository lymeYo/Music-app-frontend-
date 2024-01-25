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

export type TmainPagePosters = {
  list: TPoster[]
  curPage: number
}

export interface PosterState {
  mainPagePosters: TmainPagePosters
  generalPoster?: TPoster
}

const initialState: PosterState = {
  mainPagePosters: {
    list: [],
    curPage: 1
  },
  generalPoster: undefined
}

export const posterSlice = createSlice({
  name: 'poster',
  initialState,
  reducers: {
    setMainPagePosters: (state: PosterState, action: PayloadAction<TPoster[]>) => {
      state.mainPagePosters.list = action.payload
      state.mainPagePosters.curPage = 2
    },
    addMainPagePosters: (state: PosterState, action: PayloadAction<TPoster[]>) => {
      state.mainPagePosters.list = state.mainPagePosters.list.concat(action.payload)
      state.mainPagePosters.curPage++
    },
    setGeneralPoster: (state: PosterState, action: PayloadAction<TPoster>) => {
      state.generalPoster = action.payload
    }
  }
})

export const { setMainPagePosters, addMainPagePosters, setGeneralPoster } = posterSlice.actions

export const selectMainPosters = (state: RootState): TPoster[] => state.poster.mainPagePosters.list

export const selectMainPostersPage = (state: RootState): number =>
  state.poster.mainPagePosters.curPage

export const selectGeneralPoster = (state: RootState): TPoster =>
  state.poster.generalPoster as TPoster

export default posterSlice.reducer
