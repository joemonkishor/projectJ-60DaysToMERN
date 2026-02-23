## Day 10 – Advanced Express Server Practice

### ✅ Topics Covered
- **Basic Express Setup**
  - Created `Day10-express-advanced/server.js`
  - Added root route (`/`) returning HTML

- **JSON Responses**
  - `/api/user` → returns a JSON object `{ name: "Joemon", role: "MERN Learner" }`

- **Query Parameters**
  - `/search?id=101` → demonstrates `req.query` as an object
    - Example: `/search?id=101&name=joemon` → `req.query = { id: "101", name: "joemon" }`
  - `/user?id=101` → includes error handling with `res.status(400)` if query is missing

- **Route Parameters**
  - `/member/:id` → demonstrates `req.params`
  - Converts `req.params.id` (string) to `Number(id)` for comparison
  - Searches in a sample `members` array
  - Returns JSON if found, or `404 Not Found` if missing

### 📝 Key Learnings
- `req.query` → always an object from query string (`?key=value`)
- `req.params` → always an object from route definition (`/:id`)
- Route parameters are **mandatory** for route matching
- Proper error handling with `res.status(400)` (bad request) and `res.status(404)` (not found)
- Difference between `res.send()` and `res.json()`:
  - `res.send()` → plain text or HTML
  - `res.json()` → structured JSON response (API‑style)

### 🚀 Workflow Improvements
- Added `"start"` script in `package.json`
- Installed and configured **nodemon** for automatic server restarts

### 📌 Outcome
By the end of Day 10:
- Built an advanced Express server with JSON, query, and route parameter routes
- Practiced request/response cycle (`req` and `res`)
- Implemented error handling with proper HTTP status codes
