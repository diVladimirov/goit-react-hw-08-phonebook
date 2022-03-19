import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../../../redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  return (
    <div>
      <span>Hello, {email}!</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
