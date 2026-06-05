# 🇰🇷 KOREA EDUCATION CENTER - FULL PLATFORM

**Professional JavaScript Full-Stack Web Application**

Production-ready backend (Node.js + Express) + Frontend (React) + Database (PostgreSQL)

---

## 🎯 WHAT YOU GET

### ✅ Backend API
- Express.js server
- PostgreSQL database
- User authentication (JWT)
- Form submission handling
- Admin API endpoints
- Email ready (SendGrid)

### ✅ Frontend Application
- React SPA (Single Page App)
- Landing page
- Consultation form
- Admin dashboard
- Mobile responsive
- Modern UI/UX

### ✅ Database
- PostgreSQL (production-grade)
- User management
- Form submissions tracking
- Email logs
- Scalable schema

### ✅ Features Included
- ✨ Beautiful landing page
- 📝 Working consultation form
- 🔐 Admin login & dashboard
- 📊 Submission management
- 💾 Data persistence
- 📱 Mobile responsive
- 🔒 JWT authentication
- 📧 Email-ready integration

---

## 🚀 QUICK START (5 MINUTES)

### Prerequisites:
- Node.js (v14+)
- PostgreSQL (v12+)
- Git

### 1. Create database:
```bash
psql -U postgres
CREATE DATABASE korea_education;
\q
```

### 2. Backend setup:
```bash
cd backend
npm install
# Edit .env file with your database password
npm start
```

Backend running at: `http://localhost:3001`

### 3. Frontend setup (in new terminal):
```bash
cd frontend
npm install
npm start
```

Frontend running at: `http://localhost:3000`

### 4. Test:
- Open http://localhost:3000
- Click "Get Free Consultation"
- Fill and submit form
- Check backend console for submission

✅ **Done!** You have a working application!

---

## 📁 PROJECT STRUCTURE

```
korea-education-platform/
├── backend/                    # Node.js + Express server
│   ├── server.js              # Main application
│   ├── package.json           # Dependencies
│   ├── .env                   # Secrets (don't commit!)
│   └── .env.example           # Template
│
├── frontend/                   # React application
│   ├── src/
│   │   ├── App.jsx            # Main component
│   │   ├── components/        # React components
│   │   ├── styles/            # CSS files
│   │   └── index.js           # Entry point
│   ├── public/
│   │   └── index.html
│   └── package.json
│
├── SETUP_GUIDE.md             # Detailed setup instructions
└── README.md                  # This file
```

---

## 🔑 KEY FEATURES

### Landing Page
- Modern design
- Trust signals (98% pass rate, 150+ admits)
- Call-to-action buttons
- Features section
- Stats display
- Mobile responsive

### Consultation Form
- Real-time validation
- 6 input fields
- Form data saved to database
- Success confirmation
- Error handling
- Loading states

### Admin Dashboard
- Secure login (JWT)
- View all submissions
- Update submission status
- Export to CSV
- Delete submissions
- Real-time stats

### Database
- PostgreSQL (production-grade)
- 3 tables (users, submissions, email_logs)
- Automatic timestamp tracking
- Indexed for performance
- Ready for scaling

---

## 🔐 API ENDPOINTS

### Public
- `GET /api/health` → Server health check
- `POST /api/forms/consultation` → Submit form
- `POST /api/auth/register` → User registration
- `POST /api/auth/login` → User login

### Admin (requires JWT token)
- `GET /api/admin/submissions` → Get all submissions
- `PUT /api/admin/submissions/:id` → Update submission
- `DELETE /api/admin/submissions/:id` → Delete submission

---

## 🔑 DEMO CREDENTIALS

**Admin Panel:**
- Email: `admin@koreaed.uz`
- Password: `admin123`

---

## 🛠️ TECHNOLOGY STACK

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | React | 18.2 |
| Backend | Node.js + Express | 18.x / 4.x |
| Database | PostgreSQL | 12+ |
| Auth | JWT | jsonwebtoken |
| Email | SendGrid (optional) | API |
| Hosting | Cloud (AWS, Heroku, etc.) | - |

---

## 📦 DEPENDENCIES

### Backend (server.js)
```
express              - Web framework
cors                 - Cross-origin support
pg                   - PostgreSQL client
bcryptjs             - Password hashing
jsonwebtoken         - JWT tokens
express-validator    - Input validation
helmet               - Security headers
dotenv               - Environment variables
```

