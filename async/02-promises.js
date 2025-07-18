/**
 * Promise-based Implementation
 * 
 * 📚 Demonstrates:
 * 1. Converting callbacks to promises
 * 2. Promise chaining (.then().catch())
 * 3. Error handling
 */

function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!userId) reject(new Error('User ID required'));
      resolve({ id: userId, name: 'Jane Smith' });
    }, 1000);
  });
}

function getUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Post 3', 'Post 4']);
    }, 1500);
  });
}

// Usage Example
getUserData(2)
  .then(user => {
    console.log('User:', user);
    return getUserPosts(user.id);
  })
  .then(posts => {
    console.log('Posts:', posts);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });