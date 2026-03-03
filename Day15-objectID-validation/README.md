# Day 15 – Members API with ObjectId Validation

## 📌 Overview
Day 15 builds on the Members API from Day 14 by introducing **ObjectId validation middleware**.  
This ensures that any request using `/:id` parameters is checked before hitting the database, preventing malformed IDs from causing errors and keeping responses consistent.

---

## 🚀 Features Implemented
- **Filtering, Sorting, Pagination**
  - Query parameters allow flexible filtering.
  - Sorting supported via `?sort=field1,-field2`.
  - Pagination with `?page=1&limit=10`.

- **CRUD Operations**
  - **GET /members** → Retrieve all members with filters.
  - **GET /members/:id** → Retrieve a member by ID (with ObjectId validation).
  - **POST /members** → Create a new member (with Joi validation).
  - **PUT /members/:id** → Update an existing member (with Joi + ObjectId validation).
  - **DELETE /members/:id** → Delete a member by ID (with ObjectId validation).

- **Validation**
  - **Body validation** → Implemented with **Joi** in `memberValidation.js`.
  - **Param validation** → Implemented with **mongoose.Types.ObjectId.isValid()` in `validateObjectId.js`.
  - Rules:
    - `name`: string, trimmed, minimum 6 characters, required.
    - `email`: valid email format, required, unique.
  - Invalid ObjectId format returns `400 Bad Request`.  
  - Valid but non‑existent IDs return `404 Not Found`.

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
- **dotenv** for environment variables

---

## 📖 Key Learning
- **Day 14** → Validates request bodies (POST/PUT).  
- **Day 15** → Validates route parameters (`/:id`).  
- Use `400 Bad Request` for invalid ID format, `404 Not Found` for valid but missing resources.  
- Centralized error handling ensures clean, API design.  
- Middleware order matters: `express.json()` → `logger` → routes → `errorHandler`.
