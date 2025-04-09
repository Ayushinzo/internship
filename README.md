# API Documentation

This document provides an overview of the API routes available in the backend of the project. The routes are organized into two main categories: **Authentication** and **Feedback**.

---

## Authentication Routes (`auth.js`)

### 1. **Register User**
- **Endpoint**: `/auth/register`
- **Method**: `POST`
- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  - **Success**:
    ```json
    {
      "success": true,
      "message": "User registered",
      "token": "string",
      "user": {
        "username": "string",
        "email": "string"
      }
    }
    ```
  - **Failure**:
    ```json
    {
      "success": false,
      "message": "Error message"
    }
    ```

---

### 2. **Login User**
- **Endpoint**: `/auth/login`
- **Method**: `POST`
- **Description**: Logs in an existing user.
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  - **Success**:
    ```json
    {
      "success": true,
      "message": "Logged in successful",
      "token": "string",
      "user": {
        "username": "string",
        "email": "string"
      }
    }
    ```
  - **Failure**:
    ```json
    {
      "success": false,
      "message": "Error message"
    }
    ```

---

### 3. **Get User**
- **Endpoint**: `/auth/getUser`
- **Method**: `GET`
- **Description**: Retrieves the authenticated user's details using a token.
- **Headers**:
  ```json
  {
    "Authorization": "bearer <token>"
  }
  ```
- **Response**:
  - **Success**:
    ```json
    {
      "success": true,
      "decoded": {
        "username": "string",
        "email": "string"
      }
    }
    ```
  - **Failure**:
    ```json
    {
      "success": false,
      "message": "Unauthorized"
    }
    ```

---

## Feedback Routes (`feedback.js`)

### 1. **Send Feedback**
- **Endpoint**: `/feedback/send`
- **Method**: `POST`
- **Description**: Submits feedback for a product.
- **Request Body**:
  ```json
  {
    "username": "string",
    "productName": "string",
    "title": "string",
    "description": "string"
  }
  ```
- **Response**:
  - **Success**:
    ```json
    {
      "success": true,
      "message": "Feedback sent"
    }
    ```
  - **Failure**:
    ```json
    {
      "success": false,
      "message": "Could not send feedback"
    }
    ```

---

### 2. **Get Feedbacks**
- **Endpoint**: `/feedback/get`
- **Method**: `GET`
- **Description**: Retrieves all feedbacks.
- **Response**:
  - **Success**:
    ```json
    {
      "success": true,
      "data": [
        {
          "username": "string",
          "productName": "string",
          "title": "string",
          "description": "string"
        }
      ]
    }
    ```
  - **Failure**:
    ```json
    {
      "success": false,
      "message": "Could not fetch feedbacks"
    }
    ```

---

## Notes
- Ensure that the `.env` file contains the following environment variables:
  - `JWT_SECRET`: Secret key for JWT token generation.
  - `FRONTEND_URL`: URL of the frontend application.
  - `PORT`: Port number for the backend server.
- Use appropriate headers for authentication where required.


# Brief documentation

## Tech Stack

This project leverages a modern tech stack to ensure scalability, maintainability, and a seamless user experience. Below is an overview of the technologies used and their purpose:

---

### **Frontend**
1. **React**
   - **Why?**: React's component-based architecture allows for reusable and dynamic UI components.
   - **Usage**: Built interactive components like `Navbar`, `FeedbackForm`, and `Products`.

2. **Vite**
   - **Why?**: Vite provides a fast development server with hot module replacement (HMR) and optimized builds.
   - **Usage**: Used as the build tool and development environment for the React application.

3. **React Router**
   - **Why?**: Enables declarative routing for single-page applications.
   - **Usage**: Managed navigation between pages like `Home` and `FeedbackList`.

4. **Redux Toolkit**
   - **Why?**: Simplifies state management with minimal boilerplate and built-in support for asynchronous actions.
   - **Usage**: Managed global state for user authentication and feedback data.

5. **Axios**
   - **Why?**: Simplifies HTTP requests with support for interceptors and error handling.
   - **Usage**: Communicated with the backend API for authentication and feedback operations.

6. **React Icons**
   - **Why?**: Easy integration of scalable vector icons.
   - **Usage**: Added icons for UI elements like logout and navigation.

7. **React Toastify**
   - **Why?**: Provides lightweight and customizable notifications.
   - **Usage**: Displayed success and error messages in the frontend.

---

### **Backend**
1. **Node.js**
   - **Why?**: Non-blocking, event-driven architecture for handling concurrent requests.
   - **Usage**: Built the backend server to handle API requests.

2. **Express.js**
   - **Why?**: Minimalist framework for building RESTful APIs.
   - **Usage**: Created routes for authentication (`auth.js`) and feedback (`feedback.js`).

3. **MongoDB**
   - **Why?**: MongoDB database for flexible and scalable data storage.
   - **Usage**: Stored user data and feedback in collections.

4. **Mongoose**
   - **Why?**: Simplifies interaction with MongoDB using schemas and models.
   - **Usage**: Defined schemas for `User` and `Feedback` in the database.

5. **JSON Web Tokens (JWT)**
   - **Why?**: Secure and stateless authentication mechanism.
   - **Usage**: Generated and verified tokens for user authentication.

6. **bcrypt**
   - **Why?**: Secure password hashing for user credentials.
   - **Usage**: Hashed passwords during user registration and verified them during login.

---

# How you approached the problems?
  - Whenever I got any problem or error, I searched them on stack overflow and also used AI to solve it. This is how I approached the problems.
