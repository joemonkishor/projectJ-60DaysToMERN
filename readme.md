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
│
├── Day2-arrays-objects/
│   ├── arrays.js
│   └── objects.js
│
├── Day3-objects-methods/
│   ├── objectMethods.js
│   └── expenseManager.js
│
├── Day4-user-expenseManager/
│   ├── user.js
│   └── expenseManagerIntegration.js
│
├── Day5-functions-async/
│   ├── callbacks.js       // Callback examples (doubleNumber, password checker)
│   ├── promises.js        // Promise examples (data fetch, password manager, weather app)
│   ├── asyncAwait.js      // Simple async/await example with data fetch
│   └── fakeApi.js         // Weather app simulation using async/await
│
└── README.md

```

---

## 🎯 Final Goal
Build and deploy an **AI-powered Expense Manager** with:
- Expense tracking
- AI categorization
- AI insights & chatbot
- Deployment on Vercel/Heroku
