// src/pages/InterviewPage.js
import React, { useState, useEffect } from 'react';
import { 
  Container, Typography, Button, Card, CardContent, 
  TextField, MenuItem, Select, InputLabel, FormControl, 
  Box, Alert 
} from '@mui/material';

function InterviewPage() {
  const [role, setRole] = useState('Frontend Developer');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  // Fetch questions from backend when role changes
  useEffect(() => {
    fetch(`http://localhost:5001/api/questions?role=${encodeURIComponent(role)}`)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.questions);
        setCurrentQuestionIndex(0);
      })
      .catch(err => console.error('Error fetching questions:', err));
  }, [role]);

  const handleSubmitAnswer = () => {
    if (!questions.length) return;

    const currentQuestion = questions[currentQuestionIndex];
    // Post the answer to backend to get dummy AI feedback
    fetch('http://localhost:5001/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: currentQuestion, answer })
    })
      .then(res => res.json())
      .then(data => {
        setFeedback(data.feedback);
        setAnswer('');
        // After showing feedback for 3 seconds, move to the next question
        setTimeout(() => {
          setFeedback('');
          setCurrentQuestionIndex(prev => prev + 1);
        }, 3000);
      })
      .catch(err => console.error('Error posting answer:', err));
  };

  if (!questions.length) {
    return (
      <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h5">Loading questions...</Typography>
      </Container>
    );
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4" gutterBottom>Interview Complete!</Typography>
        <Typography variant="body1">You've answered all the questions.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="role-select-label">Select Role</InputLabel>
          <Select
            labelId="role-select-label"
            value={role}
            label="Select Role"
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
            <MenuItem value="Backend Developer">Backend Developer</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6">
            Question {currentQuestionIndex + 1} of {questions.length}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {questions[currentQuestionIndex]}
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ mt: 3 }}>
        <TextField
          label="Your Answer"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </Box>
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Button variant="contained" onClick={handleSubmitAnswer}>Submit Answer</Button>
      </Box>
      {feedback && (
        <Box sx={{ mt: 2 }}>
          <Alert severity="info">{feedback}</Alert>
        </Box>
      )}
    </Container>
  );
}

export default InterviewPage;
