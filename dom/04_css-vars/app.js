// DOM Elements
const inputs = document.querySelectorAll('input[type="range"], input[type="color"]');
const presets = document.querySelectorAll('[data-preset]');
const cssOutput = document.getElementById('css-output');
const copyBtn = document.getElementById('copy-btn');

// Update CSS Variables and Display Code
function updateCSS() {
  let cssCode = ':root {\n';
  
  inputs.forEach(input => {
    const value = input.type === 'color' ? input.value : input.value + (input.dataset.unit || '');
    document.documentElement.style.setProperty(`--${input.id}`, value);
    cssCode += `  --${input.id}: ${value};\n`;
  });

  cssCode += '}';
  cssOutput.textContent = cssCode;
}

// Apply Presets
presets.forEach(preset => {
  preset.addEventListener('click', () => {
    if (preset.dataset.preset === 'dark') {
      document.documentElement.style.setProperty('--base-color', '#1a1a1a');
      document.documentElement.style.setProperty('--text-color', '#f0f0f0');
    } else if (preset.dataset.preset === 'neon') {
      document.documentElement.style.setProperty('--base-color', '#0ff0fc');
      document.documentElement.style.setProperty('--text-color', '#ff00ff');
    }
    updateCSS();
  });
});

// Copy CSS Code
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(cssOutput.textContent);
  copyBtn.textContent = 'Copied!';
  setTimeout(() => copyBtn.textContent = 'Copy CSS', 2000);
});

// Initialize
inputs.forEach(input => input.addEventListener('input', updateCSS));
updateCSS();