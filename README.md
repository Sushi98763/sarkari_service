# Apollo Doctors Clone - Assignment

This project is a simplified clone of the Apollo doctor listing system, built as a full-stack assignment.

## Features

- Backend (Node.js + Express + MongoDB)
  - Add a new doctor (POST `/api/doctors`)
  - Filter and paginate doctor list (GET `/api/doctors?location=X&page=1&limit=10`)

- Frontend (Next.js)
  - Doctor list with location filter

---

## How to Run

### 1. Backend Setup

```bash
cd backend
npm install
node server.js
```

Make sure you have MongoDB running locally on `mongodb://localhost:27017/doctorsdb`.

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Folder Structure

- `/backend`: Express.js backend with MongoDB
- `/frontend`: Next.js frontend with filtering

---

## Author

Assignment project for submission.
