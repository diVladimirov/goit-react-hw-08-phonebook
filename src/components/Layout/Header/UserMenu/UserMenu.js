import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../../../redux/auth/authOperations';

import { Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  return (
    <div>
      <span>Hello, {email}!</span>
      <Button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        variant="contained"
        sx={{ marginLeft: '16px' }}
      >
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
