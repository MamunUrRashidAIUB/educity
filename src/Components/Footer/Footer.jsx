import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Edusity. All rights reserved.</p>
        <div className="footer-links">
          <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Services</a>
          <span>|</span>
          <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

