# Day 18 – JWT Token

## 📌 Overview
Day 18 builds on the authentication foundation by introducing **JWT (JSON Web Token) Authentication**.  
This includes generating tokens during login, verifying them with middleware, and protecting routes so only authenticated users can access them.  
Crucial step that transforms simple login into a secure session mechanism.

---

## 🚀 Features Implemented
- **JWT Token Generation**
  - On successful login, a JWT is created using `jsonwebtoken.sign()`.
  - Payload includes `id` and `email`.
  - Token expires in **1 hour** (`expiresIn: "1h"`).
  - Returned to the client in the login response.

- **Auth Middleware (`authHandler.js`)**
  - Extracts token from `Authorization: Bearer <token>` header.
  - Verifies token using `jwt.verify()` and `JWT_SECRET`.
  - Attaches decoded payload (`req.user`) to the request object.
  - Blocks access if token is missing, invalid, or expired.

- **Protected Route**
  - Added a temporary route `/api/v1/test/protected`.
  - Requires a valid token to access.
  - Returns a message and decoded user payload if authenticated.

- **Error Handling**
  - Centralized middleware (`errorHandler.js`) catches JWT errors:
    - `JsonWebTokenError`
    - `TokenExpiredError`
    - `NotBeforeError`
  - Returns consistent JSON responses:
    ```json
    {
      "success": false,
      "message": "Authentication failed"
    }
    ```

---

## 🛠️ Tech Stack
- **Node.js + Express**
- **MongoDB + Mongoose**
- **Joi** for validation
- **bcrypt** for password hashing
- **jsonwebtoken** for JWT creation & verification
- **dotenv** for environment variables

---

## 📖 Key Learning
- **Day 17** → Register + Login with hashed passwords.  
- **Day 18** → Added JWT authentication:
  - Generate tokens on login.
  - Verify tokens with middleware.
  - Protect routes so only authenticated users can access them.
- Learned how to:
  - Secure routes using middleware.
  - Decode token payloads for user‑specific queries.
  - Handle expired or invalid tokens gracefully.
- Established the foundation for **user‑specific features** (like expenses) where each user only sees their own data.

---

## 🔑 Usage Flow
1. **Register** → Create a new user.  
2. **Login** → Receive a JWT token.  
3. **Protected Route** → Send token in header:
