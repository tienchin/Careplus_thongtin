
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ArticleDetail.css'; 

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
       
        const foundArticle = data.articles.find(art => art.id === parseInt(id));
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          setError('Bài viết không tìm thấy');
        }
        setLoading(false);
      })
      .catch(err => {
        setError('Lỗi khi tải dữ liệu bài viết');
        setLoading(false);
        console.error("Fetch error:", err);
      });
  }, [id]);

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
      <img src={article.imageUrl} alt={article.title} className="article-image" />
      <h1 className="article-title">{article.title}</h1>
      <div className="article-meta">
        <span>Tác giả: {article.author}</span> | <span>Ngày đăng: {article.date}</span>
      </div>
      <div className="article-content">
        {/* Thay thế ký tự xuống dòng \n bằng thẻ <br /> để hiển thị đúng định dạng HTML */}
        {article.content.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      {/* Các phần khác như bình luận có thể thêm vào đây */}
    </article>
  );
}

export default ArticleDetail;