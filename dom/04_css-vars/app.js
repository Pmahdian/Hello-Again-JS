// DOM Elements
const inputs = document.querySelectorAll('input[type="range"], input[type="color"]');
const cssOutput = document.getElementById('css-output');
const copyBtn = document.getElementById('copy-btn');

// Preset configurations
const presets = {
  dark: {
    '--base-color': '#1a1a1a',
    '--text-color': '#f0f0f0',
    '--spacing': '15px',
    '--radius': '8px'
  },
  neon: {
    '--base-color': '#0ff0fc',
    '--text-color': '#ff00ff',
    '--spacing': '20px',
    '--radius': '0px'
  },
  reset: {
    '--base-color': '#ffc600',
    '--text-color': '#ffffff',
    '--spacing': '10px',
    '--radius': '0px'
  }
};

// Update CSS variables and output
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

// Apply presets
document.querySelectorAll('.preset-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const preset = presets[btn.dataset.preset];
    
    Object.entries(preset).forEach(([varName, value]) => {
      document.documentElement.style.setProperty(varName, value);
    });
    
    updateInputsFromCSS();
    updateCSS();
  });
});

// Sync input values with CSS variables
function updateInputsFromCSS() {
  inputs.forEach(input => {
    const cssValue = getComputedStyle(document.documentElement)
      .getPropertyValue(`--${input.id}`).trim();
    
    if (input.type === 'color') {
      input.value = cssValue;
    } else {
      input.value = parseInt(cssValue);
    }
  });
}

// Copy CSS code to clipboard
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(cssOutput.textContent);
  copyBtn.textContent = 'Copied!';
  setTimeout(() => copyBtn.textContent = 'Copy CSS', 2000);
});

// Initialize
inputs.forEach(input => input.addEventListener('input', updateCSS));
updateCSS();