### Frontend (React)
```
react                - UI library
react-dom            - DOM rendering
axios                - HTTP client
react-router-dom     - Routing
```

---

## 🚀 DEPLOYMENT

### Backend Options:
- **Heroku** - Free tier available
- **Railway** - GitHub integration
- **Render** - AWS-powered
- **DigitalOcean** - Affordable VPS

### Frontend Options:
- **Vercel** - Optimized for React
- **Netlify** - Easy deployment
- **AWS S3 + CloudFront** - Scalable

### Database:
- **AWS RDS PostgreSQL** - Managed
- **DigitalOcean Managed DB** - Affordable
- **Heroku PostgreSQL** - Simple

---

## 📧 EMAIL INTEGRATION

To enable email notifications:

1. Sign up at https://sendgrid.com/
2. Get API key
3. Add to `.env`:
   ```env
   SENDGRID_API_KEY=SG.xxxxx
   SENDGRID_FROM_EMAIL=noreply@koreaed.uz
   ```
4. Install: `npm install @sendgrid/mail`
5. Use sendWelcomeEmail() function

---

## 📱 VISME FORM INTEGRATION

After form submission, you can:
1. Redirect to Visme form
2. Embed Visme form in iframe
3. Use Visme API to sync data

Example redirect:
```javascript
window.location.href = 'https://forms.visme.co/formsPlayer/4k977z0q-untitled-project';
```

---

## 🔒 SECURITY FEATURES

✅ **Passwords:** Hashed with bcryptjs  
✅ **Authentication:** JWT tokens (24h expiry)  
✅ **HTTPS:** Enable in production  
✅ **CORS:** Configured  
✅ **Input Validation:** Server-side  
✅ **SQL Injection:** Protected (parameterized queries)  
✅ **Headers:** Helmet.js  
✅ **Environment Variables:** Secrets protected  

---

## 📊 DATABASE SCHEMA

### users
```sql
id (PK) | email | password | first_name | phone | role | created_at
```

### submissions
```sql
id (PK) | first_name | email | phone | korean_level | goal | country | status | created_at | notes
```

### email_logs
```sql
id (PK) | recipient_email | subject | status | created_at
```

---

## 🧪 TESTING

### Test Backend:
```bash
# Health check
curl http://localhost:3001/api/health

# Submit form
curl -X POST http://localhost:3001/api/forms/consultation \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","email":"test@test.com","phone":"+998","koreanLevel":"beginner","goal":"university","country":"Uzbekistan"}'
```

### Test Frontend:
1. Open http://localhost:3000
2. Navigate through pages
3. Submit form
4. Check admin dashboard

---

## 📈 NEXT STEPS

1. ✅ Follow SETUP_GUIDE.md for detailed setup
2. ✅ Test locally
3. ✅ Add more features (students portal, progress tracking, payments)
4. ✅ Deploy backend
5. ✅ Deploy frontend
6. ✅ Setup custom domain
7. ✅ Enable SSL
8. ✅ Setup monitoring
9. ✅ Integrate email
10. ✅ Integrate Visme forms

---

## 🐛 TROUBLESHOOTING

**Database connection fails:**
- Check PostgreSQL is running
- Verify credentials in .env
- Create database: `CREATE DATABASE korea_education;`

**Port already in use:**
```bash
# Windows: netstat -ano | findstr :3001
# Mac/Linux: lsof -i :3001
```

**CORS errors:**
- Make sure backend runs on :3001
- Check CORS settings in server.js

**Form not submitting:**
- Check browser console (F12)
- Check backend terminal
- Verify .env variables

---

## 📞 SUPPORT

For help:
1. Check SETUP_GUIDE.md
2. Read error messages carefully
3. Check browser console (F12)
4. Search Google
5. Ask for help!

---

## 📄 LICENSE

This project is for Korea Education Center. All rights reserved.

---

## 🎉 READY TO LAUNCH?

You have a **professional, production-ready application**!

**Next:** Deploy and start getting real leads! 🚀

---

**Built with ❤️ using JavaScript, React, and Node.js**

For detailed setup instructions, see **SETUP_GUIDE.md**
