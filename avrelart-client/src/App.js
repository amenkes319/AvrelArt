import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Paintings from './pages/Paintings';
import Photography from './pages/Photography';
import Exhibitions from './pages/Exhibitions';
import AwardsAndPublications from './pages/Awards';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/paintings/landscapes" element={<Paintings />} />
        <Route path="/paintings/abstracts" element={<Paintings />} />
        <Route path="/paintings/worksonpaper" element={<Paintings />} />
        <Route path="/paintings/italyseries" element={<Paintings />} />
        <Route path="/paintings/unprecedentedtimes" element={<Paintings />} />
        <Route path="/paintings/assemblages" element={<Paintings />} />
        <Route path="/photographs/landscapes" element={<Photography />} />
        <Route path="/photographs/portraits" element={<Photography />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/awards-publications" element={<AwardsAndPublications />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
