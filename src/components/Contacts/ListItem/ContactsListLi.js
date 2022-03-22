import { useDispatch } from 'react-redux';
import contactsOpearations from '../../../redux/contacts/contactsOperations';
import { openModal } from 'redux/contacts/contactsReducers';

const ContactsListLi = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li key={id}>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={() => dispatch(openModal(id))}>
        Edit contact
      </button>
      <button
        type="button"
        onClick={() => dispatch(contactsOpearations.deleteContact(id))}
      >
        Delete contact
      </button>
    </li>
  );
};

export default ContactsListLi;
