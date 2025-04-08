import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Problems from './pages/Problems';
import Submissions from './pages/Submissions';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/submissions" element={<Submissions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
