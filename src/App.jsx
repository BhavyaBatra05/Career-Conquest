import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";
import Profile from "./components/Profile";
import Home from "./components/HomePage";
import CoursesPage from "./components/CoursesPage";
import TestPage from "./components/TestPage";
import SignUpForm from './components/SignUpForm';
import AssessmentSelectionPage from "./components/AssessmentSelection";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/quiz" element={<TestPage />} />
        <Route path="/assessments" element={<AssessmentSelectionPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
