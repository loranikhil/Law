import React from 'react';
import { Instagram, MessageCircle, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#About' },
    { name: 'Services', href: '#Services' },
    { name: 'Contact', href: '#Contact' }
  ];

  const legalServices = [
    'Corporate Law',
    'Criminal Defense',
    'Family Law',
    'Real Estate'
  ];

  const handleSocialNav = (platform) => {
    const socialUrls = {
      instagram: 'https://instagram.com/your-profile',
      whatsapp: 'https://wa.me/your-number'
    };
    window.open(socialUrls[platform], '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@legalpro.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+15551234567';
  };

  return (
    <footer className="law-footer">
      <div className="law-footer__container">
        
        {/* Main Footer Content */}
        <div className="law-footer__main">
          
          {/* Brand Section */}
          <div className="law-footer__brand">
            <div className="law-footer__brand-content">
              <h3 className="law-footer__logo">Ramoju Law Firm</h3>
              <p className="law-footer__tagline">Professional Legal Solutions</p>
              <p className="law-footer__description">
                Providing expert legal counsel with integrity, dedication, and results-driven approach for over two decades.
              </p>
            </div>
            
            {/* <div className="law-footer__social">
              <h5 className="law-footer__social-title">Follow Us</h5>
              <div className="law-footer__social-buttons">
                <button 
                  className="law-footer__social-btn law-footer__social-btn--instagram"
                  onClick={() => handleSocialNav('instagram')}
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                  <span className="law-footer__social-text">Instagram</span>
                </button>
                <button 
                  className="law-footer__social-btn law-footer__social-btn--whatsapp"
                  onClick={() => handleSocialNav('whatsapp')}
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageCircle size={20} />
                  <span className="law-footer__social-text">WhatsApp</span>
                </button>
              </div>
            </div> */}
          </div>

          {/* Quick Navigation */}
          <div className="law-footer__section">
            <h4 className="law-footer__title">
              <span className="law-footer__title-text">Quick Links</span>
              <div className="law-footer__title-line"></div>
            </h4>
            <nav className="law-footer__nav">
              <ul className="law-footer__nav-list">
                {navLinks.map((link, index) => (
                  <li key={index} className="law-footer__nav-item">
                    <a href={link.href} className="law-footer__nav-link">
                      <ExternalLink size={14} />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal Services */}
          <div className="law-footer__section">
            <h4 className="law-footer__title">
              <span className="law-footer__title-text">Our Services</span>
              <div className="law-footer__title-line"></div>
            </h4>
            <ul className="law-footer__services-list">
              {legalServices.map((service, index) => (
                <li key={index} className="law-footer__services-item">
                  <div className="law-footer__services-bullet"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="law-footer__section">
            <h4 className="law-footer__title">
              <span className="law-footer__title-text">Get In Touch</span>
              <div className="law-footer__title-line"></div>
            </h4>
            <div className="law-footer__contact">
              <div className="law-footer__contact-item">
                <div className="law-footer__contact-icon-wrapper">
                  <MapPin size={18} />
                </div>
                <div className="law-footer__contact-content">
                  <span className="law-footer__contact-label">Address</span>
                  <span className="law-footer__contact-text">Ramoju Law Firm,<br />Hyderabad.</span>
                </div>
              </div>
              
              <button 
                className="law-footer__contact-item law-footer__contact-item--clickable"
                onClick={handlePhoneClick}
                aria-label="Call us"
              >
                <div className="law-footer__contact-icon-wrapper">
                  <Phone size={18} />
                </div>
                <div className="law-footer__contact-content">
                  <span className="law-footer__contact-label">Phone</span>
                  <span className="law-footer__contact-text">+91 95534 10353</span>
                </div>
              </button>
              
              <button 
                className="law-footer__contact-item law-footer__contact-item--clickable"
                onClick={handleEmailClick}
                aria-label="Email us"
              >
                <div className="law-footer__contact-icon-wrapper">
                  <Mail size={18} />
                </div>
                <div className="law-footer__contact-content">
                  <span className="law-footer__contact-label">Email</span>
                  <span className="law-footer__contact-text">ramojulawfirm@gmail.com</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="law-footer__bottom">
          <div className="law-footer__bottom-content">
            <p className="law-footer__copyright">
              © {currentYear} LegalPro. All rights reserved. | Committed to Excellence in Legal Services
            </p>
            <nav className="law-footer__legal-nav">
              <a href="/privacy" className="law-footer__legal-link">Privacy Policy</a>
              <span className="law-footer__separator">•</span>
              <a href="/terms" className="law-footer__legal-link">Terms of Service</a>
              <span className="law-footer__separator">•</span>
              <a href="/disclaimer" className="law-footer__legal-link">Legal Disclaimer</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;