# 🐳 DOCKER SETUP GUIDE - KOREA EDUCATION PLATFORM

## ✅ WHAT YOU'LL GET

Running everything with ONE command:
- ✅ PostgreSQL database
- ✅ Node.js backend
- ✅ React frontend
- ✅ All connected automatically

No manual installation of Node.js or PostgreSQL needed!

---

## 📋 PREREQUISITES

1. **Docker Desktop installed:**
   - Windows/Mac: https://www.docker.com/products/docker-desktop
   - Linux: `sudo apt-get install docker.io docker-compose`

2. **Verify installation:**
   ```bash
   docker --version
   docker-compose --version
   ```

Should show versions ✅

---

## 🚀 QUICK START (3 STEPS)

### Step 1: Extract ZIP
```bash
# Unzip korea-education-platform.zip
# Navigate to folder
cd korea-education-platform
```

### Step 2: Create .env file
```bash
# Copy .env.docker to .env
copy .env.docker .env

# On Mac/Linux:
# cp .env.docker .env
```

### Step 3: Start Everything
```bash
docker-compose up
```

**That's it!** Everything runs automatically! 🎉

---

## 📂 FILE STRUCTURE

Your folder should look like:

```
korea-education-platform/
├── docker-compose.yml          ← Orchestrates all services
├── Dockerfile                  ← Backend build instructions
├── .dockerignore               ← Files to exclude from Docker
├── .env.docker                 ← Environment template
├── .env                        ← Your actual config (create from .env.docker)
│
├── backend/
│   ├── server.js              ← Backend API
│   └── package.json           ← Dependencies
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   └── styles/
│   └── package.json
│
└── Other files...
```

---

## 🐳 DOCKER SETUP EXPLAINED

### docker-compose.yml
Manages 3 services:

1. **PostgreSQL (Database)**
   - Auto-created
   - Port: 5432
   - Data persists in volume

2. **Backend (Node.js API)**
   - Builds from Dockerfile
   - Runs on port 3001
   - Connects to PostgreSQL
   - Auto-restarts on crash

3. **Frontend (React)**
   - Node.js with React
   - Runs on port 3000
   - Watches for file changes
   - Auto-reloads

### Dockerfile
Instructions to build backend image:
- Starts with Node.js 18
- Copies code
- Installs dependencies
- Exposes port 3001

---

## 🎯 DETAILED SETUP

### Step 1: Install Docker Desktop

**Windows/Mac:**
1. Download: https://www.docker.com/products/docker-desktop
2. Install with default settings
3. Restart computer
4. Open Docker Desktop (let it finish loading)

**Linux:**
```bash
sudo apt-get update
sudo apt-get install docker.io docker-compose
sudo usermod -aG docker $USER
# Logout and login
```

### Step 2: Verify Docker

```bash
docker --version
# Should show: Docker version 20.x.x or higher

docker-compose --version
# Should show: Docker Compose version 2.x.x or higher
```

### Step 3: Navigate to Project

```bash
# Open PowerShell (Windows) or Terminal (Mac/Linux)
cd path/to/korea-education-platform
```

### Step 4: Create .env File

```bash
# Copy template:
copy .env.docker .env

# Or on Mac/Linux:
cp .env.docker .env

# File is created with Docker settings
```

### Step 5: Start Services

```bash
docker-compose up
```

**First time will take 2-3 minutes** (downloading images, building, installing)

**You'll see:**
```
postgres_1   | LOG:  database system is ready to accept connections
backend_1    | ✅ Connected to PostgreSQL database
backend_1    | ✅ Server running on http://localhost:3001
frontend_1   | webpack compiled successfully
```

✅ **Everything is running!**

---

## 🌐 ACCESS YOUR APPLICATION

### Frontend (Landing Page)
```
http://localhost:3000
```

### Backend API
```
http://localhost:3001/api/health
```

Should show: `{"status":"✅ Backend is running"}`

### Admin Dashboard
```
http://localhost:3000/admin
```

**Login:**
- Email: admin@koreaed.uz
- Password: admin123

---

## 🧪 TEST EVERYTHING

### 1. Test Form Submission

Go to: http://localhost:3000

1. Click "Get Free Consultation"
2. Fill form:
   - Name: Test User
   - Email: test@example.com
   - Phone: +998901234567
   - Level: Beginner
   - Goal: University
   - Country: Uzbekistan
3. Submit

### 2. Check Admin Dashboard

Go to: http://localhost:3000/admin

Login with: admin@koreaed.uz / admin123

You should see your submission! ✅

### 3. Check Backend Logs

In terminal where `docker-compose up` is running:

You should see:
```
backend_1 | 📝 New submission #1 from test@example.com
```

---

## 🔧 USEFUL DOCKER COMMANDS

### View Logs
```bash
docker-compose logs -f
```

Press `Ctrl+C` to exit

