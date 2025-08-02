// Get all control inputs
const inputs = document.querySelectorAll('input[type="range"], input[type="color"]');
const cssOutput = document.getElementById('css-output');
const copyBtn = document.getElementById('copy-btn');

// Update CSS variables and display code
function updateCSS() {
  let cssCode = ':root {\n';
  
  inputs.forEach(input => {
    // Get value with unit (px for sliders, nothing for color)
    const value = input.type === 'color' ? input.value : input.value + (input.dataset.unit || '');
    
    // Update CSS variable
    document.documentElement.style.setProperty(`--${input.id}`, value);
    
    // Add to CSS code display
    cssCode += `  --${input.id}: ${value};\n`;
  });

  cssCode += '}';
  cssOutput.textContent = cssCode;
}

// Copy CSS to clipboard
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(cssOutput.textContent);
  copyBtn.textContent = 'Copied!';
  setTimeout(() => copyBtn.textContent = 'Copy CSS', 2000);
});

// Initialize
inputs.forEach(input => {
  input.addEventListener('input', updateCSS);
});


updateCSS();