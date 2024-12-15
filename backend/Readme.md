# Backend Full Documentation

## Overview
This documentation provides a comprehensive overview of the backend structure, including controllers, middleware, models, configuration, utilities, and the main entry point (`server.js`). It also lists the available API endpoints.

## Controllers
Controllers are responsible for handling incoming HTTP requests and returning responses to the client. They interact with the models to perform operations on the data.

- **auth.controller.js**: 
  - **Endpoints**:
    - `POST /api/auth/login`: Authenticates a user and returns a token.
    - `POST /api/auth/register`: Registers a new user.

- **project.controller.js**: 
  - **Endpoints**:
    - `GET /api/projects`: Retrieves a list of all projects.
    - `POST /api/projects`: Creates a new project.
    - `PUT /api/projects/:id`: Updates an existing project.
    - `DELETE /api/projects/:id`: Deletes a project.

- **proposal.controller.js**: 
  - **Endpoints**:
    - `GET /api/proposals`: Retrieves a list of all proposals.
    - `POST /api/proposals`: Submits a new proposal.
    - `PUT /api/proposals/:id`: Updates an existing proposal.
    - `DELETE /api/proposals/:id`: Deletes a proposal.

- **user.controller.js**: 
  - **Endpoints**:
    - `GET /api/users`: Retrieves a list of all users.
    - `GET /api/users/:id`: Retrieves a specific user's profile.
    - `PUT /api/users/:id`: Updates a user's profile.

## Middleware
Middleware functions are used to process requests before they reach the controllers. They can be used for tasks such as authentication, logging, and error handling.

- **error.middleware.js**: 
  - Handles errors that occur during request processing and sends appropriate responses to the client.

## Models
Models represent the data structure and provide an interface to interact with the database.

- **User Model**: 
  - Fields: `email`, `password`, `firstname`, `lastname`, `role`, `createdAt`, `updatedAt`.
  - Methods: Authentication, password hashing.

- **Project Model**: 
  - Fields: `title`, `description`, `owner`, `createdAt`, `updatedAt`.
  - Methods: CRUD operations.

- **Proposal Model**: 
  - Fields: `projectId`, `userId`, `details`, `createdAt`, `updatedAt`.
  - Methods: CRUD operations.

## Configuration
Configuration files store environment variables and other settings required for the application to run.

- **app.config.js**: 
  - Contains configuration settings such as `MONGODB_URI` for database connection and `PORT` for server listening.

- **jwt.config.js**: 
  - Manages JWT secret and expiration settings.

## Utilities
Utility functions provide reusable code that can be used across different parts of the application.

- **validation.js**: 
  - Contains helper functions for tasks such as data validation and other common operations.

- **project.utils.js**: 
  - Provides utility functions specific to project operations, such as budget calculations.

## Main Entry Point
The main entry point of the application is `server.js`, which sets up the Express server, connects to the MongoDB database, and defines the routes and middleware.

- **server.js**: 
  - Initializes the Express application.
  - Sets up middleware for CORS and JSON parsing.
  - Defines routes for authentication, projects, proposals, users, and feeds.
  - Connects to MongoDB using Mongoose.
  - Starts the server on the specified port.

## API Endpoints Summary
- **Authentication**: 
  - `POST /api/auth/login`
  - `POST /api/auth/register`

- **Projects**: 
  - `GET /api/projects`
  - `POST /api/projects`
  - `PUT /api/projects/:id`
  - `DELETE /api/projects/:id`

- **Proposals**: 
  - `GET /api/proposals`
  - `POST /api/proposals`
  - `PUT /api/proposals/:id`
  - `DELETE /api/proposals/:id`

- **Users**: 
  - `GET /api/users`
  - `GET /api/users/:id`
  - `PUT /api/users/:id`

This documentation should provide a clear understanding of the backend structure and available endpoints for developers working with the system.
