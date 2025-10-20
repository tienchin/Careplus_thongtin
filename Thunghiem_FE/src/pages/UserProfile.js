// src/pages/UserProfile.js
import React, { useState, useEffect } from 'react';
import './UserProfile.css'; // Sẽ tạo file CSS này

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Giả lập lấy dữ liệu người dùng sau khi đăng nhập thành công
    // Trong thực tế, bạn sẽ lấy thông tin này từ localStorage, Context API, hoặc gọi API backend
    const fetchUserData = async () => {
      setLoading(true);
      try {
        // Giả lập: Lấy dữ liệu từ localStorage hoặc state management
        const storedUser = localStorage.getItem('userInfo');
        if (storedUser) {
          setUserData(JSON.parse(storedUser));
        } else {
          // Nếu không có dữ liệu lưu trữ, có thể là người dùng chưa đăng nhập hoặc có lỗi
          setError("Không tìm thấy thông tin người dùng. Vui lòng đăng nhập lại.");
          // navigate('/login'); // Tùy chọn điều hướng về trang đăng nhập
        }
      } catch (err) {
        setError("Lỗi khi tải thông tin người dùng.");
        console.error("Fetch user data error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="loading-message">Đang tải thông tin người dùng...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!userData) {
    return <div className="error-message">Không có dữ liệu người dùng.</div>;
  }

  return (
    <div className="user-profile-container">
      <h1>Thông tin cá nhân</h1>
      <div className="profile-card">
        <div className="avatar-section">
          {userData.avatarUrl ? (
            <img src={userData.avatarUrl} alt="User Avatar" className="user-avatar" />
          ) : (
            <div className="user-avatar placeholder">{userData.name ? userData.name.charAt(0).toUpperCase() : '?'}</div>
          )}
        </div>
        <h2>{userData.name || 'Tên người dùng'}</h2>
        <p><strong>Email:</strong> {userData.email || 'Chưa cập nhật'}</p>
        {/* Thêm các thông tin khác nếu có */}
        <p><strong>Vai trò:</strong> {userData.role || 'Người dùng'}</p>
      </div>
      
      {/* Các nút hành động khác nếu cần */}
      <div className="profile-actions">
        <button onClick={() => alert("Chức năng này đang được phát triển")}>Chỉnh sửa thông tin</button>
        <button onClick={() => alert("Chức năng này đang được phát triển")}>Thay đổi mật khẩu</button>
      </div>
    </div>
  );
}

export default UserProfile;