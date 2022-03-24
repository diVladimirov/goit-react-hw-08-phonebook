import Navigation from './Navigation/Navigation';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';

import { AppBar, Toolbar } from '@mui/material';

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
