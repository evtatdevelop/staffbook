import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMainpageData } from './mainpageSliceAPI';

const initialState = {
  loading: false,
  file: null,
  data: [],
  contextMenu: {},
}

export const getMainpage = createAsyncThunk( 'primarypage/getMainpage', async (api_key) => await getMainpageData({'api_key': api_key}) )

export const primarypageSlice = createSlice({
  name: 'primarypage',
  initialState,
  reducers: {
    setFile: (state, action) => {
      state.file = action.payload
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMainpage.pending, ( state ) => { state.loading = true })
      .addCase(getMainpage.fulfilled, ( state, action ) => {
        state.data = action.payload.sections;
        state.loading = false;
      })
  }
});

export const {
  setFile,
} = primarypageSlice.actions;

export const mainpage = ( state ) => state.primarypage.data;
export const loading  = ( state ) => state.primarypage.loading;
export const file  = ( state ) => state.primarypage.file;

export default primarypageSlice.reducer;
