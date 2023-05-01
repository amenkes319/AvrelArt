import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const prevWidthRef = useRef(null);
    const MOBILE_WIDTH = 900;

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            setIsMobile(width < MOBILE_WIDTH);
            const prevWidth = prevWidthRef.current;
            if (prevWidth < MOBILE_WIDTH && width >= MOBILE_WIDTH) {
                setShowMobileMenu(false);
            }
            document.body.classList.add('no-transition');
            setTimeout(() => {
                document.body.classList.remove('no-transition');
            }, 0);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo">AVREL ART</Link>
            <div className="nav-menu-container">
                <div className={`nav-menu ${!isMobile || showMobileMenu ? 'show' : 'hide'}`}>
                    <Link to="/" className="nav-item">HOME</Link>
                    <Link to="/about" className="nav-item">ABOUT</Link>
                    <div className="nav-dropdown">
                        <button className="nav-item">PAINTINGS<FaCaretDown /></button>
                        <div className="dropdown-content">
                            <Link to="/paintings/landscapes">LANDSCAPES</Link>
                            <Link to="/paintings/abstracts">ABSTARCTS</Link>
                            <Link to="/paintings/worksonpaper">WORKS ON PAPER</Link>
                            <Link to="/paintings/italyseries">ITALY SERIES</Link>
                            <Link to="/paintings/unprecedentedtimes">UNPRECENDETED TIMES</Link>
                            <Link to="/paintings/assemblage">ASSEMBLAGES</Link>
                        </div>
                    </div>
                    <div className="nav-dropdown">
                        <button className="nav-item">PHOTOGRAPHY<FaCaretDown /></button>
                        <div className="dropdown-content">
                            <Link to="/photographs/landscapes">LANDSCAPES</Link>
                            <Link to="/photographs/portraits">PORTRAITS</Link>
                        </div>
                    </div>
                    <Link to="/exhibitions" className="nav-item">EXHIBITIONS</Link>
                    <Link to="/awards-publications" className="nav-item">AWARDS AND PUBLICATIONS</Link>
                </div>
            </div>
            <button className="hamburger" onClick={toggleMobileMenu}>
                <i className="fas fa-bars"></i>
            </button>
        </nav>
    );
};

export default Navbar;
