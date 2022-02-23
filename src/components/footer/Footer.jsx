import './footer.css';

const Footer = () => {
    return (
      <div className="footer">
        <div className="footer__container">
          <div className="footer__logo">
            <h1>UrbanHexad</h1>
          </div>
          <div className="footer__links">
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/how">How it Works</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Footer;