### View Specific Service Logs
```bash
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f postgres
```

### Stop Everything
```bash
docker-compose down
```

### Stop & Remove Data
```bash
docker-compose down -v
```

⚠️ This deletes the database!

### Restart Services
```bash
docker-compose restart
```

### Rebuild Everything
```bash
docker-compose up --build
```

Use after changing code

### Run Command in Container
```bash
docker-compose exec backend npm install
docker-compose exec frontend npm install
```

### View Running Containers
```bash
docker ps
```

### View Container Details
```bash
docker-compose ps
```

---

## 🔄 WORKFLOW

### 1. **Start Development**
```bash
docker-compose up
```

### 2. **Make Changes**
Edit files in `backend/` or `frontend/` folders

### 3. **See Changes**
- Backend: Auto-restarts on file save
- Frontend: Auto-hot-reloads

### 4. **Check Results**
- Backend: http://localhost:3001
- Frontend: http://localhost:3000

### 5. **Stop When Done**
```bash
Press Ctrl+C in terminal
```

---

## 🐛 TROUBLESHOOTING

### "Docker daemon is not running"
- Open Docker Desktop application
- Wait for it to fully load
- Try again

### "Port 3000 already in use"
```bash
docker-compose down
# Then try again
```

Or use different port in docker-compose.yml:
```yaml
ports:
  - "3001:3000"  # Use 3001 instead
```

### "Database connection failed"
```bash
# Check logs:
docker-compose logs postgres

# Rebuild:
docker-compose down -v
docker-compose up --build
```

### "node_modules issues"
```bash
# Rebuild:
docker-compose up --build
```

### "Can't access localhost:3000"
```bash
# Check if services are running:
docker-compose ps

# If not running:
docker-compose up
```

### "Permission denied (Docker on Linux)"
```bash
sudo usermod -aG docker $USER
# Logout and login
```

---

## 📊 SERVICE PORTS

| Service | Port | URL |
|---------|------|-----|
| Frontend | 3000 | http://localhost:3000 |
| Backend | 3001 | http://localhost:3001 |
| Database | 5432 | localhost:5432 (internal) |

---

## 🔐 DATABASE

### Default Credentials (Change in Production!)

**User:** postgres
**Password:** password123
**Database:** korea_education

### Connect to Database

```bash
# From inside container:
docker-compose exec postgres psql -U postgres -d korea_education

# View tables:
\dt

# Exit:
\q
```

### Backup Database

```bash
docker-compose exec postgres pg_dump -U postgres korea_education > backup.sql
```

### Restore Database

```bash
docker-compose exec -T postgres psql -U postgres korea_education < backup.sql
```

---

## 📝 CUSTOMIZATION

### Change Ports

Edit `docker-compose.yml`:
```yaml
backend:
  ports:
    - "3001:3001"  # Change first number
    
frontend:
  ports:
    - "3000:3000"  # Change first number
```

### Change Database Password

Edit `docker-compose.yml` AND `.env`:
```yaml
environment:
  POSTGRES_PASSWORD: your_new_password
```

⚠️ Change in BOTH places!

### Change Backend Environment

Edit `.env`:
```
NODE_ENV=development  # or production
JWT_SECRET=your-secret
```

---

## 🚀 DEPLOYMENT

### To Production (With Real Domain)

1. Deploy Docker to cloud:
   - AWS ECS
   - Google Cloud Run
   - DigitalOcean App Platform
   - Heroku (with Docker)

2. Update database credentials

3. Update JWT secret

4. Enable HTTPS

---

## 💡 TIPS

### Development Mode
```bash
# Leave docker-compose up running
# Edit files
# Changes auto-reload
# Check browser
```

### Production Mode
```bash
# Create .env with production values
# Change NODE_ENV=production
# Use strong JWT_SECRET
# Use strong DB_PASSWORD
# Deploy to cloud
```

### Logging
```bash
# View all logs real-time:
docker-compose logs -f

# View last 50 lines:
docker-compose logs --tail=50

# Follow specific service:
docker-compose logs -f backend
```

---

## 📚 NEXT STEPS

1. ✅ Install Docker
2. ✅ Run `docker-compose up`
3. ✅ Test at http://localhost:3000
4. ✅ Customize your content
5. ✅ Deploy to production

---

## 🎉 YOU'RE READY!

With Docker, you have:
- ✅ One command to start everything
- ✅ No manual installations
- ✅ Everything connected automatically
- ✅ Production-ready setup
- ✅ Easy to scale

**Next:** Read `00-START-HERE.md` to customize and deploy! 🚀

---

## 📞 QUICK REFERENCE

**Start:**
```bash
docker-compose up
```

**Stop:**
```bash
docker-compose down
```

**Logs:**
```bash
docker-compose logs -f
```

**Rebuild:**
```bash
docker-compose up --build
```

---

**That's it! Docker makes everything easy!** 🐳✨
