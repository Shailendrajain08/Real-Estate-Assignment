import { createAsyncThunk } from '@reduxjs/toolkit';
import { Signup, CheckEmailExists, CheckUserNameExists, Login } from '../services/UserApi';

export const SignupUser = createAsyncThunk(
  'user/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const emailExists = await CheckEmailExists(userData.email);
      const userNameExists = await CheckUserNameExists(userData.userName)
      if (emailExists) {
        return rejectWithValue('Email already exists!');
      }
      if (userNameExists) {
        return rejectWithValue('UserName already exists!');
      }
      const response = await Signup(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const LoginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const emailExists = await CheckEmailExists(credentials.email);
      if (emailExists) {
        const response = await Login(credentials);
        if (response.data.length > 0) {
          return response.data[0];
        } else {
          return rejectWithValue('Invalid email or password');
        }
      } else {
        return rejectWithValue('Email does not exists');
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
