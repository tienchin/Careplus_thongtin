// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { FaUser, FaGoogle, FaApple, FaFacebookF } from 'react-icons/fa';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import DailyNewsSection from './components/DailyNewsSection';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage'; 
import LoginPage from './pages/LoginPage';

const PrivacyPolicyPage = () => <div>Trang Chính sách bảo mật</div>;
const TermsOfServicePage = () => <div>Trang Điều khoản sử dụng</div>;
const ContactPage = () => <div>Trang Liên hệ</div>;
const RegisterPage = () => <div>Trang Đăng ký</div>;

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';

function App() {
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
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="App">
        <Header />
        <main className="app-main">
          <SearchBar />

          <Routes>
            <Route path="/" element={
              <>
                <ArticleList title="Bài viết mới nhất" articles={getArticlesByType('articles')} />
                <DailyNewsSection title="Tin tức hằng ngày" news={getArticlesByType('dailyNews')} /> {/* Truyền dữ liệu */}
                <section className="about-careplus">
                  <h2>Về CarePlus</h2>
                  <p>Hệ thống Phòng khám quốc tế CarePlus được điều hành bởi Công ty TNHH CityClinic Việt Nam. Những thông tin y khoa trên trang web chỉ dùng để tham khảo, bạn nên liên hệ bác sĩ để được tư vấn trước khi có bất cứ hành động nào.</p>
                  <Link to="/about" className="read-more-link-about">Đọc thêm &rarr;</Link>
                </section>
              </>
            } />

            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<div>Trang Chính sách bảo mật</div>} />
            <Route path="/terms" element={<div>Trang Điều khoản sử dụng</div>} />
            <Route path="/search" element={<SearchPage allArticles={allArticles.articles || []} />} />
            <Route path="/contact" element={<div>Trang Liên hệ</div>} />
            <Route path="/login" element={<LoginPage />} /> 
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;