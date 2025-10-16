// src/components/DailyNewsSection.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArticlePreview from './ArticlePreview';
import './DailyNewsSection.css';

const fetchDailyNews = async () => {
  try {
    const response = await fetch('/data.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.dailyNews ? data.dailyNews.sort((a, b) => b.id - a.id) : [];
  } catch (error) {
    console.error("Error fetching daily news:", error);
    return [];
  }
};

function DailyNewsSection({ title }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDailyNews()
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(err => {
        setError("Không thể tải tin tức hằng ngày.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading-message-daily">Đang tải tin tức...</div>;
  }

  if (error) {
    return <div className="error-message-daily">{error}</div>;
  }

  if (news.length === 0) {
    return <p className="no-articles-message">Chưa có tin tức hằng ngày nào.</p>;
  }

  return (
    <section className="daily-news-section">
      <h2>{title}</h2>
      <div className="daily-news-container">
        {news.map(item => (
          <Link to={`/article/${item.id}`} key={item.id} className="article-link-wrapper">
            <ArticlePreview article={item} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default DailyNewsSection;