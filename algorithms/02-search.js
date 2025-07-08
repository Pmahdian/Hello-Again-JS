/**
 * Search Algorithms Implementation
 * 
 * 📚 Contains:
 * 1. Linear Search
 * 2. Binary Search
 * 3. Breadth-First Search (BFS)
 */

function binarySearch(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedArr[mid] === target) return mid;
    sortedArr[mid] < target ? left = mid + 1 : right = mid - 1;
  }
  
  return -1;
}

// Test Case
const sortedNumbers = [1, 3, 5, 7, 9];
console.log(binarySearch(sortedNumbers, 5)); // 2 (index)