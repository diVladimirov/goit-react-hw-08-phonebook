import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import contactOperations from '../redux/contacts/contactsOperations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>ContactsPage</h1>
    </div>
  );
};

export default ContactsPage;
