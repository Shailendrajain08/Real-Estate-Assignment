import { createSlice } from '@reduxjs/toolkit';
import { SignupUser } from './UserThunks';

const UserSlice  = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    userInfo: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SignupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(SignupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(SignupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default UserSlice;
