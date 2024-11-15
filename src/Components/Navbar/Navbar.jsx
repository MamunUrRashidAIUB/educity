import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className={"navbar"}>
      <img src={logo} alt="Website Logo" className="navbar-logo" />
      <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-230} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about-container" smooth={true} offset={-80} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link
            to="photos-container"
            smooth={true}
            offset={-190}
            duration={500}
          >
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonial" smooth={true} offset={-230} duration={500}>
            Testimonials
          </Link>
        </li>
        <li className="contact-button">
          <Link to="contact-info" smooth={true} offset={-100} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
