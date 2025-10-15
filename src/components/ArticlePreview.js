
import React from 'react';
import './ArticlePreview.css';
import { Link } from 'react-router-dom';

function ArticlePreview({ article }) {
  return (
    <article className="article-preview">
      {article.imageUrl && (
        <img src={article.imageUrl} alt={article.title} className="article-preview-image" onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/logo.png";
        }} />
      )}
      <h3>{article.title}</h3>
      <div className="article-meta">
        <span>Tác giả: {article.author}</span> | <span>Ngày đăng: {article.date}</span>
      </div>
      <p>{article.excerpt}</p>
      {article.sourceUrl && (
        <div className="article-source">
          <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="source-link">
            Xem trên nguồn &rarr;
          </a>
        </div>
      )}
    </article>
  );
}

export default ArticlePreview;