// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers

import user from 'src/store/manage/user'
/* import email from 'src/store/apps/email'
import invoice from 'src/store/manage/invoice'
import calendar from 'src/store/apps/calendar'
import permissions from 'src/store/apps/permissions' */

export const store = configureStore({
  reducer: {
    user,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
