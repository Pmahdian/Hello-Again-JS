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
