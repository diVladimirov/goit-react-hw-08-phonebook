import Navigation from './Navigation/Navigation';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import Container from 'components/Container/Container';

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <header>
      <Container>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </Container>
    </header>
  );
};

export default Header;
