import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setUserLang, getRemoteUser } from './userSliceAPI';

const initialState = {
  loading: false,
  data: [],
}

export const getRemote  = createAsyncThunk( 'user/getRemote', async () => await getRemoteUser({}) )
export const setLang    = createAsyncThunk( 'user/setLang', async ( data ) => await setUserLang(data) )

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getRemote.pending, ( state ) => { state.loading = true })
      .addCase(getRemote.fulfilled, ( state, action ) => {
        state.loading = false;
        state.data = action.payload;
      })

      .addCase(setLang.pending, ( state ) => { state.loading = true })
      .addCase(setLang.fulfilled, ( state, action ) => {
        state.data.lang = action.payload;
        state.loading = false;
      })
  }
});

export const loading  = ( state ) => state.user.loading;
export const user     = ( state ) => state.user.data;

export default userSlice.reducer;
