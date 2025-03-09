// src/pages/InterviewQuestionPage.js
import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box
} from '@mui/material';
import Webcam from 'react-webcam';

function InterviewQuestionPage() {
  const [questions, setQuestions] = useState([
    "Describe your experience with React.js, including specific components or libraries you’ve used.",
    "What are some challenging projects you’ve worked on?",
    "How do you handle state management in large applications?",
    "Explain the difference between client-side and server-side rendering.",
    "Where do you see yourself improving in the next year?"
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recording, setRecording] = useState(false);

  const webcamRef = useRef(null);

  const handleNextQuestion = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // Example of "recording" toggle (not actually storing video)
  const handleRecordAnswer = () => {
    setRecording((prev) => !prev);
  };

  if (currentIndex >= questions.length) {
    return (
      <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Interview Complete!
        </Typography>
        <Typography variant="body1">
          You've answered all the questions. Great job!
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h5" gutterBottom>
        Question {currentIndex + 1} of {questions.length}
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="body1">
            {questions[currentIndex]}
          </Typography>
        </CardContent>
      </Card>

      {/* Webcam Preview */}
      <Box sx={{ mt: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
        <Box sx={{ width: '50%', border: '1px solid #ccc', position: 'relative' }}>
          <Webcam audio={false} ref={webcamRef} style={{ width: '100%' }} />
          {recording && (
            <Box
              sx={{
                position: 'absolute',
                top: 8,
                left: 8,
                backgroundColor: 'red',
                color: '#fff',
                padding: '4px 8px',
                borderRadius: '4px'
              }}
            >
              Recording...
            </Box>
          )}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            variant={recording ? 'contained' : 'outlined'}
            color="error"
            onClick={handleRecordAnswer}
          >
            {recording ? 'Stop Recording' : 'Record Answer'}
          </Button>
          <Button variant="contained" onClick={handleNextQuestion}>
            Next Question
          </Button>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Note: We’re not actually storing or uploading your video. This is a simulation of a live interview environment.
      </Typography>
    </Container>
  );
}

export default InterviewQuestionPage;
