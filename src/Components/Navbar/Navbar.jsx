import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>
      <img src={logo} alt="Website Logo" className="navbar-logo" />
      <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-230} duration={500} onClick={() => setMenuOpen(false)}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about-container" smooth={true} offset={-80} duration={500} onClick={() => setMenuOpen(false)}>
            About us
          </Link>
        </li>
        <li>
          <Link to="photos-container" smooth={true} offset={-190} duration={500} onClick={() => setMenuOpen(false)}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonial" smooth={true} offset={-230} duration={500} onClick={() => setMenuOpen(false)}>
            Testimonials
          </Link>
        </li>
        <li className="contact-button">
          <Link to="contact-info" smooth={true} offset={-100} duration={500} onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </li>

        {/* Close Button */}
        <li className="close-button" onClick={() => setMenuOpen(false)}>
          <span>&times;</span> {/* "×" symbol for the close button */}
        </li>
      </ul>

      {/* Hamburger Button */}
      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
