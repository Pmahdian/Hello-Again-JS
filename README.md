# Hello-Again-JS ✨ - JavaScript Learning Path

A comprehensive JavaScript practice repository with progressive exercises and real-world projects.

## 📂 Project Structure

```
hello-again-js/
├── basics/                  # Fundamental concepts
│   ├── 01-variables.js
│   ├── 02-functions.js
│   ├── 03-arrays.js         # Includes chunkArray() implementation
│   ├── 04-objects.js        # Includes counter object
│   ├── 05-conditionals.js
│   └── 06-loops.js
│
├── algorithms/              # Computer science concepts
│   ├── 01-sorting.js
│   ├── 02-search.js
│   ├── 03-recursion.js
│   └── 04-dynamic-programming.js
│
├── dom/                     # Web interaction
│   ├── 01-todo-app/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── app.js
│   ├── 02-image-gallery/
│   └── 03-drag-drop/
│
├── async/                   # Asynchronous programming
│   ├── 01-callbacks.js
│   ├── 02-promises.js
│   └── 03-async-await.js
│
├── mini-projects/           # Self-contained apps
│   ├── calculator/
│   ├── weather-app/
│   └── quiz-game/
│
├── templates/               # Starter kits
│   ├── spa-template/        # Single Page App
│   ├── chrome-extension/
│   └── node-server/
│
├── utils/                   # Helper utilities
│   ├── helpers.js
│   └── formatters.js
│
└── tests/                   # Testing suite
    ├── unit/
    └── integration/
```

## 🌟 Key Features

### 1. Core Concepts (`basics/`)
- All ES6+ features covered
- Practical examples with JSDoc
- Progressive difficulty exercises

### 2. DOM Projects (`dom/`)
- Todo App with localStorage
- Image Gallery with lightbox
- Drag & Drop with native API

### 3. Async Patterns (`async/`)
- Callback hell → Promises → Async/Await
- Real API integrations
- Error handling strategies

## 🛠 How to Use

```bash
# Run any exercise
node basics/03-arrays.js

# Start a DOM project
open dom/01-todo-app/index.html
```

## 🧩 Sample Code Highlights

1. **Array Chunking** (`basics/03-arrays.js`):
```javascript
function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}
```

2. **Counter Object** (`basics/04-objects.js`):
```javascript
const counter = {
  count: 0,
  increment() { this.count++ },
  decrement() { this.count-- },
  reset() { this.count = 0 }
};
```

## 📚 Learning Path

1. Master basics (2 weeks)
2. Solve algorithms (3 weeks)
3. Build DOM projects (2 weeks)
4. Practice async patterns (1 week)
5. Create mini-projects (ongoing)

## 🤝 Contribution Guide

1. Fork the repository
2. Add solutions to exercises
3. Submit PR with:
   - Code implementation
   - Test cases
   - Updated documentation

## 🎯 Upcoming Features
- [ ] TypeScript version
- [ ] React integration examples
- [ ] Database connectivity samples