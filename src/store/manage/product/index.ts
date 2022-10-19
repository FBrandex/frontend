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

// ** Fetch Products
export const fetchData = createAsyncThunk('appProducts/fetchData', async (params: DataParams) => {
  const response = await axios.get('/manage/product/list', {
    params
  })

  return response.data
})

// ** Add Product
export const addProduct = createAsyncThunk(
  'appProducts/addProduct',
  async (data: { [key: string]: number | string }, { getState, dispatch }: Redux) => {
    const response = await axios.post('/manage/product/add-product', {
      data
    })
    dispatch(fetchData(getState().product.params))

    return response.data
  }
)

// ** Delete Product
export const deleteProduct = createAsyncThunk(
  'appProducts/deleteProduct',
  async (id: number | string, { getState, dispatch }: Redux) => {
    const response = await axios.delete('/manage/product/delete', {
      data: id
    })
    dispatch(fetchData(getState().product.params))

    return response.data
  }
)

export const appProductsSlice = createSlice({
  name: 'appProducts',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.products
      state.total = action.payload.total
      state.params = action.payload.params
      state.allData = action.payload.allData
    })
  }
})

export default appProductsSlice.reducer
