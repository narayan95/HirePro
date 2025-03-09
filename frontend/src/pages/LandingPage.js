// src/pages/LandingPage.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  Card,
  CardContent,
} from '@mui/material';

function LandingPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: '#f8f9fa',
          py: 8,
          textAlign: 'center',
          backgroundImage: 'url("https://picsum.photos/1600/900?blur=3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold">
            Ace Your Next Interview
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, mb: 4 }}>
            Practice with AI-powered mock interviews and get personalized feedback
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/dashboard"
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Features
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Our AI Mock Interview platform offers a range of powerful features:
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  AI Mock Interviews
                </Typography>
                <Typography variant="body2">
                  Experience realistic interview scenarios with our advanced AI.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Instant Feedback
                </Typography>
                <Typography variant="body2">
                  Get instant, personalized feedback to improve your performance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Comprehensive Reports
                </Typography>
                <Typography variant="body2">
                  Receive detailed reports highlighting your strengths and weaknesses.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
            What Our Users Say
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                    "The AI mock interviews were incredibly helpful. I felt much more confident going into my real interview."
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mt: 1 }}>
                    - Alex Johnson
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                    "The feedback was so on-point and helped me improve my answers. Highly recommend!"
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mt: 1 }}>
                    - Sarah Williams
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Form */}
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Have any questions? Reach out to us and we'll get back to you as soon as possible.
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField label="Your Name" variant="outlined" fullWidth />
          <TextField label="Your Email" variant="outlined" fullWidth />
          <TextField label="Your Message" variant="outlined" multiline rows={4} fullWidth />
          <Button variant="contained" color="primary" sx={{ alignSelf: 'flex-end' }}>
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default LandingPage;
