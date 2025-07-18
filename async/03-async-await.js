/**
 * Modern Async/Await Implementation
 * 
 * 📚 Demonstrates:
 * 1. Syntactic sugar over promises
 * 2. Sequential execution
 * 3. Try/catch error handling
 */

async function fetchUserData(userId) {
  try {
    const user = await getUserData(userId);
    const posts = await getUserPosts(user.id);
    
    console.log('User:', user);
    console.log('Posts:', posts);
    
    return { user, posts };
  } catch (error) {
    console.error('Async Error:', error.message);
    throw error; // Re-throw for further handling
  }
}

// Execution
(async () => {
  await fetchUserData(3);
})();