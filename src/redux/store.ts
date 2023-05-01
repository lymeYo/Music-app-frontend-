import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/user'
import posterReducer from './slices/poster'

export const store = configureStore({
  reducer: {
    user: userReducer,
    poster: posterReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
