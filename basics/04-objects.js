/**
 * 04-objects.js
 * 
 * JavaScript Object Exercises
 * 
 * 📚 Topics Covered:
 * 1. Object Creation and Properties
 * 2. Methods and 'this' Context
 * 3. Object Iteration
 * 4. Object Destructuring
 * 5. Object Spread Operator
 * 6. Prototypes and Classes
 */


// ==========================================
// 1. Object Creation and Properties
// ==========================================
console.log('=== Part 1: Object Basics ===');

// Object literal syntax
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  isEmployed: true,
  address: {
    street: '123 Main St',
    city: 'New York'
  }
};

// Accessing properties
console.log(person.firstName); // Dot notation
console.log(person['lastName']); // Bracket notation
console.log(person.address.city); // Nested access

// Adding new properties
person.email = 'john@example.com';
person['phone'] = '555-1234';

console.log('Modified person:', person);
