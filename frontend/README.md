# Task Manager API

## 📌 Description

This is a backend application built using Node.js, Express, and MongoDB.
It allows users to manage tasks with secure authentication using JWT.


## 🚀 Features

* User Registration
* User Login (JWT Authentication)
* Create Task
* Get Tasks
* Update Task
* Delete Task
* Protected Routes



## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* JWT (JSON Web Token)



## 📡 API Endpoints

### Authentication

* POST /api/auth/register
* POST /api/auth/login

### Tasks

* GET /api/tasks
* POST /api/tasks
* PUT /api/tasks/:id
* DELETE /api/tasks/:id



## ▶️ How to Run

1. Clone the repository

2. Install dependencies:
   npm install

3. Create a `.env` file and add:
   MONGO_URI=your_mongodb_connection
   JWT_SECRET=your_secret_key

4. Run the server:
   npm run dev



## 📂 Project Structure

* models/ → Database schemas
* controllers/ → Business logic
* routes/ → API routes
* middleware/ → Authentication

## 🎯 Conclusion

This project demonstrates a complete backend system with authentication and CRUD operations.
