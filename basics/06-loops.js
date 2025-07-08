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

// ==========================================
// 2. while Loops
// ==========================================
console.log('\n=== Part 2: while Loops ===');

// Countdown from 5
let count = 5;
while (count > 0) {
  console.log(`Countdown: ${count}`);
  count--;
}

// Password guessing simulation
const password = 'secret';
let userInput = '';
while (userInput !== password) {
  userInput = prompt('Enter the password:');
}
console.log('Access granted!');

// ==========================================
// 3. do-while Loops
// ==========================================
console.log('\n=== Part 3: do-while Loops ===');

// Run at least once
let num;
do {
  num = prompt('Enter a number between 1-10:');
} while (num < 1 || num > 10);
console.log(`You entered: ${num}`);

// ==========================================
// 4. for...of Loops (Arrays)
// ==========================================
console.log('\n=== Part 4: for...of Loops ===');

// Iterate array elements
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
  console.log(`Color: ${color}`);
}

// Iterate string characters
const word = 'hello';
for (const char of word) {
  console.log(`Character: ${char}`);
}

// ==========================================
// 5. for...in Loops (Objects)
// ==========================================
console.log('\n=== Part 5: for...in Loops ===');

// Iterate object properties
const person = {
  name: 'John',
  age: 30,
  occupation: 'developer'
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// ==========================================
// 6. Loop Control (break & continue)
// ==========================================
console.log('\n=== Part 6: Loop Control ===');

// break example
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log('Breaking at 5');
    break;
  }
  console.log(i);
}