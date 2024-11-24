import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Button
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

const Profile = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Card>
        <CardContent>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Avatar
              sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
              alt="Profile Picture"
              src="/path-to-profile-pic.jpg"
            />
            <Typography variant="h4" gutterBottom>
              John Doe
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Full Stack Developer
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ mr: 1 }} color="primary" />
                <Typography>john.doe@example.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon sx={{ mr: 1 }} color="primary" />
                <Typography>+1 234 567 8900</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationIcon sx={{ mr: 1 }} color="primary" />
                <Typography>New York, USA</Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" paragraph>
                Experienced full stack developer with a passion for creating elegant solutions.
                Specialized in React, Node.js, and cloud technologies.
              </Typography>
              <Button variant="contained" color="primary">
                Edit Profile
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;