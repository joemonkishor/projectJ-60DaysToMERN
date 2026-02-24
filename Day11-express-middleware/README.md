# Day 11 – Express Middleware & Modular Routes

## 📖 Concepts Covered
- **Middleware basics**:
  - `express.json()` → parses incoming JSON request bodies.
  - `logger.js` → custom middleware to log request method & URL.
  - `errorHandler.js` → centralized error handling with clean JSON responses.

- **Modular routes with `express.Router()`**:
  - Created `members.js` to handle CRUD operations:
    - `GET /members` → fetch all members.
    - `GET /members/:id` → fetch a single member by ID.
    - `POST /members` → add a new member.
    - `PUT /members/:id` → update an existing member.
    - `DELETE /members/:id` → remove a member.

- **Error handling flow**:
  - Routes throw errors with `next(err)`.
  - `errorHandler.js` catches them and responds with:
    ```json
    {
      "success": false,
      "message": "Error message here"
    }
    ```

## 🛠️ Testing
- Verified all routes in **Postman**:
  - ✅ GET all members.
  - ✅ GET by ID (valid & invalid).
  - ✅ POST new member (valid & missing fields).
  - ✅ PUT update member (valid & invalid ID).
  - ✅ DELETE member (valid & invalid ID).
- Error cases return proper JSON with status codes (400, 404, 500).