import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice'
import primarypageReducer from '../features/main/mainpageSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    primarypage: primarypageReducer
  },
});