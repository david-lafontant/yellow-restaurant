import React from 'react';
import './header.css';

function Header() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-transparent ms-auto navbar-right">
      <div className="container-fluid">
        <a href="www.google.com" className="navbar-brand brand">Denis&apos; foodies</a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav roja">
            <a href="www.google.com" className="nav-item nav-link">Home</a>
            <a href="www.google.com" className="nav-item nav-link">Package</a>
            <a href="www.google.com" className="nav-item nav-link">About us</a>
            <a href="www.google.com" className="nav-item nav-link">Contact Us</a>
            <a href="www.google.com" className="nav-item nav-link">Cart</a>
            <a href="www.google.com" className="nav-item nav-link">Booking Now</a>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
