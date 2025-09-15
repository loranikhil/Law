import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Mail, Globe } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [animationClass, setAnimationClass] = useState('');

  const businessHours = [
    { day: 'Mon - Sat', hours: '9:00 AM - 6:00 PM', isOpen: true },
    { day: 'Sunday', hours: 'Closed', isOpen: false }
  ];

  const contactInfo = {
    address: 'Ramoju Law Firm, Opp. Union Bank, X Road, Gajularamaram, Quthbullapur, Hyderabad - 55.',
    phone: '+91 95534 10353', 
    phone2: '+91 99599 10353',
    email: 'ramojulawfirm@gmail.com',
    website: '24/7 (By Appointments)'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('businesshub__pulse-animation');
      setTimeout(() => setAnimationClass(''), 1000);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const getCurrentStatus = () => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 1-6 = Monday-Saturday
    const currentHour = now.getHours();
    
    if (currentDay === 0) { // Sunday
      return { status: 'Closed', className: 'businesshub__status-closed' };
    }
    
    if (currentHour >= 9 && currentHour < 18) {
      return { status: 'Open Now', className: 'businesshub__status-open' };
    }
    
    return { status: 'Closed', className: 'businesshub__status-closed' };
  };

  const currentStatus = getCurrentStatus();

  return (
    <div id="contact" className="businesshub__contact-wrapper">
      <div className="businesshub__title-section">
        <h2 className={`businesshub__main-title ${animationClass}`}>Contact Us</h2>
        <p className="businesshub__subtitle">Get in touch with our team</p>
      </div>

      <div className="businesshub__content-grid">
        <div className="businesshub__info-column">
          <div className="businesshub__details-card">
            <div className="businesshub__info-row">
              <div className="businesshub__icon-wrapper">
                <MapPin size={24} />
              </div>
              <div className="businesshub__text-content">
                <h4 className="businesshub__info-label">Address</h4>
                <p className="businesshub__info-value">{contactInfo.address}</p>
              </div>
            </div>

            <div className="businesshub__info-row">
              <div className="businesshub__icon-wrapper">
                <Phone size={24} />
              </div>
              <div className="businesshub__text-content">
                <h4 className="businesshub__info-label">Phone</h4>
                <a href={`tel:${contactInfo.phone}`} className="businesshub__direct-link businesshub__phone-link">
                  {contactInfo.phone} 
                </a>
              </div>
            </div>

            <div className="businesshub__info-row">
              <div className="businesshub__icon-wrapper">
                <Mail size={24} />
              </div>
              <div className="businesshub__text-content">
                <h4 className="businesshub__info-label">Email</h4>
                <a href={`mailto:${contactInfo.email}`} className="businesshub__direct-link businesshub__email-link">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="businesshub__info-row">
              <div className="businesshub__icon-wrapper">
                <Clock size={24} />
              </div>
              <div className="businesshub__text-content">
                <h4 className="businesshub__info-label">Business Hours </h4>
                <a className="businesshub__direct-link businesshub__website-link" target="_blank" rel="noopener noreferrer">
                  {contactInfo.website}
                </a>
              </div>
            </div>
          </div>

          {/* <div className="businesshub__schedule-card">
            <div className="businesshub__schedule-header">
              <Clock size={24} />
              <div className="businesshub__schedule-info">
                <h4 className="businesshub__schedule-title">Business Hours</h4>
                <span className={`businesshub__current-status ${currentStatus.className}`}>
                  {currentStatus.status}
                </span>
              </div>
            </div>
            
            <div className="businesshub__hours-display">
              {businessHours.map((schedule, index) => (
                <div 
                  key={index}
                  className={`businesshub__schedule-row ${!schedule.isOpen ? 'businesshub__closed-schedule' : ''}`}
                >
                  <span className="businesshub__day-label">{schedule.day}</span>
                  <span className={`businesshub__time-display ${!schedule.isOpen ? 'businesshub__closed-time' : ''}`}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        <div className="businesshub__map-column">
          <div className="businesshub__map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.635822985554!2d78.4205459751681!3d17.524889483385962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f005dd9d139%3A0x498f079f29ed6b0!2sRamoju%20Law%20Firm!5e0!3m2!1sen!2sin!4v1757953801876!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Business Location"
            ></iframe>
          </div>
          
          {/* <div className="businesshub__map-badge">
            <div className="businesshub__location-tag">
              <MapPin size={20} />
              <span className="businesshub__location-text">123 Business Street, New York</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;