import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Karoli Banquet</div>
    <ul className="navbar-links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#halls">Venues</a></li>
      <li><a href="#packages">Packages</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#booking">Book Now</a></li>
    </ul>
  </nav>
);

export default Navbar;
