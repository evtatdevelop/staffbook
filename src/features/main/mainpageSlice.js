import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uplodeData } from "./mainpageSliceAPI";


const initialState = {
  loading: false,
  data: [],
}

export const upData  = createAsyncThunk( 'user/uplodeData', async ( data ) => await uplodeData(data) )

export const primarypageSlice = createSlice({
  name: 'primarypage',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },

  extraReducers: (builder) => {
    builder
    .addCase(upData.pending, ( state ) => { state.loading = true })
    .addCase(upData.fulfilled, ( state, action ) => {
      state.loading = false;
      state.data = [];
    })
  }
});

export const { setData } = primarypageSlice.actions;

export const data = ( state ) => state.primarypage.data;
export const loading  = ( state ) => state.primarypage.loading;

export default primarypageSlice.reducer;
