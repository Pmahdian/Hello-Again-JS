# 🖼 Interactive Image Gallery

A responsive image gallery with lightbox functionality built with vanilla JavaScript.

![Image Gallery Screenshot](Screenshot.png)


## ✨ Features

- **Lightbox Preview**: Click any image to view in full-screen mode
- **Keyboard Navigation**: 
  - `ESC` to close
  - `Arrow` keys to navigate between images (future enhancement)
- **Responsive Design**: Works on all device sizes
- **Image Captions**: Displays titles from `data-title` attributes
- **Smooth Animations**: CSS transitions for better UX

## 🛠 Technologies Used

- Plain JavaScript (no frameworks)
- Semantic HTML5
- CSS Grid for layout
- Flexbox for centering

## 🚀 Installation & Usage

1. Clone the repository
2. Navigate to the project:
   ```bash
   cd dom/02_image-gallery/
   ```
3. Open in browser:
   ```bash
   open index.html
   ```

## 📂 Project Structure

```
02_image-gallery/
├── index.html         # Main HTML structure
├── style.css          # Styling and animations
├── app.js             # Core functionality
├── images/            # Sample images
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
└── Screenshot.png     # Project screenshot
```

## 🔧 Customization

### Add More Images
1. Place your images in the `images/` folder
2. Update the HTML:
   ```html
   <div class="gallery">
     <img src="images/your-image.jpg" alt="Description" data-title="Your Title">
     <!-- Add more images -->
   </div>
   ```

### Change Styles
Edit `style.css` to:
- Adjust gallery grid columns:
  ```css
  .gallery {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  ```
- Modify lightbox appearance:
  ```css
  .lightbox {
    background: rgba(0, 0, 0, 0.95);
  }
  ```

## 🌟 Future Enhancements

- [ ] Add image preloading
- [ ] Implement swipe gestures for mobile
- [ ] Add zoom functionality
- [ ] Create image slideshow mode

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

