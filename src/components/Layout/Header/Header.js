import Navigation from './Navigation/Navigation';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';

import { AppBar, Container, Toolbar } from '@mui/material';

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <AppBar position="static">
      <Container>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
