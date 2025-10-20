// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h4>Liên hệ</h4>
          <p>Email: info@careplusvn.com</p>
          <p>
            Điện thoại: 1800 6116
            <a href="tel:0877342668" className="phone-link">
              <FaPhone /> (0877.342.668)
            </a>
          </p>
        </div>
        <div className="footer-social">
          <h4>Theo dõi chúng tôi</h4>
          <a href="https://www.facebook.com/share/1A13zMipxm/" target="_blank" rel="noopener noreferrer" className="social-link facebook">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 CarePlus. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;