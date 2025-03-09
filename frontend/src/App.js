// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import InterviewSetupPage from './pages/InterviewSetupPage';
import InterviewQuestionPage from './pages/InterviewQuestionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/setup" element={<InterviewSetupPage />} />
        <Route path="/interview" element={<InterviewQuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
