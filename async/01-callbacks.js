/**
 * Basic Callback Pattern Implementation
 * 
 * 📚 Demonstrates:
 * 1. Asynchronous operations with callbacks
 * 2. Callback hell (pyramid of doom)
 * 
 * ⚠️ Warning: Nested callbacks reduce readability
 */

// Simulate fetching user data
function getUserData(userId, callback) {
  setTimeout(() => {
    if (!userId) return callback(new Error('User ID required'));
    callback(null, { id: userId, name: 'John Doe' });
  }, 1000);
}

// Simulate fetching user posts
function getUserPosts(userId, callback) {
  setTimeout(() => {
    callback(null, ['Post 1', 'Post 2']);
  }, 1500);
}

// Usage Example
getUserData(1, (error, user) => {
  if (error) return console.error('Error:', error);
  
  getUserPosts(user.id, (postError, posts) => {
    if (postError) return console.error('Error:', postError);
    console.log('User:', user, 'Posts:', posts);
  });
});