// ============================================
// KOREA EDUCATION CENTER - BACKEND SERVER
// ============================================

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

// Initialize Express
const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// ============================================
// DATABASE SETUP
// ============================================

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'korea_education',
});

// Test database connection
pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('❌ Database connection error:', err);
});

// ============================================
// DATABASE INITIALIZATION
// ============================================

async function initializeDatabase() {
  try {
    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255),
        first_name VARCHAR(100),
        phone VARCHAR(20),
        role VARCHAR(50) DEFAULT 'student',
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Create submissions table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS submissions (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        korean_level VARCHAR(50),
        goal VARCHAR(100),
        country VARCHAR(100),
        status VARCHAR(50) DEFAULT 'new',
        created_at TIMESTAMP DEFAULT NOW(),
        notes TEXT
      );
    `);

    // Create email logs table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS email_logs (
        id SERIAL PRIMARY KEY,
        recipient_email VARCHAR(255),
        subject VARCHAR(255),
        status VARCHAR(50),
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    console.log('✅ Database tables initialized');
  } catch (err) {
    console.error('❌ Database initialization error:', err);
  }
}

// ============================================
// AUTHENTICATION MIDDLEWARE
// ============================================

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// ============================================
// API ROUTES
// ============================================

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: '✅ Backend is running' });
});

// ============================================
// FORM SUBMISSION ENDPOINT
// ============================================

app.post('/api/forms/consultation', 
  [
    body('firstName').trim().notEmpty().withMessage('First name required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('phone').notEmpty().withMessage('Phone required'),
    body('koreanLevel').optional(),
    body('goal').optional(),
    body('country').trim().notEmpty().withMessage('Country required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { firstName, email, phone, koreanLevel, goal, country } = req.body;

      // Save to database
      const result = await pool.query(
        `INSERT INTO submissions (first_name, email, phone, korean_level, goal, country, status)
         VALUES ($1, $2, $3, $4, $5, $6, 'new')
         RETURNING id, created_at;`,
        [firstName, email, phone, koreanLevel, goal, country]
      );

      const submissionId = result.rows[0].id;

      // Log submission
      console.log(`📝 New submission #${submissionId} from ${email}`);

      // TODO: Send email via SendGrid (commented out for now)
      // await sendWelcomeEmail(email, firstName);
      // await sendAdminNotification(firstName, email, phone, koreanLevel, goal);

      res.status(201).json({
        success: true,
        message: 'Thank you! We will contact you within 24 hours.',
        submissionId: submissionId,
      });

    } catch (err) {
      console.error('❌ Form submission error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// ============================================
// ADMIN ENDPOINTS
// ============================================

// Get all submissions (admin only)
app.get('/api/admin/submissions', authenticateToken, async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }

    const result = await pool.query(
      `SELECT * FROM submissions ORDER BY created_at DESC;`
    );

    res.json({
      total: result.rows.length,
      submissions: result.rows,
    });

  } catch (err) {
    console.error('❌ Get submissions error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update submission status
app.put('/api/admin/submissions/:id', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }

    const { id } = req.params;
    const { status, notes } = req.body;

    await pool.query(
      `UPDATE submissions SET status = $1, notes = $2 WHERE id = $3;`,
      [status, notes, id]
    );

    res.json({ success: true, message: 'Submission updated' });

  } catch (err) {
    console.error('❌ Update submission error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete submission
app.delete('/api/admin/submissions/:id', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }

    const { id } = req.params;

    await pool.query(
      `DELETE FROM submissions WHERE id = $1;`,
      [id]
    );

    res.json({ success: true, message: 'Submission deleted' });

  } catch (err) {
    console.error('❌ Delete submission error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ============================================
// USER AUTHENTICATION
// ============================================

// Register
app.post('/api/auth/register',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('firstName').notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password, firstName } = req.body;

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await pool.query(
        `INSERT INTO users (email, password, first_name, role)
         VALUES ($1, $2, $3, 'student')
         RETURNING id, email, first_name;`,
        [email, hashedPassword, firstName]
      );

      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        user: result.rows[0],
      });

    } catch (err) {
      console.error('❌ Register error:', err);
      res.status(500).json({ error: 'Registration failed' });
    }
  }
);

// Login
app.post('/api/auth/login',
  [
    body('email').isEmail(),
    body('password').notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;

      const result = await pool.query(
        `SELECT * FROM users WHERE email = $1;`,
        [email]
      );

      if (result.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const user = result.rows[0];

      // Check password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Generate token
      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '24h' }
      );

      res.json({
        success: true,
        token: token,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          role: user.role,
        },
      });

    } catch (err) {
      console.error('❌ Login error:', err);
      res.status(500).json({ error: 'Login failed' });
    }
  }
);

// ============================================
// ERROR HANDLING
// ============================================

app.use((err, req, res, next) => {
  console.error('❌ Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// ============================================
// START SERVER
// ============================================

const PORT = process.env.PORT || 3001;

async function startServer() {
  await initializeDatabase();

  app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════╗
║  🇰🇷 Korea Education Backend Server   ║
║  Server running on http://localhost:${PORT}  ║
╚════════════════════════════════════════╝
    `);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

module.exports = app;
