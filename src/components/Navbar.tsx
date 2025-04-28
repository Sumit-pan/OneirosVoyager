import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="nav">
            <Link to="/" className="logo">
              <img src="" alt="" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button">
            <button onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-nav-links">
          <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>About</Link>
          <Link to="/projects" className="mobile-nav-link" onClick={toggleMenu}>Projects</Link>
          <Link to="/contact" className="mobile-nav-link" onClick={toggleMenu}>Contact</Link>
          <Link to="/blog" className="mobile-nav-link" onClick={toggleMenu}>Blog</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
