// ============================================
// CREATIVE LANDING PAGE - REACT COMPONENT
// ============================================

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/creative-landing.css';

function CreativeLandingPage({ onNavigateToForm }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="creative-landing-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-pattern"></div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-word">Your</span>
              <span className="title-word">Korean</span>
              <span className="title-word accent">Era</span>
              <span className="title-word">Starts</span>
              <span className="title-word">Now</span>
            </h1>
            <p className="hero-subtitle">
              ✨ Master Korean • Ace TOPIK • Get Into University • Land Dream Job 🚀
            </p>
            <button 
              className="hero-cta"
              onClick={onNavigateToForm}
            >
              🎯 Let's Level Up →
            </button>
          </div>

          {/* ANIMATED GRADIENT SPHERE */}
          <div className="hero-visual">
            <div className="gradient-sphere sphere-1"></div>
            <div className="gradient-sphere sphere-2"></div>
            <div className="gradient-sphere sphere-3"></div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="container">
          <h2>Why We're Different</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🎓</div>
              <div className="stat-number">98%</div>
              <div className="stat-text">Pass Rate on TOPIK</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">150+</div>
              <div className="stat-text">University Admissions</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👨‍🏫</div>
              <div className="stat-number">5+ yrs</div>
              <div className="stat-text">Expert Teachers</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">Max 15</div>
              <div className="stat-text">Class Size</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="programs-section">
        <div className="container">
          <h2>Our Programs</h2>
          <div className="programs-grid">
            <div className="program-card starter">
              <div className="program-label">Starter</div>
              <h3>Beginner</h3>
              <p className="program-description">
                Perfect for zero knowledge. Learn basics in 3 months.
              </p>
              <ul className="program-features">
                <li>✓ Alphabet & Basic phrases</li>
                <li>✓ Conversational skills</li>
                <li>✓ 3 months intensive</li>
                <li>✓ Small group classes</li>
              </ul>
              <div className="program-price">$450<span>/month</span></div>
              <button 
                className="program-cta"
                onClick={onNavigateToForm}
              >
                Enroll Now →
              </button>
            </div>

            <div className="program-card intermediate">
              <div className="program-label">Popular</div>
              <h3>Intermediate</h3>
              <p className="program-description">
                Level up! Prepare for TOPIK or real conversations.
              </p>
              <ul className="program-features">
                <li>✓ TOPIK Level 2-3</li>
                <li>✓ Business Korean</li>
                <li>✓ 4 months program</li>
                <li>✓ 1-on-1 tutoring available</li>
              </ul>
              <div className="program-price">$550<span>/month</span></div>
              <button 
                className="program-cta"
                onClick={onNavigateToForm}
              >
                Join Now →
              </button>
            </div>

            <div className="program-card advanced">
              <div className="program-label">Premium</div>
              <h3>Advanced</h3>
              <p className="program-description">
                Master Korean for university or professional level.
              </p>
              <ul className="program-features">
                <li>✓ TOPIK Level 4-6</li>
                <li>✓ University preparation</li>
                <li>✓ 6 months comprehensive</li>
                <li>✓ Full visa + job support</li>
              </ul>
              <div className="program-price">$650<span>/month</span></div>
              <button 
                className="program-cta"
                onClick={onNavigateToForm}
              >
                Start Journey →
              </button>
            </div>

            <div className="program-card topik">
              <div className="program-label">Intensive</div>
              <h3>TOPIK Prep</h3>
              <p className="program-description">
                Fast-track to TOPIK success. Proven 98% pass rate!
              </p>
              <ul className="program-features">
                <li>✓ Exam strategy</li>
                <li>✓ Full-length tests</li>
                <li>✓ 8 weeks intensive</li>
                <li>✓ Money-back guarantee</li>
              </ul>
              <div className="program-price">$750<span>/month</span></div>
              <button 
                className="program-cta"
                onClick={onNavigateToForm}
              >
                Ace TOPIK →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="success-section">
        <div className="container">
          <h2>Student Success Stories</h2>
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-avatar">👨‍🎓</div>
              <h4>Ali - Got into Seoul University</h4>
              <p className="story-from">From Tashkent</p>
              <p className="story-text">
                "I started from zero Korean. In 6 months, I got admission to Seoul National University! The teachers are amazing."
              </p>
              <div className="story-rating">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="story-card">
              <div className="story-avatar">👩‍💼</div>
              <h4>Maria - Landed Job in Korea</h4>
              <p className="story-from">From Bukhara</p>
              <p className="story-text">
                "Passed TOPIK with 180 points! Got a job at Samsung. Now I'm living my dream in Seoul."
              </p>
              <div className="story-rating">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="story-card">
              <div className="story-avatar">👨‍💻</div>
              <h4>Javohir - TOPIK Level 6</h4>
              <p className="story-from">From Samarkand</p>
              <p className="story-text">
                "Never thought I'd reach level 6. This center's method is so effective. Highly recommended!"
              </p>
              <div className="story-rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>🎓 Do I need prior Korean knowledge?</h4>
              <p>No! We have beginner, intermediate, and advanced courses. Start from zero.</p>
            </div>
            <div className="faq-item">
              <h4>📅 What's the schedule?</h4>
              <p>Flexible! Morning, afternoon, and evening classes. Even weekends available.</p>
            </div>
            <div className="faq-item">
              <h4>🎯 Can you help with university admission?</h4>
              <p>Yes! Full support from TOPIK to admission to visa. We're your complete partner.</p>
            </div>
            <div className="faq-item">
              <h4>💼 Can you help get a job in Korea?</h4>
              <p>Absolutely! Job placement is part of our advanced program. Many students work in Korea.</p>
            </div>
            <div className="faq-item">
              <h4>💰 What's the refund policy?</h4>
              <p>We're so confident in our teaching, we offer money-back if you don't pass TOPIK.</p>
            </div>
            <div className="faq-item">
              <h4>👨‍👩‍👧‍👦 Do you offer group discounts?</h4>
              <p>Yes! Sign up 3+ friends and get 15% discount. Group classes start anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta-section">
        <div className="container">
          <h2>Ready for Your Korean Era?</h2>
          <p>Free consultation. No pressure. 24-hour response guaranteed.</p>
          <button 
            className="final-cta-button"
            onClick={onNavigateToForm}
          >
            🚀 Start Your Journey Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default CreativeLandingPage;
