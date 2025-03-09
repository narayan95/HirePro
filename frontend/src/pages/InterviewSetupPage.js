// src/pages/InterviewSetupPage.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function InterviewSetupPage() {
  const navigate = useNavigate();
  const [jobRole, setJobRole] = useState('Frontend Developer');
  const [jobStack, setJobStack] = useState('React, Next');
  const [experience, setExperience] = useState('1');

  const handleStartInterview = () => {
    // You could store these values in context or local storage
    // For now, we just navigate to /interview
    navigate('/interview');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Let's Get Started
      </Typography>
      <Card sx={{ mt: 2, mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Job Role/Job Position: {jobRole}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Job Description/Job Stack: {jobStack}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Years of Experience: {experience}
          </Typography>
          <Box
            sx={{
              backgroundColor: '#fffae5',
              padding: 2,
              borderRadius: 1,
              mt: 2,
              mb: 2
            }}
          >
            <Typography variant="body1" sx={{ color: '#555' }}>
              <strong>Information:</strong><br />
              Enable Video Web Cam and Microphone to start your AI generated mock interview.
              It asks 5 questions which you can answer and at the last you will get
              the feedback on the basis of your answer. <br /><br />
              <em>NOTE:</em> We never record your video; webcam access is used only
              to simulate a real interview environment. You can disable it at any
              time if you want.
            </Typography>
          </Box>

          {/* Example input fields for customizing job role */}
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              label="Job Role"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              fullWidth
            />
            <TextField
              label="Job Stack"
              value={jobStack}
              onChange={(e) => setJobStack(e.target.value)}
              fullWidth
            />
            <TextField
              label="Years of Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              fullWidth
            />
          </Box>

          <Button variant="contained" color="primary" onClick={handleStartInterview}>
            Start Interview
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default InterviewSetupPage;
