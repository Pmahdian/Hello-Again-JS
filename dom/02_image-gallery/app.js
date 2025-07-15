
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const caption = lightbox.querySelector('.caption');
    const closeBtn = lightbox.querySelector('.close');
    let currentIndex = 0;

    // Open lightbox with navigation
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            updateLightbox();
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    function updateLightbox() {
        const img = images[currentIndex];
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        caption.textContent = img.dataset.title;
    }

    // Navigation functions
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
    }

    // Close lightbox
    closeBtn.addEventListener('click', closeLightbox);

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Close when clicking outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
            }
        }
    });

    // Add navigation buttons
    const navHTML = `
        <button class="nav-btn prev">&lt;</button>
        <button class="nav-btn next">&gt;</button>
    `;
    lightbox.insertAdjacentHTML('beforeend', navHTML);

    // Add event listeners for navigation buttons
    lightbox.querySelector('.prev').addEventListener('click', prevImage);
    lightbox.querySelector('.next').addEventListener('click', nextImage);
});