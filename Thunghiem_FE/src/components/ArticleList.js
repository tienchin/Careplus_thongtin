
import React from 'react';
import { Link } from 'react-router-dom';
import ArticlePreview from './ArticlePreview';
import './ArticleList.css';

function ArticleList({ title, articles }) {
  if (!articles || articles.length === 0) {
    return <p className="no-articles-message">Không có bài viết nào.</p>;
  }

  return (
    <section className="article-list-section">
      <h2>{title}</h2>
      <div className="articles-container">
        {articles.map(article => (
          <Link to={`/article/${article.id}`} key={article.id} className="article-link-wrapper">
            <ArticlePreview article={article} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ArticleList;