// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ManageLands from './pages/ManageLands';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import Sell from './components/sellLand';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/a2z-admin" element={<PrivateRoute element={ManageLands} />} />
        <Route path="/sellProperty" element={<Sell/>}/>
      </Routes>
    </Router>
  );
}

export default App;