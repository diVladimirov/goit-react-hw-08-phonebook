import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  IconButton,
  Box,
  Tooltip,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// import ContactsListLi from '../ListItem/ContactsListLi';
import contactsOpearations from '../../../redux/contacts/contactsOperations';
import { openModal } from 'redux/contacts/contactsReducers';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const ContactsList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {/* <div>
        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactsListLi key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      </div> */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredContacts.map(({ id, name, number }) => (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    {number}
                    <Stack direction="row">
                      <Tooltip title="Edit">
                        <IconButton onClick={() => dispatch(openModal(id))}>
                          <EditOutlinedIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          onClick={() =>
                            dispatch(contactsOpearations.deleteContact(id))
                          }
                        >
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ContactsList;
