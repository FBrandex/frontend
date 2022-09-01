// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers

import user from 'src/store/manage/user'
import order from 'src/store/manage/order'
import permissions from 'src/store/setting/permissions'

export const store = configureStore({
  reducer: {
    user,
    order,
	permissions
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
