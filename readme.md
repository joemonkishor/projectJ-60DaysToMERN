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
**Callbacks**
- Practiced callback structures with `doubleNumber` and `isPasswordValid`.
- Demonstrated how functions can be passed and executed later.

**Promises**
- Implemented `fetchDataPromise` with `.then()` and `.catch()`.
- Built a Password Manager using Promises to validate user input.
- Created a Weather App simulation using Promises to fetch city temperature.

**Async/Await**
- Converted Promise handling into async/await syntax for cleaner code.
- Checked error handling with `try/catch`.

**Fake API Simulation**
- Built a weather API simulation (`fakeApi.js`) using Promises and async/await.
- Simulated API latency with `setTimeout`.
- Handled both success and error cases for realistic API behavior.

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

---

## 🛠️ Tech Stack (Planned)
- JavaScript (ES6+)
- Node.js, Express.js
- MongoDB
- React.js
- AI APIs (OpenAI, Hugging Face)

---


## 📂 Repo Structure

```text
projectJ-60DaysToMERN/
├── Day1-basics/
│   ├── variables.js
│   ├── functions.js
│   └── controlStructures.js
├── Day2-functions/
│   ├── functions.js
│   └── calculator.js
├── Day3-arrays-objects/
│   ├── arrays.js
│   ├── objects.js
│   └── expenseManager.js
├── Day4-objects-methods/
│   ├── ExpenseManager.js
│   ├── User.js
│   └── integration.js
├── Day5-functions-async/
│   ├── callbacks.js
│   ├── promises.js
│   ├── asyncAwait.js
│   └── fakeApi.js
├── Day6-error-handling/
│   ├── errorHandling-basic.js
│   ├── errorHandling-promises.js
│   ├── errorHandling-asyncAwait.js
│   └── customError.js
├── Day7-modules/
│   ├── validation.js
│   ├── index-basic.js
│   └── index-advanced.js
├── Day8-classes-inheritance/
│   ├── Person.js
│   ├── User.js
│   ├── errors.js
│   └── index.js
└── README.md

```

---

## 🎯 Final Goal
Build and deploy an **AI-powered Expense Manager** with:
- Expense tracking
- AI categorization
- AI insights & chatbot
- Deployment on Vercel/Heroku
