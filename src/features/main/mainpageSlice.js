import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uplodeData, getStaffbookData } from "./mainpageSliceAPI";


const initialState = {
  loading: false,
  staffbook: [],
  row_from: 1,
  row_num: 999,
  data: [],
}

export const getStaffbook = createAsyncThunk( 'mainpage/getStaffbook', async (data) => await getStaffbookData(data) )

export const upData  = createAsyncThunk( 'user/uplodeData', async ( data ) => await uplodeData(data) )

export const mainpageSlice = createSlice({
  name: 'mainpage',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    setRowFrom: (state) => {
      state.row_from = state.row_from + state.row_num;
    },
  },

  extraReducers: (builder) => {
    builder
    .addCase(getStaffbook.pending, ( state ) => { state.loading = true })
    .addCase(getStaffbook.fulfilled, ( state, action ) => {
      if ( state.staffbook.length < state.row_from + state.row_num ) // !TODO: 
      state.staffbook = [...state.staffbook, ...action.payload];
      state.loading = false;
    })

    .addCase(upData.pending, ( state ) => { state.loading = true })
    .addCase(upData.fulfilled, ( state, action ) => {
      state.loading = false;
      state.data = [];
    })
  }
});

export const { setData, setRowFrom } = mainpageSlice.actions;

export const data = ( state ) => state.mainpage.data;
export const loading  = ( state ) => state.mainpage.loading;
export const row_from  = ( state ) => state.mainpage.row_from;
export const row_num  = ( state ) => state.mainpage.row_num;

export default mainpageSlice.reducer;
