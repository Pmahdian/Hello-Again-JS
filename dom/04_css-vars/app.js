
// Get DOM elements
const inputs = document.querySelectorAll('.controls input');

// Update CSS variables when input values change
function handleUpdate() {
  const suffix = this.dataset.unit || ''; // Get 'px' from data-unit (or empty for color)
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Add event listeners to all inputs
inputs.forEach(input => input.addEventListener('input', handleUpdate));
