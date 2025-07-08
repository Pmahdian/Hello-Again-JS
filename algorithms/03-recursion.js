/**
 * 03-recursion.js
 * 
 * Recursion Examples and Exercises
 * 
 * 📚 Topics Covered:
 * 1. Basic recursion
 * 2. Recursion with memoization
 * 3. Divide and conquer
 * 4. Recursive tree traversal
 */


// ==========================================
// 1. Basic Recursion
// ==========================================
console.log('=== Basic Recursion ===');

/**
 * Factorial Calculation
 * Time: O(n), Space: O(n)
 */
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log('Factorial(5):', factorial(5)); // 120

// ==========================================
// 2. Recursion with Memoization
// ==========================================
console.log('\n=== Memoization ===');
