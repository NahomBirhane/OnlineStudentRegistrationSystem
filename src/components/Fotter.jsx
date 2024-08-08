import React from "react";
import { Link } from "react-router-dom";
import "../comp_css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h4>POLICY INFO</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li>habesha@minimarketapp</li>
            <li>Sitemap</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Habesha-Commerse</h4>
          <ul>
            <li>Product App</li>
            <li>Sell on our Website</li>
            <li>Media Enquiries</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>POPULAR LINKS</h4>
          <ul>
            <li>Eletronics</li>
            <li>Habesha Dress</li>
            <li>Books</li>
          </ul>
        </div>
        <div className="footer-section">
          <p className="admin-link">
            <Link
              to="/admin-Login"
            >
              Admin Access
            </Link>
          </p>
        </div>
      </div>
      <div className="footer-images">
        {/* <div>
          <img src={footer1} alt="Footer 1" />
        </div>
        <div>
          <img src={footer2} alt="Footer 2" />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;