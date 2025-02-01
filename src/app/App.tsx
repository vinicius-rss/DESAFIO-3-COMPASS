import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from '../Login'; 
import SignUp from '../SignUp'; 
import Home from '../pages/home/Home.tsx'; 

const App: React.FC = () => {
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/signup") {
      document.title = "Sign Up"; // para quando a página for de signup
    } else if (currentPath === "/home") {
      document.title = "Home"; // para quando for a página Home
    } else {
      document.title = "Login"; // para quando for a página de login
    }
  }, []);
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
