import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login'; // Página de login
import SignUp from './SignUp'; // Página de signup

const App: React.FC = () => {
  useEffect(() => {
     
    const currentPath = window.location.pathname;
    if (currentPath === "/signup") {
      document.title = "Sign Up"; // Quando a página for de signup
    } else {
      document.title = "Login"; // Quando for a página de login
    }
  }, []);  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
