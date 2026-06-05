# 🐳 DOCKER QUICK START - TL;DR VERSION

## 5 MINUTES SETUP

### 1️⃣ Install Docker
Download & install from: https://www.docker.com/products/docker-desktop

Restart your computer!

### 2️⃣ Verify
```bash
docker --version
docker-compose --version
```

### 3️⃣ Navigate to Project
```bash
cd C:\Users\azizbey abrorovich\Downloads\korea-education-platform\korea-education-platform
```

### 4️⃣ Create .env File
```bash
copy .env.docker .env
```

### 5️⃣ Start Everything
```bash
docker-compose up
```

**DONE!** 🎉

---

## 🌐 ACCESS YOUR APP

| What | URL |
|------|-----|
| **Landing Page** | http://localhost:3000 |
| **Admin Panel** | http://localhost:3000/admin |
| **API** | http://localhost:3001/api/health |

---

## 🔑 Admin Login
- **Email:** admin@koreaed.uz
- **Password:** admin123

---

## 📋 What's Running

```
✅ PostgreSQL Database (port 5432)
✅ Node.js Backend (port 3001)
✅ React Frontend (port 3000)
✅ Everything Connected
```

---

## 🛑 Stop Everything
```bash
Press Ctrl+C
```

---

## 🔄 Restart
```bash
docker-compose up
```

---

## 📊 Check Status
```bash
docker-compose ps
```

---

## 📖 Full Guide
Read: `DOCKER_SETUP.md` for detailed instructions

---

**That's it! No Node.js install needed!** 🚀
