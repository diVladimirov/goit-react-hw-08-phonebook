import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactOperations from '../../../redux/contacts/contactsOperations';
import { Box, Button, Typography, Modal, TextField, Grid } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const nameToAdd = items.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    // console.log(nameToAdd);
    if (nameToAdd) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(contactOperations.createNewContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <>
      <Button
        onClick={handleOpenModal}
        variant="contained"
        sx={{ marginBottom: 2 }}
        startIcon={<AddCircleOutlineOutlinedIcon />}
      >
        Add new contact
      </Button>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
            Create new contact
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  type="text"
                  value={name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="number"
                  required
                  fullWidth
                  id="number"
                  label="Number"
                  type="tel"
                  value={number}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleCloseModal}
              sx={{ mb: 2 }}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ContactsForm;
