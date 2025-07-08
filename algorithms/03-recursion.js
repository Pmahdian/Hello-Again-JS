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

// ==========================================
// 4. Tree Traversal
// ==========================================
console.log('\n=== Tree Traversal ===');

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * In-order Traversal (Left-Root-Right)
 */
function inOrderTraversal(node) {
  if (!node) return;
  
  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}

// Sample Tree
const tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(6);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);

console.log('In-order Traversal:');
inOrderTraversal(tree); // 1, 2, 3, 4, 6

// ==========================================
// 🎯 Practice Exercises
// ==========================================
console.log('\n=== Practice Exercises ===');

/**
 * 1. Power Calculation (x^y)
 */
function power(x, y) {
  if (y === 0) return 1;
  return x * power(x, y - 1);
}
console.log('2^5:', power(2, 5)); // 32

/**
 * 2. Flatten Nested Arrays
 */
function flattenArray(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}
console.log('Flattened:', flattenArray([1,[2,[3,4],5]])); // [1,2,3,4,5]
