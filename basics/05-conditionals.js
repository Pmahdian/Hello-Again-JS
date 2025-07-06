/**
 * 05-conditionals.js
 * 
 * JavaScript Conditional Statements Practice
 * 
 * 📚 Topics Covered:
 * 1. if/else statements
 * 2. Ternary operator
 * 3. Switch statements
 * 4. Logical operators
 * 5. Nullish coalescing
 * 6. Optional chaining
 */


// ==========================================
// 1. Basic if/else Statements
// ==========================================
console.log('=== Part 1: if/else Statements ===');

function checkAge(age) {
  if (age >= 18) {
    return 'You are an adult';
  } else {
    return 'You are a minor';
  }
}

console.log(checkAge(25)); // "You are an adult"
console.log(checkAge(15)); // "You are a minor"
