
import React, { useState } from 'react';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom'; 
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) { 
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      
    } else {
      alert("Vui lòng nhập từ khóa tìm kiếm.");
    }
   
  };

  return (
    <section className="search-section">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Tìm kiếm bài viết y tế, triệu chứng..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Tìm kiếm</button>
      </form>
    </section>
  );
}

export default SearchBar;