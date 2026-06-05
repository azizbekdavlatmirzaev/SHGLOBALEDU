// ============================================
// CONSULTATION FORM COMPONENT
// ============================================

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/form.css';

function ConsultationForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    koreanLevel: '',
    goal: '',
    country: 'Uzbekistan',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/forms/consultation', formData);

      console.log('✅ Form submitted:', response.data);
      setSuccess(true);

      // Reset form
      setFormData({
        firstName: '',
        email: '',
        phone: '',
        koreanLevel: '',
        goal: '',
        country: 'Uzbekistan',
      });

      // Redirect to thank you page
      setTimeout(() => {
        onSuccess(formData);
      }, 2000);

    } catch (err) {
      console.error('❌ Form submission error:', err);
      setError(err.response?.data?.error || 'Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="form-container">
        <div className="success-message">
          <h2>✅ Thank You!</h2>
          <p>Your form has been submitted successfully.</p>
          <p>We will contact you within 24 hours.</p>
          <p className="email-confirm">Confirmation sent to: <strong>{formData.email}</strong></p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-header">
          <h2>📝 Free Consultation</h2>
          <p>Tell us about yourself and your goals</p>
        </div>

        <form onSubmit={handleSubmit} className="consultation-form">
          {error && <div className="error-message">{error}</div>}

          {/* First Name */}
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+998 90 123 4567"
              required
            />
          </div>

          {/* Korean Level */}
          <div className="form-group">
            <label htmlFor="koreanLevel">Korean Level</label>
            <select
              id="koreanLevel"
              name="koreanLevel"
              value={formData.koreanLevel}
              onChange={handleChange}
            >
              <option value="">Select level...</option>
              <option value="zero">🤷 Complete Beginner</option>
              <option value="basic">👋 Basic Knowledge</option>
              <option value="intermediate">💬 Intermediate</option>
              <option value="advanced">🎓 Advanced</option>
            </select>
          </div>

          {/* Goal */}
          <div className="form-group">
            <label htmlFor="goal">Your Goal</label>
            <select
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
            >
              <option value="">Select goal...</option>
              <option value="university">🎓 University</option>
              <option value="topik">🏆 TOPIK Exam</option>
              <option value="work">💼 Work in Korea</option>
              <option value="personal">🎉 Personal Development</option>
            </select>
          </div>

          {/* Country */}
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Your country"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="submit-button"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span> Submitting...
              </>
            ) : (
              '✅ Submit & Get Consultation'
            )}
          </button>

          <p className="form-note">
            ✨ We respond within 24 hours. No spam, just quality education.
          </p>
        </form>
      </div>
    </div>
  );
}

export default ConsultationForm;
