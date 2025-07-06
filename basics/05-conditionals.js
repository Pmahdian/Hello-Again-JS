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



// Else-if ladder
function gradeCalculator(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else {
    return 'F';
  }
}

console.log(gradeCalculator(85)); // "B"



// ==========================================
// 2. Ternary Operator
// ==========================================
console.log('\n=== Part 2: Ternary Operator ===');

function checkTemperature(temp) {
  return temp > 30 ? 'Hot' : 'Moderate';
}

console.log(checkTemperature(35)); // "Hot"
console.log(checkTemperature(25)); // "Moderate"


// Nested ternary
function getFee(isMember) {
  return isMember ? '$2.00' : '$10.00';
}

console.log(getFee(true));  // "$2.00"
console.log(getFee(false)); // "$10.00"

