# 🖱 Drag & Drop Demo

A vanilla JavaScript implementation of native HTML5 Drag and Drop API with visual feedback.


## ✨ Features

- **Native HTML5 API**: No external libraries
- **Visual Feedback**:
  - Drop zone highlighting
  - Dragging opacity effect
- **Cross-Browser Support**: Works on modern browsers
- **Mobile-Friendly** (with touch event support - future enhancement)

## 🛠 Technologies Used

- HTML5 Drag and Drop API
- Pure JavaScript (ES6+)
- CSS Flexbox for layout
- Semantic HTML

## 🚀 Quick Start

1. Clone the repository
2. Navigate to the folder:
   ```bash
   cd dom/03_drag-drop/
   ```
3. Open `index.html` in your browser



## 📂 File Structure

```
03_drag-drop/
├── index.html         # HTML structure
├── style.css          # Styling and visual feedback
├── app.js             # Drag & drop logic
└── screenshot.png     # Demo screenshot
```
# 💡 How It Works


### JavaScript Implementation
```javascript
// Set up drag events
draggable.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', e.target.id);
  e.target.classList.add('dragging');
});

// Set up drop zone events
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('highlight');
});
```

### Key Functions
- `dragstart`: Initiates dragging
- `dragover`: Handles drag over drop zone
- `drop`: Handles final drop action
- `dragend`: Cleans up after drag

## 🌟 Future Improvements

- [ ] Touch support for mobile devices
- [ ] Multiple draggable items
- [ ] File upload capability
- [ ] Drag sorting functionality

## 🤝 Contributing

Pull requests welcome! For major changes, please open an issue first.

---
