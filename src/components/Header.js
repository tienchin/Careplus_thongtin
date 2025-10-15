
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import ThemeSwitcher from './ThemeSwitcher'; 

function Header() {
  return (
    <header className="app-header">
      <div className="logo-title">
        <h1>CarePlus</h1>
        <span>Tin tức & Kiến thức Y tế</span>
      </div>
      <nav className="main-nav">
        <Link to="/">Trang chủ</Link>
        <Link to="/articles">Bài viết</Link>
        <Link to="/contact">Liên hệ</Link>
      </nav>
      <div className="header-actions"> 
        <ThemeSwitcher /> 
        <Link to="/login" className="user-icon-link">
          <FaUser />
        </Link>
      </div>
    </header>
  );
}

export default Header;