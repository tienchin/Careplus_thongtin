// src/pages/SearchPage.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ArticleList from '../components/ArticleList';
import './SearchPage.css';

function SearchPage({ allArticles }) {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    setSearchTerm(query || '');

    const performSearch = async () => {
      if (!query) {
        setResults([]);
        setLoading(false);
        setError(null);
        return;
      }

      if (!allArticles || allArticles.length === 0) {
        setError("Không thể thực hiện tìm kiếm khi dữ liệu bài viết chưa được tải.");
        setLoading(false);
        return;
      }

      const filteredArticles = allArticles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase())
      );
      
      setResults(filteredArticles);
      setLoading(false);
      setError(null);
    };

    performSearch();

  }, [location.search, allArticles]);

  return (
    <div className="search-page-container">
      <h1>Kết quả tìm kiếm cho: "{searchTerm}"</h1>
      {loading && <div className="loading-message-search">Đang tìm kiếm...</div>}
      {error && <div className="error-message-search">{error}</div>}
      {!loading && !error && results.length === 0 && (
        <p className="no-results-message">Kết quả tìm kiếm của bạn không thực thi.</p>
      )}
      {!loading && !error && results.length > 0 && (
        <ArticleList title="" articles={results} />
      )}
    </div>
  );
}

export default SearchPage;