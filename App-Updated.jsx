// ============================================
// KOREA EDUCATION CENTER - REACT APP (UPDATED)
// ============================================

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Components
import CreativeLandingPage from './components/CreativeLandingPage';
import ConsultationForm from './components/ConsultationForm';
import AdminDashboard from './components/AdminDashboard';
import ThankYou from './components/ThankYou';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken'));

  useEffect(() => {
    // Check if admin is logged in
    if (adminToken) {
      setIsAdmin(true);
    }
  }, [adminToken]);

  const handleFormSubmit = (formData) => {
    setCurrentPage('thankyou');
    // Reset to home after 3 seconds
    setTimeout(() => setCurrentPage('home'), 3000);
  };

  const handleAdminLogin = (token) => {
    localStorage.setItem('adminToken', token);
    setAdminToken(token);
    setIsAdmin(true);
    setCurrentPage('admin');
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('adminToken');
    setAdminToken(null);
    setIsAdmin(false);
    setCurrentPage('home');
  };

  const handleGetStarted = () => {
    setCurrentPage('form');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div 
            className="logo" 
            onClick={() => setCurrentPage('home')}
            style={{ cursor: 'pointer' }}
          >
            🇰🇷 Korea Education
          </div>
          <div className="nav-links">
            <button 
              className={currentPage === 'home' ? 'active' : ''} 
              onClick={() => setCurrentPage('home')}
            >
              Home
            </button>
            <button 
              className={currentPage === 'form' ? 'active' : ''} 
              onClick={() => setCurrentPage('form')}
            >
              Sign Up
            </button>
            {isAdmin && (
              <button 
                className={currentPage === 'admin' ? 'active' : ''} 
                onClick={() => setCurrentPage('admin')}
              >
                Admin
              </button>
            )}
            {!isAdmin && (
              <button 
                className="admin-login-btn" 
                onClick={() => setCurrentPage('admin')}
              >
                Admin
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="main-content">
        {currentPage === 'home' && (
          <CreativeLandingPage onNavigateToForm={handleGetStarted} />
        )}

        {currentPage === 'form' && (
          <ConsultationForm onSuccess={handleFormSubmit} />
        )}

        {currentPage === 'thankyou' && (
          <ThankYou />
        )}

        {currentPage === 'admin' && (
          <AdminDashboard 
            token={adminToken}
            onLoginSuccess={handleAdminLogin}
            onLogout={handleAdminLogout}
            isLoggedIn={isAdmin}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>🇰🇷 Korea Education Center © 2024 | Tashkent, Uzbekistan</p>
        <p>📱 +998 90 123 4567 | 📧 hello@koreaed.uz</p>
      </footer>
    </div>
  );
}

export default App;
