import { configureStore } from '@reduxjs/toolkit';
import UserSlice from '../features/user/UserSlice';

export const Store = configureStore({
  reducer: {
    user: UserSlice.reducer,
  },
});