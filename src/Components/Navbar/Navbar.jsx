import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Website Logo" className="navbar-logo" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="contact-button">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
