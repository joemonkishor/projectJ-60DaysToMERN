## Day 5 – Functions & Async Programming

### ✅ Topics Covered
- **Callbacks** → Demonstrated asynchronous execution with callback functions.
- **Promises** → Practiced `.then()` / `.catch()` chaining for async flows.
- **Async/Await** → Simplified promise handling with `async/await` and `try/catch`.
- **Fake API Simulation** → Created mock async functions to simulate API calls.
- **Fetch API (New Addition)**  
  - Practiced real API calls using `fetch()` with both `.then()`/`.catch()` and `async/await`.
  - Implemented error handling with `response.ok` checks.
  - Parsed JSON responses correctly (`response.json()` returns a promise).
  - Example: Fetching Pokémon data from [PokeAPI](https://pokeapi.co).

### 📝 Key Learnings
- `fetch()` returns a promise → must handle with `.then()` or `await`.
- `response.json()` also returns a promise → requires `await` or `.then()`.
- Always check `response.ok` before parsing JSON to avoid silent failures.
- Async/await makes code cleaner and easier to read compared to chained `.then()`.

### 🚀 Outcome
By the end of Day 5:
- Gained confidence in handling asynchronous operations.
- Practiced both **promise chaining** and **async/await** with real API data.
- Strengthened fundamentals for future backend/API development.
