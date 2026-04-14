import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import CursorGlow from './components/CursorGlow.jsx';
import LandingPage from './pages/LandingPage.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import VideoUpload from './pages/VideoUpload.jsx';
import VideoAnalysis from './pages/VideoAnalysis.jsx';
import Dashboard from './pages/Dashboard.jsx';

// Account Wrapper to manage states based on URL
function AccountWrapper() {
  
  return (
    
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="signin" replace />} />
      </Routes>
    
  );
}

// Analysis Wrapper to manage states based on URL
function AnalysisWrapper() {
  
  return (
    
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="upload" element={<VideoUpload />} />
        <Route path="results" element={<VideoAnalysis />} />
        <Route path="*" element={<Navigate to="upload" replace />} />
      </Routes>
    
  );
}

function MainAnimatedRoutes() {
  
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/account/*" element={<AccountWrapper />} />
        <Route path="/analysis/*" element={<AnalysisWrapper />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    
  );
}

function App() {
  return (
    <BrowserRouter>
      <CursorGlow />
      <MainAnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
