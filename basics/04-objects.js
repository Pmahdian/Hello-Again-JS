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


// ==========================================
// 2. Object Methods and 'this'
// ==========================================
console.log('\n=== Part 2: Object Methods ===');

const account = {
  owner: 'Alex',
  balance: 1000,
  
  // Method to deposit money
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  },
  
  // Method to withdraw money
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Insufficient funds');
      return;
    }
    this.balance -= amount;
    console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
  }
};

account.deposit(500);
account.withdraw(200);
account.withdraw(2000); // Should show insufficient funds