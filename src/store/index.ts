// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers

import user from 'src/store/manage/user'
import order from 'src/store/manage/order'

export const store = configureStore({
  reducer: {
    user,
    order
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
