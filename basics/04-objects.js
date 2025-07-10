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
 * * 7. Counter Object Implementation (NEW)
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
// 7. Counter Object Implementation
// ==========================================
console.log('\n=== Counter Object ===');

/**
 * Creates a counter object with basic operations
 * @param {number} initialValue Starting count value
 */
function createCounter(initialValue = 0) {
  return {
    count: initialValue,
    
    // Increment counter by 1 or specified amount
    increment(amount = 1) {
      this.count += amount;
      return this.count;
    },
    
    // Decrement counter by 1 or specified amount
    decrement(amount = 1) {
      this.count -= amount;
      return this.count;
    },
    
    // Reset counter to initial value
    reset() {
      this.count = initialValue;
      return this.count;
    },
    
    // Get current count value
    get value() {
      return this.count;
    }
  };
}
// Test Cases
const counter = createCounter(5);
console.log('Initial value:', counter.value); // 5

console.log('After increment:', counter.increment()); // 6
console.log('After increment(3):', counter.increment(3)); // 9

console.log('After decrement:', counter.decrement()); // 8
console.log('After decrement(2):', counter.decrement(2)); // 6

console.log('After reset:', counter.reset()); // 5
console.log('Current value:', counter.value); // 5

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

/**
 * 2. Create a shopping cart object with methods
 */
const cart = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  },
  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
};

cart.addItem({ id: 1, name: 'Shirt', price: 25 });
cart.addItem({ id: 2, name: 'Pants', price: 40 });
console.log('Cart total:', cart.getTotal());

/**
 * 3. Create a class for a Bank Account
 */
class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }
  
  deposit(amount) {
    this.balance += amount;
  }
  
  withdraw(amount) {
    if (amount > this.balance) throw new Error('Insufficient funds');
    this.balance -= amount;
  }
}

const myAccount = new BankAccount('Alice', 100);
myAccount.deposit(50);
console.log('Account balance:', myAccount.balance);

/**
 * 4. Create a counter with max/min limits
 */
function createBoundedCounter(initial, max, min) {
  return {
    ...createCounter(initial),
    max,
    min,
    increment(amount = 1) {
      this.count = Math.min(this.count + amount, this.max);
      return this.count;
    },
    decrement(amount = 1) {
      this.count = Math.max(this.count - amount, this.min);
      return this.count;
    }
  };
}

const limitedCounter = createBoundedCounter(3, 5, 0);
console.log('Limited increment:', limitedCounter.increment(10)); // 5 (max)
console.log('Limited decrement:', limitedCounter.decrement(10)); // 0 (min)


// ==========================================
// 🧠 Learning Summary
// ==========================================
/*
Key Object Concepts:
- Encapsulation of state and behavior
- Method definitions using shorthand syntax
- 'this' context binding
- Factory function pattern
- Getter methods for computed properties
*/

