# Day 17 – Authentication Basics (Register + Login)

## 📌 Overview
Day 17 builds on the Members API foundation by introducing **User Authentication**.  
This includes creating a `User` model, validating input with Joi, hashing passwords using **bcrypt**, and implementing **Register** and **Login** routes.  
Further plan : JWT authentication in Day 18.

---

## 🚀 Features Implemented
- **User Model**
  - `name`: string, minimum 6 characters, required.
  - `email`: valid format, unique, required.
  - `password`: minimum 8 characters, required, stored as a **hashed string**.
  - Automatic timestamps (`createdAt`, `updatedAt`).

- **Authentication Routes**
  - **POST /auth/register**
    - Validates request body with Joi.
    - Checks for duplicate email.
    - Hashes password using `bcrypt.hash()`.
    - Saves user to MongoDB.
    - Returns JSON with `id`, `name`, and `email`.
  - **POST /auth/login**
    - Validates request body with Joi.
    - Finds user by email.
    - Compares entered password with stored hash using `bcrypt.compare()`.
    - Returns JSON with success message and user details.

- **Validation**
  - Implemented with **Joi** in `registerValidation.js` and `loginValidation.js`.
  - Rules:
    - `name`: string, trimmed, minimum 6 characters, required.
    - `email`: valid email format, required.
    - `password`: minimum 8 characters, required.
  - Invalid inputs return `400 Bad Request`.

- **Error Handling**
  - Centralized middleware (`errorHandler.js`) handles:
    - Joi validation errors.
    - Mongoose `ValidationError`.
    - Invalid ObjectId (`CastError`).
    - Duplicate key errors (`11000`).
  - Returns consistent JSON responses:
    ```json
    {
      "success": false,
      "message": "Error details here"
    }
    ```

---

## 🛠️ Tech Stack
- **Node.js + Express**
- **MongoDB + Mongoose**
- **Joi** for validation
- **bcryptjs** for password hashing
- **dotenv** for environment variables

---

## 📖 Key Learning
- **Day 16** → Members API with validation and error handling.  
- **Day 17** → Introduces authentication with Register + Login routes.  
- Learned how to:
  - Hash passwords securely before saving.
  - Compare hashed passwords during login.
  - Validate user input with Joi.
  - Handle duplicate emails and invalid credentials gracefully.
- Established the foundation for **JWT authentication** in Day 18.
