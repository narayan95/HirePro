// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const questionsDB = {
  'Frontend Developer': [
    "What is the Virtual DOM and how does it work in React?",
    "Can you explain the difference between props and state in React?",
    "How do you manage component lifecycle in React?",
    "What are hooks in React and why are they useful?",
    "How do you optimize a React application for performance?"
  ],
  'Backend Developer': [
    "What is RESTful API design and why is it important?",
    "How does Node.js handle asynchronous operations?",
    "Explain middleware in Express.js.",
    "What is your approach to error handling in Node applications?",
    "How do you secure a Node.js application?"
  ]
};

app.get('/api/questions', (req, res) => {
  const role = req.query.role || 'Frontend Developer';
  const questions = questionsDB[role] || questionsDB['Frontend Developer'];
  res.json({ questions });
});

app.post('/api/feedback', (req, res) => {
  const { question, answer } = req.body;
  // Generate dummy feedback (in a real app, you'd call an AI API here)
  const feedback = `Your answer to "${question}" was well thought-out. Consider adding more details for a complete response.`;
  res.json({ feedback });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
