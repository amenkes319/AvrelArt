import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import LandscapesPaintings from './pages/paintings/Landscapes';
import Abstracts from './pages/paintings/Abstracts';
import WorksOnPaper from './pages/paintings/WorksOnPaper';
import ItalySeries from './pages/paintings/ItalySeries';
import UnprecedentedTimes from './pages/paintings/UnprecedentedTimes';
import Assemblages from './pages/paintings/Assemblages';
import LandscapesPhotographs from './pages/photographs/Landscapes';
import Portraits from './pages/photographs/Portraits';
import Exhibitions from './pages/Exhibitions';
import AwardsAndPublications from './pages/Awards';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/paintings/landscapes" element={<LandscapesPaintings />} />
        <Route path="/paintings/abstracts" element={<Abstracts />} />
        <Route path="/paintings/works-on-paper" element={<WorksOnPaper />} />
        <Route path="/paintings/italy-series" element={<ItalySeries />} />
        <Route path="/paintings/unprecedented-times" element={<UnprecedentedTimes />} />
        <Route path="/paintings/assemblages" element={<Assemblages />} />
        <Route path="/photographs/landscapes" element={<LandscapesPhotographs />} />
        <Route path="/photographs/portraits" element={<Portraits />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/awards-and-publications" element={<AwardsAndPublications />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
