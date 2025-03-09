// src/pages/DashboardPage.js
import React from 'react';
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Box
} from '@mui/material';

function DashboardPage() {
  // This could come from a real API or state
  const mockInterviews = [
    { id: 1, role: 'Frontend Developer', date: '2025-02-28' },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        Create and start your AI Mockup Interview
      </Typography>
      <Box sx={{ mt: 3, mb: 3 }}>
        <Button variant="contained" color="primary" href="/setup">
          + Add New
        </Button>
      </Box>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        Previous Mock Interviews
      </Typography>
      {mockInterviews.map((item) => (
        <Card key={item.id} sx={{ mb: 2 }}>
          <CardContent
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Box>
              <Typography variant="subtitle1">
                {item.role}
              </Typography>
              <Typography variant="caption">
                {item.date}
              </Typography>
            </Box>
            <Box>
              <Button variant="outlined" color="success" sx={{ mr: 1 }}>
                Feedback
              </Button>
              <Button variant="contained" color="primary" href="/setup">
                Start
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default DashboardPage;
