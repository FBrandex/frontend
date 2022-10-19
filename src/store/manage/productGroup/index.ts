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

// ** Fetch ProductGroups
export const fetchData = createAsyncThunk('appProductGroups/fetchData', async (params: DataParams) => {
  const response = await axios.get('/manage/product-group/list', {
    params
  })

  return response.data
})

// ** Add ProductGroup
export const addProductGroup = createAsyncThunk(
  'appProductGroups/addProductGroup',
  async (data: { [key: string]: number | string }, { getState, dispatch }: Redux) => {
    const response = await axios.post('/manage/product-group/add-product-group', {
      data
    })
    dispatch(fetchData(getState().productGroup.params))

    return response.data
  }
)

// ** Delete ProductGroup
export const deleteProductGroup = createAsyncThunk(
  'appProductGroups/deleteProductGroup',
  async (id: number | string, { getState, dispatch }: Redux) => {
    const response = await axios.delete('/manage/product-group/delete', {
      data: id
    })
    dispatch(fetchData(getState().productGroup.params))

    return response.data
  }
)

export const appProductGroupsSlice = createSlice({
  name: 'appProductGroups',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.productGroups
      state.total = action.payload.total
      state.params = action.payload.params
      state.allData = action.payload.allData
    })
  }
})

export default appProductGroupsSlice.reducer
