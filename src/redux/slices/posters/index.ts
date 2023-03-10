import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { catalogData } from '@/utils/constants'

interface initialStateInterface {}

const getInitialState = (): initialStateInterface => ({})

//клочкова максима прветствует  вас в процессе изучения ее кода :^)

const loginSlice = createSlice({
  name: 'posters',
  initialState: getInitialState(),
  reducers: {
    // setLoginData: (state, action) => {
    //   // state.isAuth = true
    //   // state.name = action.payload.username
    //   // state.id = action.payload.id
    //   // state.email = action.payload.email || null
    // }
  }
})

export const selectPostersCategories = (store): boolean => store.posters.isAuth
export const { setLoginData } = loginSlice.actions
export const loginReducer = loginSlice.reducer
