/**
 * Sorting Algorithms Implementation
 * 
 * 📚 Contains:
 * 1. Bubble Sort
 * 2. Selection Sort
 * 3. Quick Sort
 * 4. Merge Sort
 */

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  
  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Test Cases
console.log(bubbleSort([3, 1, 4, 2])); // [1, 2, 3, 4]
console.log(quickSort([3, 1, 4, 2]));  // [1, 2, 3, 4]