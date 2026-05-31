# taskflow

A task management dashboard for the tech industry. Users can sign up, log in and manage their tasks including creating, editing, deleting and filtering by status.

> Currently in development — launching Q3 2026

---

## Tech Stack

**Frontend**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

**Backend**
- Next.js API Routes
- Prisma ORM
- PostgreSQL

**Auth**
- Auth.js

**Testing**
- Jest
- React Testing Library

---

## Features

- User authentication with protected routes
- User-specific data — every user only sees their own tasks
- Create, edit and delete tasks
- Task status: `todo`, `in progress`, `done`
- Filter tasks by status
- Sort tasks by date
- Dashboard overview with task stats

---

## Roadmap

- [x] Project setup
- [ ] Database schema with Prisma
- [ ] Authentication with Auth.js
- [ ] Task CRUD endpoints
- [ ] Dashboard UI
- [ ] Task list with filters
- [ ] Deploy to Vercel + Neon

---

## Getting Started

### Prerequisites

- Node.js v20+
- PostgreSQL (local or via [Neon](https://neon.tech))

### Installation

​```bash
git clone https://github.com/lina98st/taskflow.git
cd taskflow
npm install
​```

### Environment Variables

Create a `.env.local` file in the root:

​```env
DATABASE_URL="postgresql://localhost:5432/taskflow"
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
​```

### Run locally

​```bash
npm run dev
​```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Author

**Alina Schmidt**
