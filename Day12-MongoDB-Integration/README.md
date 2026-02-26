
---

## 🚀 Features

- **MongoDB Integration**  
  - Uses Mongoose to connect to MongoDB.  
  - Member data is stored in `projectJ` database.  

- **Modular Routes**  
  - All member operations are defined in `routes/members.js`.  
  - Mounted in `server.js` under `/members`.  

- **Middleware**  
  - `logger.js` → logs HTTP requests.  
  - `errorHandler.js` → handles errors consistently with JSON responses.  

- **Environment Variables**  
  - `.env` file stores `PORT` and `MONGO_URI`.  
  - Loaded via `dotenv` for flexibility and security.  

---

## 🛠️ API Endpoints

### Members
- `GET /members` → Fetch all members.  
- `GET /members/:id` → Fetch a single member by ID.  
- `POST /members` → Add a new member.  
- `PUT /members/:id` → Update an existing member.  
- `DELETE /members/:id` → Remove a member.  

---