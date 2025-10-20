// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'; // Import Navigate
import { GoogleOAuthProvider } from '@react-oauth/google';
import { FaUser, FaApple, FaFacebookF } from 'react-icons/fa';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import DailyNewsSection from './components/DailyNewsSection';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';

const GOOGLE_CLIENT_ID = '193415518927-3k41bn1k88kmbhveacvpkebgs6vr1oa6.apps.googleusercontent.com';

const PrivacyPolicyPage = () => <div>Trang Chính sách bảo mật</div>;
const TermsOfServicePage = () => <div>Trang Điều khoản sử dụng</div>;
const ContactPage = () => <div>Trang Liên hệ</div>;
const RegisterPage = () => <div>Trang Đăng ký</div>;

function App() {
  const [allArticles, setAllArticles] = useState({ articles: [], dailyNews: [] });
  const [loadingData, setLoadingData] = useState(true);
  const [errorData, setErrorData] = useState(null);
  const [user, setUser] = useState(null); // State để lưu thông tin người dùng đã đăng nhập

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }

    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAllArticles(data);
        setLoadingData(false);
      } catch (err) {
        setErrorData("Lỗi khi tải dữ liệu.");
        setLoadingData(false);
        console.error("Fetch data error:", err);
      }
    };
    fetchData();
  }, []);

  const getArticlesByType = (type) => {
    if (loadingData || errorData || !allArticles[type]) {
      return [];
    }
    return allArticles[type].sort((a, b) => b.id - a.id);
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userInfo');
    setUser(null); // Xóa user khỏi state
    alert("Bạn đã đăng xuất.");
    // Không cần navigate ở đây, vì Header sẽ điều hướng sau khi logout
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="App">
        <Header user={user} logout={logout} /> {/* Truyền user và logout */}
        <main className="app-main">
          <SearchBar />

          <Routes>
            <Route path="/" element={<HomePageContent />} />
            <Route path="/article/:id" element={<ArticleDetail allData={allArticles} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/search" element={<SearchPage allArticles={allArticles.articles || []} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Route được bảo vệ: chỉ truy cập được khi có user */}
            <Route path="/profile" element={
              user ? <UserProfile /> : <Navigate to="/login" replace /> 
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
}

// Component riêng cho nội dung trang chủ
const HomePageContent = () => {
  const [allArticles, setAllArticles] = useState({ articles: [], dailyNews: [] });
  const [loadingData, setLoadingData] = useState(true);
  const [errorData, setErrorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAllArticles(data);
        setLoadingData(false);
      } catch (err) {
        setErrorData("Lỗi khi tải dữ liệu.");
        setLoadingData(false);
        console.error("Fetch data error:", err);
      }
    };
    fetchData();
  }, []);

  const getArticlesByType = (type) => {
    if (loadingData || errorData || !allArticles[type]) {
      return [];
    }
    return allArticles[type].sort((a, b) => b.id - a.id);
  };

  return (
    <>
      <ArticleList title="Bài viết mới nhất" articles={getArticlesByType('articles')} />
      <DailyNewsSection title="Tin tức hằng ngày" news={getArticlesByType('dailyNews')} />
      <section className="about-careplus">
        <h2>Về CarePlus</h2>
        <p>Hệ thống Phòng khám quốc tế CarePlus được điều hành bởi Công ty TNHH CityClinic Việt Nam. Những thông tin y khoa trên trang web chỉ dùng để tham khảo, bạn nên liên hệ bác sĩ để được tư vấn trước khi có bất cứ hành động nào.</p>
        <Link to="/about" className="read-more-link-about">Đọc thêm &rarr;</Link>
      </section>
    </>
  );
};

export default App;