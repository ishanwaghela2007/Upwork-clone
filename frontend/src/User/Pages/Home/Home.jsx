import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box
} from '@mui/material';
import Profile from './profile';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const handleLogout = () => {
    axios.get(`${import.meta.env.VITE_BASEURL_URL}/api/auth/logout`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    })
    .catch((error) => {
      // Handle error here
      console.error('Logout failed', error);
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Freelance India
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Find the perfect freelance services for your business
          </Typography>
        </div>
        <Button 
          variant="contained" 
          color="error"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="240"
              image="/path-to-image.jpg"
              alt="Freelancing"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Find Work
              </Typography>
              <Typography variant="body1" paragraph>
                Browse thousands of job opportunities and connect with clients looking for your skills.
              </Typography>
              <Button variant="contained" color="primary">
                Browse Jobs
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="240"
              image="/path-to-image.jpg"
              alt="Hire Freelancers"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Hire Talent
              </Typography>
              <Typography variant="body1" paragraph>
                Post a job and hire top freelancers for any project, big or small.
              </Typography>
              <Button variant="contained" color="primary">
                Post a Job
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Profile />
      </Box>
    </Container>
  );
};

export default Home;