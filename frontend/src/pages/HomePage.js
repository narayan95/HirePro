// src/pages/HomePage.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleStartInterview = () => {
    navigate('/interview');
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        AI-Powered Interview Practice
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        Get ready to ace your interviews with AI-generated questions and real-time feedback.
      </Typography>
      <Box mt={4}>
        <Button variant="contained" color="primary" size="large" onClick={handleStartInterview}>
          Start Interview
        </Button>
      </Box>
    </Container>
  );
}

export default HomePage;
