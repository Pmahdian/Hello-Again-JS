/**
 * 03-arrays.js
 * 
 * Comprehensive JavaScript Array Exercises
 * 
 * 📚 Topics Covered:
 * 1. Array creation and access
 * 2. Basic array methods (push, pop, shift, unshift)
 * 3. Transformation methods (map, filter, reduce)
 * 4. Search methods (find, some, every)
 * 5. Other useful methods (slice, splice, concat, etc.)
 */
// ==========================================
// 1. Array Creation and Access
// ==========================================
console.log('=== Part 1: Array Creation and Access ===');

// Create an array of fruits
const fruits = ['Apple', 'Banana', 'Orange', 'Grape'];

// Accessing array elements
console.log(fruits[0]); // 'Apple' (first element)
console.log(fruits.length); // 4 (array length)
console.log(fruits[fruits.length - 1]); // Last element: 'Grape'


// ==========================================
// 2. Basic Array Modification Methods
// ==========================================
console.log('\n=== Part 2: Array Modification Methods ===');

// Add to end of array
fruits.push('Persimmon');
console.log('After push:', fruits);

// Remove from end
const lastFruit = fruits.pop();
console.log('Removed fruit:', lastFruit);
console.log('After pop:', fruits);

// Add to beginning
fruits.unshift('Kiwi');
console.log('After unshift:', fruits);

// Remove from beginning
const firstFruit = fruits.shift();
console.log('Removed fruit:', firstFruit);
console.log('After shift:', fruits);
// ==========================================
// 3. Array Transformation Methods
// ==========================================
console.log('\n=== Part 3: Array Transformation ===');

const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const squared = numbers.map(num => num * num);
console.log('Squared numbers:', squared);

// filter - select elements
const evens = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evens);

// reduce - accumulate values
const sum = numbers.reduce((total, num) => total + num, 0);
console.log('Sum of numbers:', sum);



// ==========================================
// 4. Array Search Methods
// ==========================================
console.log('\n=== Part 4: Array Searching ===');

const users = [
  { id: 1, name: 'Ali', age: 25 },
  { id: 2, name: 'Maryam', age: 30 },
  { id: 3, name: 'Reza', age: 22 }
];

// find - get first matching element
const youngUser = users.find(u => u.age < 30);
console.log('User under 30:', youngUser);

// some - check if any elements match
const hasTeen = users.some(u => u.age < 20);
console.log('Has teenager?', hasTeen);

// every - check if all elements match
const allAdults = users.every(u => u.age >= 18);
console.log('All adults?', allAdults);



// ==========================================
// 5. Other Useful Array Methods
// ==========================================
console.log('\n=== Part 5: Other Array Methods ===');

// slice - get subarray (non-destructive)
const someFruits = fruits.slice(1, 3);
console.log('Fruits subarray:', someFruits);

// splice - modify array (destructive)
fruits.splice(1, 1, 'Pineapple', 'Tangerine');
console.log('After splice:', fruits);

// concat - combine arrays
const moreFruits = ['Fig', 'Raspberry'];
const allFruits = fruits.concat(moreFruits);
console.log('Combined fruits:', allFruits);


// ==========================================
// 🎯 Practice Exercises
// ==========================================
console.log('\n=== Practice Exercises ===');