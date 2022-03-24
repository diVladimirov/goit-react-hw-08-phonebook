import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/contactsReducers';

import { Box, TextField } from '@mui/material';

const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
    <Box component="form">
      <TextField
        type="text"
        name="filter"
        label="Type name to find"
        variant="outlined"
        onChange={handleChange}
      />
    </Box>
  );
};

export default ContactsFilter;
