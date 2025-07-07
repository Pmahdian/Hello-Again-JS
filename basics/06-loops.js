/**
 * 06-loops.js
 * 
 * JavaScript Loop Exercises
 * 
 * 📚 Topics Covered:
 * 1. for loops
 * 2. while loops
 * 3. do-while loops
 * 4. for...of loops
 * 5. for...in loops
 * 6. Loop control (break, continue)
 * 7. Array iteration methods
 */


// ==========================================
// 1. Basic for Loop
// ==========================================
console.log('=== Part 1: for Loops ===');

// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}

// Iterate through an array
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit at index ${i}: ${fruits[i]}`);
}
