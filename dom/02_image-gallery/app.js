document.addEventListener('DOMContentLoaded', () => {
    // Lightbox functionality
    const images = document.querySelectorAll('.gallery img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const caption = lightbox.querySelector('.caption');
    const closeBtn = lightbox.querySelector('.close');
    let currentIndex = 0;

    // Initialize image animations
    function initImageAnimations() {
        images.forEach((img, index) => {
            // Set staggered animation delay
            img.style.transitionDelay = `${index * 10}ms`;
            
            // Trigger animation
            setTimeout(() => {
                img.classList.add('visible');
            }, 100);
            
            // Set click event for lightbox
            img.addEventListener('click', () => {
                currentIndex = index;
                updateLightbox();
                openLightbox();
            });
        });
    }

    // Lightbox functions
    function updateLightbox() {
        const img = images[currentIndex];
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        caption.textContent = img.dataset.title || '';
    }

    function openLightbox() {
        lightbox.style.display = 'block';
        document.body.classList.add('no-scroll');
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.classList.remove('no-scroll');
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

    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

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

    // Initialize navigation buttons
    const navHTML = `
        <button class="nav-btn prev" aria-label="Previous image">&lt;</button>
        <button class="nav-btn next" aria-label="Next image">&gt;</button>
    `;
    lightbox.insertAdjacentHTML('beforeend', navHTML);

    lightbox.querySelector('.prev').addEventListener('click', prevImage);
    lightbox.querySelector('.next').addEventListener('click', nextImage);

    // Start animations
    initImageAnimations();
});