// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

interface DataParams {
  q: string
  dates?: Date[]
  status: string
}

interface Redux {
  getState: any
  dispatch: Dispatch<any>
}

// ** Fetch Orders
export const fetchData = createAsyncThunk('appOrder/fetchData', async (params: DataParams) => {
  const response = await axios.get('/manage/order/orders', {
    params
  })

  return response.data
})

export const deleteOrder = createAsyncThunk(
  'appOrder/deleteData',
  async (id: number | string, { getState, dispatch }: Redux) => {
    const response = await axios.delete('/manage/order/delete', {
      data: id
    })
    await dispatch(fetchData(getState().order.params))

    return response.data
  }
)

export const appOrderSlice = createSlice({
  name: 'appOrder',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.orders
      state.params = action.payload.params
      state.allData = action.payload.allData
      state.total = action.payload.total
    })
  }
})

export default appOrderSlice.reducer
