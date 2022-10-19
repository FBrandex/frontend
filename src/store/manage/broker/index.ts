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

// ** Fetch Brokers
export const fetchData = createAsyncThunk('appBrokers/fetchData', async (params: DataParams) => {
  const response = await axios.get('/manage/broker/list', {
    params
  })

  return response.data
})

// ** Add Broker
export const addBroker = createAsyncThunk(
  'appBrokers/addBroker',
  async (data: { [key: string]: number | string }, { getState, dispatch }: Redux) => {
    const response = await axios.post('/manage/broker/add-broker', {
      data
    })
    dispatch(fetchData(getState().broker.params))

    return response.data
  }
)

// ** Delete Broker
export const deleteBroker = createAsyncThunk(
  'appBrokers/deleteBroker',
  async (id: number | string, { getState, dispatch }: Redux) => {
    const response = await axios.delete('/manage/broker/delete', {
      data: id
    })
    dispatch(fetchData(getState().broker.params))

    return response.data
  }
)

export const appBrokersSlice = createSlice({
  name: 'appBrokers',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.brokers
      state.total = action.payload.total
      state.params = action.payload.params
      state.allData = action.payload.allData
    })
  }
})

export default appBrokersSlice.reducer
