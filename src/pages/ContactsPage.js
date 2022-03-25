import { useSelector } from 'react-redux';
import ContactsForm from 'components/Contacts/Form/ContactsForm';
import ContactsList from 'components/Contacts/List/ContactsList';
import ContactsFilter from 'components/Contacts/Filter/ContactsFilter';
import Modal from 'components/Modal/Modal';
import { Box, Container } from '@mui/material';

const ContactsPage = () => {
  const showModal = useSelector(state => state.contacts.showModal);
  return (
    <>
      <Box component="main">
        <Container>
          <ContactsFilter />
          <ContactsList />
          <ContactsForm />
        </Container>
      </Box>
      {showModal && <Modal />}
    </>
  );
};

export default ContactsPage;
