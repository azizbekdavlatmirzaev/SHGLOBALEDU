// ============================================
// ADMIN DASHBOARD COMPONENT
// ============================================

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/admin.css';

function AdminDashboard({ token, onLoginSuccess, onLogout, isLoggedIn }) {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0 });

  // Fetch submissions when logged in
  useEffect(() => {
    if (isLoggedIn && token) {
      fetchSubmissions();
    }
  }, [isLoggedIn, token]);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/admin/submissions', {
        headers: { Authorization: `Bearer ${token}` }
      });

      setSubmissions(response.data.submissions);

      // Calculate stats
      const stats = {
        total: response.data.submissions.length,
        new: response.data.submissions.filter(s => s.status === 'new').length,
        contacted: response.data.submissions.filter(s => s.status === 'contacted').length,
      };
      setStats(stats);

    } catch (err) {
      console.error('❌ Fetch error:', err);
      setError('Failed to load submissions');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // For demo: use hardcoded credentials
      if (loginData.email === 'admin@koreaed.uz' && loginData.password === 'admin123') {
        const demoToken = 'demo-token-' + Date.now();
        onLoginSuccess(demoToken);
        setLoginData({ email: '', password: '' });
      } else {
        setError('Invalid credentials. Demo: admin@koreaed.uz / admin123');
      }
    } catch (err) {
      setError('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (submissionId, newStatus) => {
    try {
      await axios.put(`/api/admin/submissions/${submissionId}`, 
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchSubmissions();
    } catch (err) {
      console.error('❌ Update error:', err);
    }
  };

  const handleDelete = async (submissionId) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      try {
        await axios.delete(`/api/admin/submissions/${submissionId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        fetchSubmissions();
      } catch (err) {
        console.error('❌ Delete error:', err);
      }
    }
  };

  const handleExportCSV = () => {
    let csv = 'Name,Email,Phone,Level,Goal,Country,Status,Date\n';
    submissions.forEach(sub => {
      csv += `${sub.first_name},${sub.email},${sub.phone},${sub.korean_level},${sub.goal},${sub.country},${sub.status},"${sub.created_at}"\n`;
    });

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
    element.setAttribute('download', 'submissions.csv');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Login Form
  if (!isLoggedIn) {
    return (
      <div className="admin-container">
        <div className="login-form">
          <h2>🔐 Admin Login</h2>
          <p className="demo-note">Demo credentials: admin@koreaed.uz / admin123</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                placeholder="admin@koreaed.uz"
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                placeholder="••••••••"
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : '🔓 Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="admin-container">
      <div className="dashboard">
        {/* Header */}
        <div className="dashboard-header">
          <h2>📊 Admin Dashboard</h2>
          <button className="logout-btn" onClick={onLogout}>
            🚪 Logout
          </button>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{stats.total}</div>
            <div className="stat-label">Total Submissions</div>
          </div>
          <div className="stat-card highlight">
            <div className="stat-number">{stats.new}</div>
            <div className="stat-label">New Leads</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.contacted}</div>
            <div className="stat-label">Contacted</div>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="submissions-section">
          <div className="section-header">
            <h3>📋 Recent Submissions</h3>
            <button className="export-btn" onClick={handleExportCSV}>
              📥 Export CSV
            </button>
          </div>

          {loading ? (
            <p className="loading">Loading...</p>
          ) : submissions.length === 0 ? (
            <p className="no-data">No submissions yet</p>
          ) : (
            <div className="table-wrapper">
              <table className="submissions-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Level</th>
                    <th>Goal</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map(sub => (
                    <tr key={sub.id} className={sub.status === 'new' ? 'new-row' : ''}>
                      <td><strong>{sub.first_name}</strong></td>
                      <td>{sub.email}</td>
                      <td>{sub.phone}</td>
                      <td>{sub.korean_level || '-'}</td>
                      <td>{sub.goal || '-'}</td>
                      <td>
                        <select 
                          value={sub.status}
                          onChange={(e) => handleUpdateStatus(sub.id, e.target.value)}
                          className="status-select"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="enrolled">Enrolled</option>
                        </select>
                      </td>
                      <td>{new Date(sub.created_at).toLocaleDateString()}</td>
                      <td>
                        <button 
                          className="delete-btn"
                          onClick={() => handleDelete(sub.id)}
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Selected Submission Details */}
        {selectedSubmission && (
          <div className="submission-detail">
            <h3>Submission Details</h3>
            <p><strong>Name:</strong> {selectedSubmission.first_name}</p>
            <p><strong>Email:</strong> {selectedSubmission.email}</p>
            <p><strong>Phone:</strong> {selectedSubmission.phone}</p>
            <p><strong>Level:</strong> {selectedSubmission.korean_level}</p>
            <p><strong>Goal:</strong> {selectedSubmission.goal}</p>
            <p><strong>Country:</strong> {selectedSubmission.country}</p>
            <button onClick={() => setSelectedSubmission(null)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
