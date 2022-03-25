import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box component="main">
      <Container>
        <Box>
          <Typography sx={{ textAlign: 'center' }} variant="h1">
            Phonebook App
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Grid container spacing={3} sx={{ marginBottom: '15px' }}>
              <Grid item md={4}>
                <Card
                  sx={{
                    height: '100%',
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://picsum.photos/200/300?random=1"
                    alt="picsum"
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      Lorem ipsum
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card
                  sx={{
                    height: '100%',
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://picsum.photos/200/300?random=2"
                    alt="picsum"
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      Lorem ipsum
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card
                  sx={{
                    height: '100%',
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://picsum.photos/200/300?random=3"
                    alt="picsum"
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      Lorem ipsum
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Button variant="contained">
              <Link to="/login">Lets try!</Link>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
