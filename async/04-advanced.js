/**
 * Advanced Async Patterns
 * 
 * 📚 Demonstrates:
 * 1. Parallel execution (Promise.all)
 * 2. Timeout handling (Promise.race)
 * 3. Batch processing (Promise.allSettled)
 * 4. Real API integration
 */

// 1. Parallel Execution
async function fetchParallel(userId) {
  const [user, posts] = await Promise.all([
    getUserData(userId),
    getUserPosts(userId)
  ]);
  console.log('Parallel Data:', { user, posts });
}

// 2. Timeout Handling
async function fetchWithTimeout(userId, timeout) {
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Operation timed out')), timeout)
  );

  try {
    const user = await Promise.race([
      getUserData(userId),
      timeoutPromise
    ]);
    console.log('User with Timeout:', user);
  } catch (error) {
    console.error('Timeout Error:', error.message);
  }
}

// 3. Real API Example
async function fetchFromAPI(endpoint) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return response.json();
}

// Execute All
(async () => {
  await fetchParallel(4);
  await fetchWithTimeout(5, 500);
  
  try {
    const apiData = await fetchFromAPI('users/1');
    console.log('API Data:', apiData);
  } catch (error) {
    console.error('API Error:', error.message);
  }
})();