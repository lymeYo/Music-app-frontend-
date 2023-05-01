import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/redux/store'

export type TprofileData = {
  id: number
  username: string
  password: string
  createdAt: string
  updatedAt: string
}

export interface UserState {
  profile: TprofileData | null
  isAuth: boolean
}

const initialState: UserState = {
  profile: null,
  isAuth: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    renderProfile: (state: UserState, action: PayloadAction<TprofileData>) => {
      state.profile = action.payload
      state.isAuth = true
    },
    renderAuthIndicator: (state: UserState, action: PayloadAction<{ isAuth: boolean }>) => {
      state.isAuth = action.payload.isAuth
    }
  }
})

export const { renderProfile, renderAuthIndicator } = userSlice.actions

export const selectProfile = (state: RootState): TprofileData | null => state.user.profile
export const selectIsAuth = (state: RootState): boolean => state.user.isAuth

export default userSlice.reducer
