import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const createNewUser = createAsyncThunk(
  'auth/createNewUserStatus',
  async (newUserData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', newUserData);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  'auth/logInStatus',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logOutStatus',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  'auth/refreshStatus',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = { createNewUser, logIn, logOut, fetchCurrentUser };
export default operations;
