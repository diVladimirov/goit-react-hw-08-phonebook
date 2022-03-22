import { useSelector } from 'react-redux';
import ContactsForm from 'components/Contacts/Form/ContactsForm';
import ContactsList from 'components/Contacts/List/ContactsList';
import ContactsFilter from 'components/Contacts/Filter/ContactsFilter';
import Modal from 'components/Modal/Modal';

const ContactsPage = () => {
  const showModal = useSelector(state => state.contacts.showModal);
  return (
    <>
      <div>
        <h1>ContactsPage</h1>
        <ContactsFilter />
        <ContactsList />
        <ContactsForm />
      </div>
      {showModal && <Modal />}
    </>
  );
};

export default ContactsPage;
