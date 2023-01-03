import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-transparent ms-auto navbar-right">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand brand">Denis&apos; foodies</Link>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav roja">
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/menu" className="nav-item nav-link">
              Menu
            </Link>
            <Link to="/about" className="nav-item nav-link">About us</Link>
            <Link to="/work" className="nav-item nav-link">Work</Link>
            <Link to="/testimonials" className="nav-item nav-link">Testimonial</Link>
            <a href="www.google.com" className="nav-item nav-link">
              <FontAwesomeIcon icon={faShoppingCart} aria-hidden="true" />
            </a>
            <Link to="/contact" className="nav-item nav-link">Booking Now</Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
