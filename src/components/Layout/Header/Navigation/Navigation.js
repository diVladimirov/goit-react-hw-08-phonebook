import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Phonebook</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
