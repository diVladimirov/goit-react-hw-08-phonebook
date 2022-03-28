import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/contactsReducers';

import { Box, TextField } from '@mui/material';

const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
    <Box
      component="form"
      sx={{
        my: '16px',
      }}
    >
      <TextField
        fullWidth
        type="search"
        name="filter"
        label="Type name to find"
        variant="standard"
        onChange={handleChange}
      />
    </Box>
  );
};

export default ContactsFilter;
