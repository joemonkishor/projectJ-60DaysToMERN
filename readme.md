# projectJ-60DaysToMERN

🚀 A 60-day journey to master the MERN stack and build an **AI-powered Expense Manager**.  
Each day’s progress is documented in a separate folder (`Day1-basics`, `Day2-functions`, etc.).

---

## 📅 Daily Progress

### [Day 1 – JavaScript Basics](./Day1-basics)
- Practiced variables (`let`, `const`) and operators.
- Wrote simple functions (declaration, arrow functions).
- Built a **calculator script** using `switch` for operators.

### [Day 2 – Functions & Control Structures](./Day2-functions)
- Practiced function declaration, arrow functions, and expressions.
- Built **cartItemsTotal** function with `switch(true)` for categorizing expenses.
- Used loops (`for`, `for...of`) to iterate through arrays.
- Applied `if/else` to check spending thresholds.

### [Day 3 – Arrays & Objects](./Day3-arrays-objects)
- Practiced array methods (`push`, `pop`, `map`, `filter`, `reduce`).
- Created objects with properties and methods.
- Built a mini Expense List Manager using arrays of objects.

### [Day 4 – Objects + Methods](./Day4-objects-methods)
- Created `ExpenseManager` object with methods (`addExpense`, `calculateTotal`, `getExpenseCount`).
- Created `User` object with properties and methods (`updateEmail`, `getFinalReport`).
- Demonstrated integration of User and ExpenseManager in `integration.js`.

### [Day 5 – Functions + Async](./Day5-functions-async)

- Practiced callbacks, promises, and async/await with error handling.
- Built a fake API simulation to mimic real API latency and responses.
- Added fetch.js to practice real API calls (PokeAPI) using both (`.then()`/,`.catch()` and `async/await`).


### [Day 6 – Error Handling](./Day6-error-handling)
- Practiced basic error handling with `try/catch`.
- Handled errors in Promises using `.catch()`.
- Used `try/catch` with async/await for cleaner error management.
- Created a custom `ValidationError` class extending `Error`.

### [Day 7 – Modules & Imports](./Day7-modules)
- Practiced splitting code into modules using `export` and `import`.
- Created `validation.js` with reusable custom error classes (`ValidationError`, `AuthError`) and functions (`checkAge`, `login`).
- Demonstrated **basic usage** in `index-basic.js`:
  - Imported only `checkAge`.
  - Showed simple error handling with `try/catch`.
- Demonstrated **advanced usage** in `index-advanced.js`:
  - Imported both functions and error classes.
  - Used `instanceof` to distinguish between `ValidationError` and `AuthError`.
  - Showed scalable error handling for multiple error types.

### [Day 8 – Classes & Inheritance](./Day8-classes-inheritance)
- Practiced ES6 class syntax with constructors and methods.
- Created a `Person` class with `name` and `age` properties.
- Extended `Person` into a `User` class with additional properties (`email`, `role`, `password`).
- Implemented `login()` method to validate password and throw `AuthError` if incorrect.
- Implemented `updateEmail()` method to validate email format and throw `ValidationError` if invalid.
- Demonstrated inheritance, modular structure, and error handling together in `index.js`.

### [Day 9 - Express Server Setup](./Day9-node-express/)

- Initialized Node project and installed Express
- Created `server.js` with basic routes:
  - `/` → Home
  - `/about` → About
  - `/contact` → Contact
  - `/login` → Login
- Added 404 handler for unknown routes

### [Day 10 – Advanced Express Server Practice](./Day10-express-advanced/)

- Basic express setup
- Json responses
- ReQuery parameters
- Route parameters

### [Day 11 – Express Middleware & Modular Routes](./Day11-express-middleware/)

- Implemented custom middleware (`logger.js`) and centralized error handling (`errorHandler.js`).
- Modularized routes with `express.Router()` in `members.js` to handle full CRUD operations.
- Verified all routes and error cases in Postman with clean JSON responses.

### [Day 12 - MongoDB Integration with Express](./Day12-MongoDB-Integration/)
- Integrated express server with Mongo Database
- Tested CRUD with Mongo DB.

### [Day 13 - Advanced Query Features](./Day13-Advanced-Queries/) 
- Implemented **filtering, sorting, and pagination** in the Members API. 
- Centralized error handling for validation errors, invalid IDs, and duplicate entries. 
- Added request logging middleware for better debugging. 
- Enhanced CRUD routes with professional JSON responses (`success`, `data`, `count`, `page`). 
- Tested multiple query combinations in Postman (filter + sort + paginate).


### [Day 14 – Validation & Error Handling](./Day14-validation) 
- Revised query features (filtering, sorting, pagination) from Day 13. 
- Added **Joi validation** for POST/PUT requests and centralized error handling for 
  cleaner API responses. 

---

## 🛠️ Tech Stack (Planned)
- JavaScript (ES6+)
- Node.js, Express.js
- MongoDB
- React.js
- AI APIs (OpenAI, Hugging Face)



## 📂 Repo Structure

```text
projectJ-60DaysToMERN/
│
├── Day1-basics/
│   ├── variables.js
│   ├── functions.js
│   └── controlStructures.js
│
├── Day2-functions/
│   ├── functions.js
│   └── calculator.js
│
├── Day3-arrays-objects/
│   ├── arrays.js
│   ├── objects.js
│   └── expenseManager.js
│
├── Day4-objects-methods/
│   ├── ExpenseManager.js
│   ├── User.js
│   └── integration.js
│
├── Day5-functions-async/
│   ├── callbacks.js
│   ├── promises.js
│   ├── asyncAwait.js
│   ├── fakeApi.js
│   └── fetch.js
│
├── Day6-error-handling/
│   ├── errorHandling-basic.js
│   ├── errorHandling-promises.js
│   ├── errorHandling-asyncAwait.js
│   └── customError.js
│
├── Day7-modules/
│   ├── validation.js
│   ├── index-basic.js
│   └── index-advanced.js
│
├── Day8-classes-inheritance/
│   ├── Person.js
│   ├── User.js
│   ├── errors.js
│   └── index.js
│
├── Day9-node-express/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── Day10-express-advanced/
│   ├── server.js       
│   ├── package.json     
│   └── README.md  
│
├── Day11-Middleware-Routes/
│   ├── server.js
│   ├── routes/
│   │   └── members.js
│   ├── middleware/
│   │   ├── logger.js
│   │   └── errorHandler.js
│   └── README.md    
│
├── Day12-MongoDB-Integration/
│   ├── server.js
│   ├── routes/
│   │   └── members.js
│   ├── middleware/
│   │   ├── logger.js
│   │   └── errorHandler.js
│   ├── models/
│   │   └── member.models.js
│   ├── .env
│   └── README.md
│
├── Day13-Advanced-Queries/
│   ├── server.js
│   ├── routes/
│   │   └── members.js
│   ├── middleware/
│   │   ├── logger.js
│   │   └── errorHandler.js
│   ├── models/
│   │   └── member.models.js
│   └── README.md
│
├── Day14-validation/
│   ├── server.js
│   ├── config.js
│   ├── routes/
│   │   └── member.js
│   ├── middlewares/
│   │   ├── logger.js
│   │   └── errorHandler.js
│   ├── models/
│   │   └── member.models.js
│   ├── validation/
│   │   └── memberValidation.js
│   └── README.md
│
├── .gitattributes
└── readme.md


```

---

## 🎯 Final Goal
Build and deploy an **AI-powered Expense Manager** with:
- Expense tracking
- AI categorization
- AI insights & chatbot
- Deployment on Vercel/Heroku
