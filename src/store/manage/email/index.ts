// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

interface DataParams {
  q: string
  role: string
  status: string
  currentPlan: string
}

interface Redux {
  getState: any
  dispatch: Dispatch<any>
}

// ** Fetch Emails
export const fetchData = createAsyncThunk('appEmails/fetchData', async (params: DataParams) => {
  const response = await axios.get('/manage/email/list', {
    params
  })

  return response.data
})

// ** Add Email
export const addEmail = createAsyncThunk(
  'appEmails/addEmail',
  async (data: { [key: string]: number | string }, { getState, dispatch }: Redux) => {
    const response = await axios.post('/manage/email/add-email', {
      data
    })
    dispatch(fetchData(getState().email.params))

    return response.data
  }
)

// ** Delete Email
export const deleteEmail = createAsyncThunk(
  'appEmails/deleteEmail',
  async (id: number | string, { getState, dispatch }: Redux) => {
    const response = await axios.delete('/manage/email/delete', {
      data: id
    })
    dispatch(fetchData(getState().email.params))

    return response.data
  }
)

export const appEmailsSlice = createSlice({
  name: 'appEmails',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.emails
      state.total = action.payload.total
      state.params = action.payload.params
      state.allData = action.payload.allData
    })
  }
})

export default appEmailsSlice.reducer
