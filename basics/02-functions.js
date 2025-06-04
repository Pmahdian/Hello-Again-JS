/**
 * 02-functions.js
 * 
 * JavaScript Function Exercises
 * 
 * 📚 Topics Covered:
 * 1. Basic Functions
 * 2. Arrow Functions
 * 3. Default Parameters
 * 4. Higher-Order Functions
 * 5. Callback Functions
 */

// ==========================================
// 1. Basic Function Declaration
// ==========================================
function greet(name) {
  return `Hello, ${name}!`;
}

console.log("=== Basic Function ===");
console.log(greet("Alex")); // Hello, Alex!


// ==========================================
// 2. Function Expression
// ==========================================
const calculateArea = function(width, height) {
  return width * height;
};

console.log("\n=== Function Expression ===");
console.log("Area:", calculateArea(5, 7)); // 35

// ==========================================
// 3. Arrow Functions (ES6)
// ==========================================
const double = (num) => num * 2;

console.log("\n=== Arrow Function ===");
console.log("Double of 8:", double(8)); // 16

// Single argument - parentheses optional
const square = x => x * x;

// Multiple arguments
const add = (a, b) => a + b;

// Multi-line arrow function
const createBio = (name, age) => {
  const intro = `My name is ${name}`;
  const ageInfo = `I'm ${age} years old`;
  return `${intro} and ${ageInfo}`;
};

console.log("Bio:", createBio("Sarah", 28));

// ==========================================
// 4. Default Parameters
// ==========================================
function createUser(name, role = "user") {
  return { name, role };
}

console.log("\n=== Default Parameters ===");
console.log(createUser("Ali")); // { name: 'Ali', role: 'user' }
console.log(createUser("Mina", "admin")); // { name: 'Mina', role: 'admin' }
