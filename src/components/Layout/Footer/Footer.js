import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2">
      {'Copyright © '}
      <Link to="/">Phonebook</Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme => theme.palette.primary.main,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">Made by Vadim Vladimirov</Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
