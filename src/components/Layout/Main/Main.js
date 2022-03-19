import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';

const Main = () => {
  return (
    <main>
      <Container>
        <Outlet />
      </Container>
    </main>
  );
};

export default Main;
