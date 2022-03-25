import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/contactsReducers';

import { Box, TextField, Typography } from '@mui/material';

const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: '16px',
      }}
    >
      <Typography sx={{ marginRight: '16px' }} variant="h4">
        Search contact by the name
      </Typography>
      <TextField
        type="search"
        name="filter"
        label="Type name to find"
        variant="outlined"
        onChange={handleChange}
      />
    </Box>
  );
};

export default ContactsFilter;
