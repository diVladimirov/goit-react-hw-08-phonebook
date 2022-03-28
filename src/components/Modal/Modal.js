import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import contactsOperations from '../../redux/contacts/contactsOperations';
import { Box, Grid, Button, TextField, Typography } from '@mui/material';
import { closeModal } from 'redux/contacts/contactsReducers';

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const editContact = useSelector(state => state.contacts.editContact);

  useEffect(() => {
    setId(editContact[0].id);
    setName(editContact[0].name);
    setNumber(editContact[0].number);
  }, [editContact]);

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
    dispatch(contactsOperations.updateContact({ id, name, number }));
    dispatch(closeModal());
  };

  return createPortal(
    // <div>
    //   <div>
    //     <form onSubmit={handleSubmit}>
    //       <label>
    //         Name
    //         <input
    //           type="text"
    //           value={name}
    //           onChange={handleChange}
    //           name="name"
    //           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //           required
    //         />
    //       </label>
    //       <label>
    //         Number
    //         <input
    //           type="tel"
    //           value={number}
    //           onChange={handleChange}
    //           name="number"
    //           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //           required
    //         />
    //       </label>
    //       <button type="submit">Save</button>
    //       <button type="button" onClick={() => dispatch(closeModal())}>
    //         Close
    //       </button>
    //     </form>
    //   </div>
    // </div>,
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
        Edit contact
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
          onClick={handleSubmit}
          sx={{ mt: 3, mb: 2 }}
        >
          Save edit contact
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={() => dispatch(closeModal())}
          sx={{ mb: 2 }}
        >
          Close
        </Button>
      </Box>
    </Box>,
    modalRoot
  );
};

export default Modal;
