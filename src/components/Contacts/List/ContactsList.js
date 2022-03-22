import { useSelector } from 'react-redux';
import ContactsListLi from '../ListItem/ContactsListLi';

const ContactsList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactsListLi key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
