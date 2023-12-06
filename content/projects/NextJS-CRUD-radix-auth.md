---
external: false
title: "NextJS CRUD - Radix UI - Next Auth"
description: "A NextJS CRUD application powered by Radix UI and NextAuth, designed for seamless user authentication, efficient frontend styling with Radix UI components, and robust CRUD operations backed by a SQLite database."
date: 2022-09-22
---

## ✏️ About the Project

A NextJS CRUD application powered by Radix UI and NextAuth, designed for seamless user authentication and CRUD operations backed by a SQLite database.

Check the [Github Repository](https://github.com/manureichel/crud-radix-next).

![Next Radix App Screenshot](https://manuelreichel.com.ar/projectsfiles/next-auth-2.png)
![Next Radix App Screenshot](https://manuelreichel.com.ar/projectsfiles/next-auth-1.png)

## Dev File:

Place this content in a file named dev.env in the root directory of your project. These environment variables will be used for configuring NextAuth and Prisma to handle authentication and interact with the SQLite database during development.

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=yoursecret
DATABASE_URL="file:./dev.db"
```

## 💻 Features:

- **Authentication:** Integration of NextAuth for user authentication.
- **Frontend:** Radix UI for styled components and predefined logic.
- **Form Handling:** Utilized React Hook Form for efficient and effective form management.
- **Database Interaction:** Prisma ORM employed for seamless interaction with the SQLite database.
- **CRUD Operations:** Implementation of CRUD queries to interact with the SQLite database.
- **Route Protection:** Functionality included to protect sensitive routes.

## Prerequisites

Make sure you have installed on your system:

- Node.js

## Installation

```bash
# Clone the repository
git clone https://github.com/manureichel/crud-radix-next

# Enter the project directory
cd crud-radix-next

# Install dependencies
npm install # or yarn install
```
