# Article Management System

A full-stack web application for managing articles with CRUD operations.

## Project Overview

This project consists of:

- **Frontend**: Angular-based web application
- **Backend**: Express.js REST API
- **Database**: MongoDB

## Tech Stack

### Frontend

- Angular 17
- RxJS
- TypeScript

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests

### Deployment

- Docker and Docker Compose for containerization

## Project Structure

```
project/
├── frontend/           # Angular frontend application
│   ├── src/            # Source code
│   │   ├── app/        # Angular components
│   │   └── assets/     # Static assets
│   ├── package.json    # Frontend dependencies
│   └── ...
├── backend/            # Express.js backend
│   ├── src/
│   │   ├── api/        # API endpoints
│   │   │   ├── controllers/  # Request handlers
│   │   │   ├── models/       # Data models
│   │   │   └── routes/       # API routes
│   │   ├── database/   # Database configuration
│   │   └── config/     # Application configuration
│   ├── index.js        # Entry point
│   └── package.json    # Backend dependencies
└── docker-compose.yml  # Docker configuration
```

## API Endpoints

| Method | Endpoint          | Description          |
| ------ | ----------------- | -------------------- |
| GET    | /api/articles     | Get all articles     |
| GET    | /api/articles/:id | Get article by ID    |
| POST   | /api/articles     | Create a new article |
| PUT    | /api/articles/:id | Update an article    |
| DELETE | /api/articles/:id | Delete an article    |

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose (for containerized deployment)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Start the MongoDB database:

   ```
   docker-compose up -d
   ```

3. Install and start the backend:

   ```
   cd backend
   npm install
   npm start
   ```

4. Install and start the frontend:

   ```
   cd frontend
   npm install
   npm start
   ```

5. Access the application at `http://localhost:4200`

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
PORT=3000
MONGODB_URI=mongodb://root:rootpassword@localhost:27017/articlesdb
```

## License

This project is licensed under the ISC License.
