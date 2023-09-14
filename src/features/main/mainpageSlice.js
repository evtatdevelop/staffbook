import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  contextMenu: {},
}

export const primarypageSlice = createSlice({
  name: 'primarypage',
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.data = [...state.post, action.payload];
    },
  },

  extraReducers: (builder) => {}
});

export const { setPost } = primarypageSlice.actions;

export const data = ( state ) => state.primarypage.data;
export const loading  = ( state ) => state.primarypage.loading;

export default primarypageSlice.reducer;
