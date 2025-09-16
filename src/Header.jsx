import React, { useState, useEffect } from 'react';
import { Scale, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`portfolio-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div
          className={`header-logo ${isMobileMenuOpen ? 'hide-on-mobile-open' : ''}`}
          onClick={handleNavClick}
        >
          <Scale className="logo-icon" />
          <span className="logo-text">Ramoju Law Firm</span>
        </div>

        {/* Desktop Nav */}
        <nav className="header-navigation desktop-nav">
          <a href="#Home" className="nav-link" onClick={handleNavClick}>Home</a>
          <a href="#About" className="nav-link" onClick={handleNavClick}>About</a>
          <a href="#Services" className="nav-link" onClick={handleNavClick}>Services</a>
          <a href="#About" className="nav-link" onClick={handleNavClick}>Experience</a>
          <a href="#Contact" className="nav-link" onClick={handleNavClick}>Contact</a>
        </nav>

        {/* Desktop Contact */}
        <div className="header-contact desktop-contact">
          <Phone className="contact-icon" />
          <span className="contact-text">+91 95534 10353</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <div className="mobile-logo">
              <Scale className="logo-icon" />
              <span className="logo-text">Ramoju Law Firm</span>
            </div>
          </div>

          {/* Mobile Nav */}
          <nav className="mobile-navigation">
            <a href="#Home" className="mobile-nav-link" onClick={handleNavClick}>Home</a>
            <a href="#About" className="mobile-nav-link" onClick={handleNavClick}>About</a>
            <a href="#Services" className="mobile-nav-link" onClick={handleNavClick}>Services</a>
            <a href="#About" className="mobile-nav-link" onClick={handleNavClick}>Experience</a>
            <a href="#Contact" className="mobile-nav-link" onClick={handleNavClick}>Contact</a>
          </nav>

          {/* Mobile Footer */}
          <div className="mobile-nav-footer">
            <div className="mobile-contact-info">
              <div className="mobile-contact-item">
                <Phone className="contact-icon" />
                <span>+91 95534 10353</span>
              </div>
            </div>
            <div className="mobile-nav-bg-text">Legal</div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
