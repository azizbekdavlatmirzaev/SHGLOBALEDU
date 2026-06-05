// ============================================
// LANDING PAGE COMPONENT
// ============================================

import React from 'react';
import '../styles/landing.css';

function LandingPage({ onGetStarted }) {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>🇰🇷 Your Korean Dream Starts Here</h1>
          <p>Master Korean Language • Get Into University • Land Your Dream Job</p>
          <button className="cta-button" onClick={onGetStarted}>
            📝 Get Free Consultation →
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">📚</div>
          <h3>Expert Teachers</h3>
          <p>Native Korean instructors with 5+ years experience</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎓</div>
          <h3>Proven Results</h3>
          <p>98% TOPIK pass rate • 150+ university admits</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">👥</div>
          <h3>Small Classes</h3>
          <p>Maximum 15 students per class for personal attention</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🌍</div>
          <h3>Full Support</h3>
          <p>Visa, university applications, job placement help</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat">
          <div className="stat-number">98%</div>
          <div className="stat-label">Pass Rate</div>
        </div>
        <div className="stat">
          <div className="stat-number">150+</div>
          <div className="stat-label">University Admits</div>
        </div>
        <div className="stat">
          <div className="stat-number">5+ yrs</div>
          <div className="stat-label">Experience</div>
        </div>
        <div className="stat">
          <div className="stat-number">Max 15</div>
          <div className="stat-label">Class Size</div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Korea Education Center?</h2>
        <div className="benefits">
          <div className="benefit">
            <span className="check">✓</span>
            <p>Native Korean teachers with proven track record</p>
          </div>
          <div className="benefit">
            <span className="check">✓</span>
            <p>Flexible schedules: morning, afternoon, evening classes</p>
          </div>
          <div className="benefit">
            <span className="check">✓</span>
            <p>Complete support from admission to job placement</p>
          </div>
          <div className="benefit">
            <span className="check">✓</span>
            <p>Modern facility in the heart of Tashkent</p>
          </div>
          <div className="benefit">
            <span className="check">✓</span>
            <p>Affordable pricing with flexible payment plans</p>
          </div>
          <div className="benefit">
            <span className="check">✓</span>
            <p>Group discounts and scholarship opportunities</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Start Your Korean Journey?</h2>
        <p>Free consultation, no pressure, 24-hour response guaranteed</p>
        <button className="cta-button-large" onClick={onGetStarted}>
          🚀 Get Started Now
        </button>
      </section>
    </div>
  );
}

export default LandingPage;
