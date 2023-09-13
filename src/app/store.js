import { configureStore } from '@reduxjs/toolkit';
import mainpageReducer from '../features/primaryPage/mainpageSlice';
import userReducer from '../features/user/userSlice'


export const store = configureStore({
  reducer: {
    mainpage: mainpageReducer,
    user: userReducer,
  },
});
