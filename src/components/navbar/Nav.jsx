import React from 'react';
import './nav.css';

const Nav = () => {
    return (
      <div className="navbar">
        <div className="logo">
          <h1>UrbanHexad</h1>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">
                <span className="box">Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Nav;
