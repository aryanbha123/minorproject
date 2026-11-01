# Minor Project

A full-stack starter: a React + Vite front end and an Express backend packaged as a Vercel serverless function.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## About

This repository is the initial setup for a minor (academic) project. The front end is still the default Vite + React template, and the backend exposes a single health-check route wrapped with `serverless-http` so it can run on Vercel. Mongoose and CORS are installed for upcoming work but not used yet.

## What's Here

- **Backend** (`backend/api/server.js`)
  - `GET /` returns `{ "message": "Health Check working", "success": true }`
  - A JSON error handler that returns `success: false` with the error message and status
  - `vercel.json` routes every path to `api/server.js` on the Node.js 20 runtime
- **Frontend** (`frontend/`)
  - React 19 + Vite 7 with the SWC plugin and ESLint
  - Reads the API base URL from `VITE_APP_BASE_URL`

## Tech Stack

| Part | Technology |
| --- | --- |
| Frontend | React 19, Vite 7, ESLint |
| Backend | Node.js, Express 5, serverless-http |
| Planned | MongoDB (Mongoose), CORS |
| Deployment config | Vercel |

## Project Structure

```
minorproject/
├── backend/
│   ├── api/server.js    # Express app exported as a serverless handler
│   ├── config.js
│   └── vercel.json
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   └── main.jsx
    └── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js and npm
- Vercel CLI (optional, to run the backend locally as a serverless function)

### Frontend

```bash
cd frontend
npm install
npm run dev       # Vite dev server
npm run build     # production build
npm run preview
npm run lint
```

Environment variables (`frontend/.env`):

| Variable | Purpose |
| --- | --- |
| `VITE_APP_BASE_URL` | Base URL of the backend API |

### Backend

```bash
cd backend
npm install
vercel dev        # serves api/server.js locally
```

## Author

**Aryan Bhandari**: [GitHub](https://github.com/aryanbha123)
