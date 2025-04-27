import React, { useState } from 'react';
import './login.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5217/api/Users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Save user data in localStorage
        localStorage.setItem('userData', JSON.stringify(data));
        setError('');
        // Redirect to home
        navigate('/home');
      } else {
        setError(data.message || 'Login failed.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred while logging in.');
    }
  };

  return (
    <>
      <Header />
      <Nav />
      <div className="login-section">
        <div className="login-container">
          <h2 className="login-title">Login to Your Account</h2>
          <p className="register-subtitle">
            Enter your Email and Password here to login to your account
          </p>
          <form onSubmit={handleSubmit} className="login-form">
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-input"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <div className="login-footer">
            Don't have an account? <a href="/register" className="login-link">Register here</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
