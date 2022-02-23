import './nav.css';
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
    return (
      <div className="navbar">
        <div className="logo">
          <h1>UrbanHexad</h1>
        </div>
        <div className="nav__links">
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
          <GiHamburgerMenu className="hamburger__menu" />
        </div>
      </div>
    );
}

export default Nav;
