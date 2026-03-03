# Day 14 – Members API with Validation & Error Handling

## 📌 Overview
Day 14 builds on the Members API from Day 13 by revising **filtering, sorting, and pagination** features and introducing **Joi validation** for request bodies. This ensures that all data written to the database is clean, consistent, and recruiter‑friendly.

---

## 🚀 Features Implemented
- **Filtering, Sorting, Pagination**
  - Query parameters allow flexible filtering.
  - Sorting supported via `?sort=field1,-field2`.
  - Pagination with `?page=1&limit=10`.

- **CRUD Operations**
  - **GET /members** → Retrieve all members with filters.
  - **GET /members/:id** → Retrieve a member by ID.
  - **POST /members** → Create a new member (with Joi validation).
  - **PUT /members/:id** → Update an existing member (with Joi validation).
  - **DELETE /members/:id** → Delete a member by ID.

- **Validation**
  - Implemented with **Joi** in `memberValidation.js`.
  - Rules:
    - `name`: string, trimmed, minimum 6 characters, required.
    - `email`: valid email format, required, unique.
  - Custom error messages for clarity.

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
---

## 🛠️ Tech Stack
- **Node.js + Express**
- **MongoDB + Mongoose**
- **Joi** for validation
- **dotenv** for environment variables

---
## 📖 Key Learning
- **Validation is required whenever new data is sent in the request body (POST/PUT).**
- **GET and DELETE only check existence** — no body validation needed.
- Centralized error handling makes the API cleaner and easier to maintain.
- Middleware order matters: `express.json()` → `logger` → routes → `errorHandler`.
---



