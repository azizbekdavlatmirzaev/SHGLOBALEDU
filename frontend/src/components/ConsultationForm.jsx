import React from 'react';
import '../styles/form.css';

function ConsultationForm({ onSuccess }) {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-header">
          <h2>Free Consultation</h2>
          <p>Fill out the form below to get started</p>
        </div>

        <div style={{ padding: '20px' }}>
          <iframe
            src="https://forms.visme.co/formsPlayer/4k977z0q-untitled-project"
            width="100%"
            height="700"
            frameBorder="0"
            title="Consultation Form"
            style={{ borderRadius: '8px', border: 'none' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ConsultationForm;