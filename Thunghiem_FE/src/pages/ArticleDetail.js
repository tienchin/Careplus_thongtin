
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ArticleDetail.css';

function ArticleDetail({ allData }) { 
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!allData || !allData.articles) {
      setError("Dữ liệu bài viết không có sẵn.");
      setLoading(false);
      return;
    }

    const foundArticle = allData.articles.find(art => art.id === parseInt(id));
    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      setError("Bài viết không tìm thấy.");
    }
    setLoading(false);

  }, [id, allData]); 

  if (loading) {
    return <div className="loading-message">Đang tải bài viết...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!article) {
    return <div className="error-message">Không có dữ liệu bài viết.</div>;
  }

  return (
    <article className="article-detail">
      <img src={article.imageUrl} alt={article.title} className="article-image" onError={(e) => {
        e.target.onerror = null;
        e.target.src = "/logo.png"; 
      }} />
      <h1 className="article-title">{article.title}</h1>
      <div className="article-meta">
        <span>Tác giả: {article.author}</span> | <span>Ngày đăng: {article.date}</span>
      </div>
      <div className="article-content">
        {article.content.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </article>
  );
}

export default ArticleDetail;