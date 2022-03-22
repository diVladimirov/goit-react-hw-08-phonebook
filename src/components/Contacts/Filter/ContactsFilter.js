import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/contactsReducers';

const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
    <form>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          onChange={handleChange}
          placeholder="Input name to find"
        />
      </label>
    </form>
  );
};

export default ContactsFilter;
