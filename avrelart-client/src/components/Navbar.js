import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Home</Link>
      <div className="nav-menu">
        <Link to="/about" className="nav-item">About</Link>
        <div className="nav-dropdown">
          <button className="nav-item">Paintings</button>
          <div className="dropdown-content">
            <Link to="/paintings/landscapes">Landscapes</Link>
            <Link to="/paintings/abstracts">Abstracts</Link>
            <Link to="/paintings/worksonpaper">Works on Paper</Link>
            <Link to="/paintings/italyseries">Italy Series</Link>
            <Link to="/paintings/unprecedentedtimes">Unprecedented Times</Link>
            <Link to="/paintings/assemblage">Assemblage</Link>
          </div>
        </div>
        <div className="nav-dropdown">
          <button className="nav-item">Photography</button>
          <div className="dropdown-content">
            <Link to="/photographs/landscapes">Landscapes</Link>
            <Link to="/photographs/portraits">Portraits</Link>
          </div>
        </div>
        <Link to="/exhibitions" className="nav-item">Exhibitions</Link>
        <Link to="/awards-publications" className="nav-item">Awards and Publications</Link>
      </div>
    </nav>
  );
};

export default Navbar;
