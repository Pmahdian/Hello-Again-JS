/**
 * 04-dynamic-programming.js
 * 
 * Dynamic Programming Examples
 * 
 * 📚 Topics Covered:
 * 1. Fibonacci (Top-down vs Bottom-up)
 * 2. Knapsack Problem
 * 3. Coin Change
 * 4. Longest Common Subsequence
 */

// ==========================================
// 1. Fibonacci Comparison
// ==========================================
console.log('=== Fibonacci Approaches ===');

/**
 * Top-down (Memoization)
 */
function fibMemo(n, memo = [0, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

/**
 * Bottom-up (Tabulation)
 */
function fibTab(n) {
  if (n <= 2) return 1;
  const dp = [0, 1, 1];
  
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
}

console.log('Top-down (40):', fibMemo(40));
console.log('Bottom-up (40):', fibTab(40));

// ==========================================
// 2. 0/1 Knapsack Problem
// ==========================================
console.log('\n=== Knapsack Problem ===');

function knapsack(values, weights, capacity) {
  const n = values.length;
  const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  
  return dp[n][capacity];
}

const values = [60, 100, 120];
const weights = [10, 20, 30];
console.log('Max Value (50):', knapsack(values, weights, 50)); // 220

// ==========================================
// 3. Coin Change
// ==========================================
console.log('\n=== Coin Change ===');

function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  
  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log('Min Coins:', coinChange([1,2,5], 11)); // 3

// ==========================================
// 🎯 Practice Exercises
// ==========================================
console.log('\n=== Practice Exercises ===');

/**
 * 1. Longest Increasing Subsequence
 */
function lis(nums) {
  const dp = Array(nums.length).fill(1);
  
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  
  return Math.max(...dp);
}
console.log('LIS:', lis([10,9,2,5,3,7,101,18])); // 4