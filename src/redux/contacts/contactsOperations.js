import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContactsStatus',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      // console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const createNewContact = createAsyncThunk(
  'contacts/createNewContactStatus',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContactStatus',
  async (contactId, { rejectWithValue }) => {
    try {
      const { status } = await axios.delete(`/contacts/${contactId}`);
      if (status !== 200) {
        throw new Error('Server error!');
      }
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const updateContact = createAsyncThunk(
  'contacts/updateContactStatus',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operation = {
  fetchContacts,
  createNewContact,
  deleteContact,
  updateContact,
};
export default operation;
