import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Phonebook</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
