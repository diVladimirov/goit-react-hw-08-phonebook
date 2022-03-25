import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const AuthNavigation = () => {
  return (
    <Box component="ul" sx={{ display: 'flex', alignItems: 'baseline' }}>
      <Typography variant="h6" component="li" sx={{ marginRight: '16px' }}>
        <Button variant="contained">
          <Link to="/login">Login</Link>
        </Button>
      </Typography>
      <Typography variant="h6" component="li">
        <Button variant="contained">
          <Link to="/register">Register</Link>
        </Button>
      </Typography>
    </Box>
  );
};

export default AuthNavigation;
