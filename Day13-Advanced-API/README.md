# Day 13 - Advanced Query Features in Members API

## Overview
On Day 13, we enhanced our backend server by adding **filtering, sorting, and pagination** to the Members API. This makes our API more professional and recruiter‑friendly, allowing clients to query data flexibly and efficiently.

## Features Implemented
- **Filtering**: Query members by specific fields (e.g., `?name=Alice`).
- **Sorting**: Sort results by one or multiple fields (e.g., `?sort=name,email` or `?sort=-email`).
- **Pagination**: Split results into pages using `page` and `limit` parameters.
- **Error Handling**: Centralized error handler for validation errors, invalid IDs, and duplicate entries.
- **Logging**: Middleware to log every request method and URL.
- **CRUD Operations**:
  - `GET /members` → Fetch all members with filtering, sorting, pagination.
  - `GET /members/:id` → Fetch member by ID.
  - `POST /members` → Create a new member.
  - `PUT /members/:id` → Update a member.
  - `DELETE /members/:id` → Delete a member.

## Example Queries
- `GET /members?sort=name` → Sort all members by name.
- `GET /members?sort=-email&page=2&limit=3` → Sort by email descending, return page 2 with 3 results.
- `GET /members?name=Alice&sort=email` → Filter by name Alice, sort by email.
- `GET /members?page=3&limit=5` → Return page 3 with 5 results per page.

## Tech Stack
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- Custom middleware for logging and error handling

