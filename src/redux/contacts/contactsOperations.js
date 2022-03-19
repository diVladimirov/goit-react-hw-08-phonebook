import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContactsStatus',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operation = { fetchContacts };
export default operation;
