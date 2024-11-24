import React, { useMemo } from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { 
  AccountCircle, 
  AttachMoney, 
  Assignment,
  Timeline 
} from '@mui/icons-material';
import Dashnav from './Dashnav';

const Dashboard = () => {
  // Memoize card styles to prevent recalculation on re-renders
  const baseCardStyle = useMemo(() => ({
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 2,
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: 4
    }
  }), []);

  const cardData = useMemo(() => [
    {
      icon: AccountCircle,
      iconColor: '#1976d2',
      bgcolor: '#e3f2fd',
      title: 'Total Users',
      value: '2,300',
      color: 'primary'
    },
    {
      icon: AttachMoney,
      iconColor: '#2e7d32',
      bgcolor: '#e8f5e9',
      title: 'Revenue',
      value: '$34,245',
      color: 'success'
    },
    {
      icon: Assignment,
      iconColor: '#ed6c02',
      bgcolor: '#fff3e0', 
      title: 'Projects',
      value: '156',
      color: 'warning'
    },
    {
      icon: Timeline,
      iconColor: '#d81b60',
      bgcolor: '#fce4ec',
      title: 'Growth',
      value: '+15%',
      color: 'error'
    }
  ], []);

  return (
    <>
      <Dashnav />
      <Container maxWidth="lg" sx={{ mt: 8, mb: 4, ml: '256px' }}>
        <Grid container spacing={4}>
          {cardData.map((card, index) => {
            const Icon = card.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    ...baseCardStyle,
                    bgcolor: card.bgcolor
                  }}
                >
                  <Icon sx={{ fontSize: 48, color: card.iconColor, mb: 2 }} />
                  <Typography component="h2" variant="h6" color={card.color} gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography component="p" variant="h3" fontWeight="bold">
                    {card.value}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}

          <Grid item xs={12}>
            <Paper 
              elevation={3}
              sx={{ 
                p: 4,
                borderRadius: 2,
                minHeight: '300px'
              }}
            >
              <Typography component="h2" variant="h5" color="primary" gutterBottom sx={{ mb: 3 }}>
                Recent Activity
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 8 }}>
                No recent activities to display.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;