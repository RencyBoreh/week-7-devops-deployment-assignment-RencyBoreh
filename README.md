# 📱 DevConnect – Week 7 DevOps Deployment Assignment

DevConnect is a full-stack contact manager application that allows users to register, authenticate, and manage their personal contacts. Built using React (Vite), Node.js, and Express, the app is fully deployed with automated CI/CD pipelines.

---

## 🚀 Live Deployment URLs

| Component  | URL                                                                 |
|------------|----------------------------------------------------------------------|
| Frontend   | [Vercel App](https://week-7-devops-deployment-assignment-rency-boreh-7lkrxz39p.vercel.app/) |
| Backend    | [Render API](https://week-7-devops-deployment-assignment-qfvz.onrender.com)               |
| Health Check | `/api/health` → confirms backend is active 💪                     |

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Auth**: JWT-based authentication
- **Deployment**: Vercel (frontend), Render (backend)
- **CI/CD**: GitHub Actions

---

## 🎯 Features

- 🔐 User registration and login with JWT
- 📇 Add, edit, delete contacts
- 🧹 Clean UI with Tailwind styling
- 🔄 Backend health check endpoint
- 🔒 Protected API routes via token
- 📦 Fully deployed with CI/CD automation

---

## ⚙️ CI/CD Pipelines

Both frontend and backend have GitHub Actions workflows:

- **Backend**: `.github/workflows/backend-ci.yml`
  - Installs dependencies
  - Runs tests (if defined)
  - Targets `DevConnect/server` directory

- **Frontend**: `.github/workflows/frontend-ci.yml`
  - Lints and builds code
  - Targets `DevConnect/client` directory

Workflows trigger automatically on push to `main`. Status badges can be added here once GitHub recognizes them.

---

## 📁 Folder Structure

week-7-devops-deployment-assignment-RencyBoreh/ ├── DevConnect/ │
├── client/ ← Vite React Frontend │
└── server/ ← Node + Express Backend
├── .github/ │ └── workflows/ │ ├── backend-ci.yml │ └── frontend-ci.yml └── README.md


---

## 🔧 Running Locally

### Backend
```bash
cd DevConnect/server
npm install
npm run dev
Frontend
bash
cd DevConnect/client
npm install
npm run dev
Set up your local .env files using .env.example.

