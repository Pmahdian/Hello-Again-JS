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


// ==========================================
// 3. Switch Statements
// ==========================================
console.log('\n=== Part 3: Switch Statements ===');

function getDayName(dayNumber) {
  let day;
  switch (dayNumber) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
    default:
      day = 'Invalid day';
  }
  return day;
}

console.log(getDayName(3)); // "Wednesday"
console.log(getDayName(8)); // "Invalid day"

// ==========================================
// 4. Logical Operators
// ==========================================
console.log('\n=== Part 4: Logical Operators ===');


// AND (&&) operator
function canDrive(age, hasLicense) {
  return age >= 16 && hasLicense;
}

console.log(canDrive(17, true));  // true
console.log(canDrive(15, true));  // false

// OR (||) operator
function isEligibleForDiscount(age, isStudent) {
  return age < 12 || isStudent;
}

console.log(isEligibleForDiscount(10, false)); // true
console.log(isEligibleForDiscount(20, true));  // true


// NOT (!) operator
function isNotAdult(age) {
  return !(age >= 18);
}

console.log(isNotAdult(20)); // false
console.log(isNotAdult(15)); // true

// ==========================================
// 5. Nullish Coalescing (??)
// ==========================================
console.log('\n=== Part 5: Nullish Coalescing ===');

function getUserName(name) {
  return name ?? 'Anonymous';
}

console.log(getUserName(null));      // "Anonymous"
console.log(getUserName('Alice'));   // "Alice"

// ==========================================
// 6. Optional Chaining (?.)
// ==========================================
console.log('\n=== Part 6: Optional Chaining ===');

const user = {
  profile: {
    name: 'John',
    address: {
      city: 'New York'
    }
  }
};

console.log(user.profile?.name);           // "John"
console.log(user.profile?.age);            // undefined
console.log(user.profile?.address?.city);  // "New York"
console.log(user.settings?.theme);         // undefined


// ==========================================
// 🎯 Practice Exercises
// ==========================================
console.log('\n=== Practice Exercises ===');

