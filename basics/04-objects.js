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

// ==========================================
// 3. Iterating Over Objects
// ==========================================
console.log('\n=== Part 3: Object Iteration ===');

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  color: 'blue'
};

// for...in loop
console.log('Car properties:');
for (const key in car) {
  console.log(`${key}: ${car[key]}`);
}

// Object.keys(), Object.values(), Object.entries()
console.log('Keys:', Object.keys(car));
console.log('Values:', Object.values(car));
console.log('Entries:', Object.entries(car));

// ==========================================
// 4. Object Destructuring
// ==========================================
console.log('\n=== Part 4: Object Destructuring ===');

const student = {
  name: 'Sarah',
  grade: 'A',
  subjects: ['Math', 'Physics']
};

// Basic destructuring
const { name, grade } = student;
console.log(`${name} has grade ${grade}`);

// Renaming variables
const { name: studentName } = student;
console.log('Student name:', studentName);

// Default values
const { scholarship = false } = student;
console.log('Has scholarship?', scholarship);

// Nested destructuring
const { subjects: [firstSubject] } = student;
console.log('First subject:', firstSubject);


// ==========================================
// 5. Object Spread Operator
// ==========================================
console.log('\n=== Part 5: Spread Operator ===');

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// Merging objects
const merged = { ...obj1, ...obj2 };
console.log('Merged objects:', merged); // { a: 1, b: 3, c: 4 }

// Creating copies
const personCopy = { ...person };
personCopy.firstName = 'Mike';
console.log('Original:', person.firstName);
console.log('Copy:', personCopy.firstName);

// ==========================================
// 6. Prototypes and Classes
// ==========================================
console.log('\n=== Part 6: Prototypes and Classes ===');

// Constructor function
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Adding method to prototype
Product.prototype.display = function() {
  console.log(`${this.name} costs $${this.price}`);
};

const product1 = new Product('Laptop', 999);
product1.display();

// ES6 Class syntax
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  
  getInfo() {
    return `${this.title} by ${this.author}`;
  }
}

const book1 = new Book('1984', 'George Orwell');
console.log(book1.getInfo());

// ==========================================
// 🎯 Practice Exercises
// ==========================================
console.log('\n=== Practice Exercises ===');

/**
 * 1. Create a function that merges two objects
 */
function mergeObjects(objA, objB) {
  return { ...objA, ...objB };
}
console.log('Merged:', mergeObjects({ x: 1 }, { y: 2 }));
