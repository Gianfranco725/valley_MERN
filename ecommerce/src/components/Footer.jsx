import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="row">
          <div className="col">
            <Link to="/" className="footer-logo">
              <h4 className="logo-footer">Valley</h4>
            </Link>
            <p className="copyright">
              <small>© 2023</small>
            </p>
          </div>
          <div className="col">
            <p className="footer-titles">Company</p>
            <ul>
              <li>
                <Link to="/">Shipping and Delivery</Link>
              </li>
              <li>
                <Link to="/">Returns</Link>
              </li>
              <li>
                <Link to="/">Customers</Link>
              </li>
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <p className="footer-titles">Further Information</p>
            <ul>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Purpose</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <p className="footer-titles">Follow us</p>
            <ul>
              <li>
                <Link to="/">
                  <span className="icon-facebook"></span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="icon-twitter"></span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="icon-linkedin"></span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="icon-medium"></span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="icon-paper-plane"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
