import React, { useState } from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { FaUser, FaGoogle, FaApple, FaFacebookF } from 'react-icons/fa';

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID'; 

function LoginPage() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setEmailError('');
    }
  };

  const handleContinue = () => {
    if (!email.trim()) {
      setEmailError('Hãy nhập email');
      return;
    }
    alert(`Tiếp tục với email: ${email}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleContinue();
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google Login Success:", credentialResponse);

    alert("Đăng nhập Google thành công! (Cần tích hợp backend để hoàn tất)");
    navigate('/'); 
  };

  const handleGoogleFailure = () => {
    console.log('Google Login Failed');
    alert("Đăng nhập Google thất bại. Vui lòng thử lại.");
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        <div className="user-icon-wrapper">
          <FaUser className="user-icon" />
        </div>
        <h1>Đăng nhập / Tạo tài khoản</h1>

        <div className="email-login">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Nhập Email của bạn"
            value={email}
            onChange={handleEmailChange}
            onKeyPress={handleKeyPress}
            className={emailError ? 'input-error' : ''}
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>

        <button onClick={handleContinue} className="continue-button">Tiếp tục</button>

        <div className="divider">Hoặc</div>

        <div className="social-login-buttons">
          <div className="social-button google">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              useOneTap
            />
          </div>
          <button className="social-button facebook">
            <FaFacebookF /> Facebook
          </button>
          <button className="social-button apple">
            <FaApple /> Apple
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;