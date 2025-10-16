
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ArticleList from '../components/ArticleList';
import './SearchPage.css';

function SearchPage({ allArticles }) {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    setSearchTerm(query || '');

    if (!query) {
      setResults([]);
      setLoading(false);
      return;
    }

    const filteredArticles = allArticles.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredArticles);
    setLoading(false);

  }, [location.search, allArticles]);

  return (
    <div className="search-page-container">
      <h1>Kết quả tìm kiếm cho: "{searchTerm}"</h1>
      {loading && <div className="loading-message-search">Đang tìm kiếm...</div>}
      {error && <div className="error-message-search">{error}</div>}
      {!loading && !error && results.length === 0 && (
        <p className="no-results-message">Không tìm thấy kết quả nào.</p>
      )}
      {!loading && !error && results.length > 0 && (
        <ArticleList title="" articles={results} />
      )}
    </div>
  );
}

export default SearchPage;