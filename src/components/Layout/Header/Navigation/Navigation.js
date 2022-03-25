import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <nav>
      <Box component="ul" sx={{ display: 'flex' }}>
        <Typography variant="h4" component="li" sx={{ marginRight: '16px' }}>
          <Link to="/">Phonebook</Link>
        </Typography>

        {isLoggedIn && (
          <Typography variant="h5" component="li">
            <Button variant="contained">
              <Link to="/contacts">Contacts</Link>
            </Button>
          </Typography>
        )}
      </Box>
    </nav>
  );
};

export default Navigation;
