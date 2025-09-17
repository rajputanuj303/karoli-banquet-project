import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>Karoli Banquet</h4>
        <p>Making your events memorable since 2020</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#halls">Venues</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-links">
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="Instagram">📷</a>
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="LinkedIn">💼</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2025 Karoli Banquet. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
