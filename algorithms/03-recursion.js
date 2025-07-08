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

/**
 * Fibonacci Sequence
 * Time: O(n) with memoization, O(2^n) without
 */
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}
console.log('Fibonacci(10):', fibonacci(10)); // 55

// ==========================================
// 3. Divide and Conquer
// ==========================================
console.log('\n=== Divide & Conquer ===');

/**
 * Binary Search (Recursive)
 * Time: O(log n), Space: O(log n)
 */
function recursiveBinarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  
  return arr[mid] > target 
    ? recursiveBinarySearch(arr, target, left, mid - 1)
    : recursiveBinarySearch(arr, target, mid + 1, right);
}
console.log('Binary Search:', recursiveBinarySearch([1,3,5,7,9], 5)); // 2
