/**
 * BIRTHDAY WEBSITE - INTERACTIVE SCRIPTS
 * For: Bunda's 37th Birthday
 * Features: Loading screen, typing animation, gallery, slideshow, interactive cake, confetti
 */

// ============================================
// DOM ELEMENTS
// ============================================
const loadingScreen = document.getElementById('loadingScreen');
const loadingProgress = document.getElementById('loadingProgress');
const cinematicIntro = document.getElementById('cinematicIntro');
const cinematicParticles = document.getElementById('cinematicParticles');
const cinematicLight = document.getElementById('cinematicLight');
const cinematicTitle = document.getElementById('cinematicTitle');
const cinematicNumber = document.getElementById('cinematicNumber');
const cinematicCredit = document.getElementById('cinematicCredit');
const mainContent = document.getElementById('mainContent');
const typingText = document.getElementById('typingText');
const giftBox = document.getElementById('giftBox');
const openGiftBtn = document.getElementById('openGiftBtn');
const gallerySection = document.getElementById('gallerySection');
const galleryGrid = document.getElementById('galleryGrid');
const slideshowSection = document.getElementById('slideshowSection');
const slideshowWrapper = document.getElementById('slideshowWrapper');
const cakeSection = document.getElementById('cakeSection');
const blowCandleBtn = document.getElementById('blowCandleBtn');
const candleMessage = document.getElementById('candleMessage');
const finalSurpriseSection = document.getElementById('finalSurpriseSection');
const finalSurpriseBtn = document.getElementById('finalSurpriseBtn');
const finalMessage = document.getElementById('finalMessage');
const heartRain = document.getElementById('heartRain');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const confettiContainer = document.getElementById('confettiContainer');
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const particlesContainer = document.getElementById('particles');

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    typingSpeed: 100,
    typingDelay: 500,
    loadingDuration: 3000,
    slideshowInterval: 4000,
    confettiCount: 100,
    heartCount: 50,
    particleCount: 30,
    galleryPhotos: [
        { src: 'assets/foto1.jpeg', caption: 'Momen indah bersama bunda' },
        { src: 'assets/foto2.jpeg', caption: 'Cinta yang tak terhingga' },
        { src: 'assets/foto3.jpeg', caption: 'Senyum bunda yang hangat' },
        { src: 'assets/foto4.jpeg', caption: 'Kebahagiaan bersama' },
        { src: 'assets/foto5.jpeg', caption: 'Kasih sayang bunda' },
        { src: 'assets/foto6.jpeg', caption: 'Momen berharga' },
        { src: 'assets/foto7.jpeg', caption: 'Kehangatan keluarga' },
        { src: 'assets/foto8.jpeg', caption: 'Cinta sejati' },
        { src: 'assets/foto9.jpeg', caption: 'Bunda yang terbaik' },
        { src: 'assets/foto10.jpeg', caption: 'Selamanya bersama' }
    ]
};

// State
let currentLightboxIndex = 0;
let isMusicPlaying = false;
let slideshowInterval = null;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initLoading();
    initMusic();
    initGiftBox();
    initCake();
    initFinalSurprise();
    initLightbox();
    initScrollAnimations();
});

// ============================================
// BACKGROUND PARTICLES
// ============================================
function initParticles() {
    for (let i = 0; i < CONFIG.particleCount; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.width = (Math.random() * 4 + 4) + 'px';
    particle.style.height = particle.style.width;
    particlesContainer.appendChild(particle);
}

// ============================================
// LOADING SCREEN
// ============================================
function initLoading() {
    // Simulate loading progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            setTimeout(hideLoadingScreen, 500);
        }
        loadingProgress.style.width = progress + '%';
    }, 200);

    // Ensure loading screen hides after maximum duration
    setTimeout(hideLoadingScreen, CONFIG.loadingDuration + 1000);
}

function hideLoadingScreen() {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
        startCinematicIntro();
    }, 500);
}

// ============================================
// CINEMATIC TITLE REVEAL
// ============================================
function startCinematicIntro() {
    // Initialize cinematic particles
    initCinematicParticles();
    
    // Show cinematic intro
    cinematicIntro.classList.add('active');
    
    // Start music
    playMusic();
    
    // Animation sequence
    // 1. Show title after 300ms
    setTimeout(() => {
        cinematicTitle.classList.add('show');
    }, 300);
    
    // 2. Show number after 1.5 seconds
    setTimeout(() => {
        cinematicNumber.classList.add('show');
    }, 1500);
    
    // 3. Show credit after 2.5 seconds
    setTimeout(() => {
        cinematicCredit.classList.add('show');
    }, 2500);
    
    // 4. Hold for 2 seconds then fade out
    setTimeout(() => {
        cinematicIntro.classList.add('fade-out');
        
        // Light confetti during transition
        createLightConfetti();
        
        // Show main content after fade out
        setTimeout(() => {
            cinematicIntro.style.display = 'none';
            mainContent.classList.add('visible');
            startTypingAnimation();
        }, 1500);
    }, 5000);
}

function initCinematicParticles() {
    // Create floating particles for cinematic effect
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'cinematic-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 5 + 6) + 's';
        particle.style.animationDelay = Math.random() * 3 + 's';
        
        // Random colors between gold and pink
        const isGold = Math.random() > 0.5;
        particle.style.background = isGold ? 'var(--gold)' : 'var(--pink-light)';
        particle.style.boxShadow = isGold 
            ? '0 0 15px var(--gold), 0 0 30px var(--gold-light)'
            : '0 0 15px var(--pink-light), 0 0 30px var(--pink-medium)';
        
        cinematicParticles.appendChild(particle);
    }
}

function createLightConfetti() {
    const colors = ['#FFD1DC', '#FFB6C1', '#D4AF37', '#F4E4BC', '#FFD700'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti circle';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = '6px';
            confetti.style.height = '6px';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 50);
    }
}

// ============================================
// TYPING ANIMATION
// ============================================
function startTypingAnimation() {
    const text = 'Selamat Ulang Tahun Bunda 🎂';
    let index = 0;

    setTimeout(() => {
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                typingText.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(typingInterval);
                // Trigger confetti after typing completes
                setTimeout(() => {
                    createConfetti();
                }, 500);
            }
        }, CONFIG.typingSpeed);
    }, CONFIG.typingDelay);
}

// ============================================
// MUSIC CONTROL
// ============================================
function initMusic() {
    musicBtn.addEventListener('click', toggleMusic);
    
    // Set volume
    bgMusic.volume = 0.3;
}

function playMusic() {
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            isMusicPlaying = true;
            updateMusicButton();
        }).catch(() => {
            // Autoplay blocked, wait for user interaction
            isMusicPlaying = false;
            updateMusicButton();
        });
    }
}

function toggleMusic() {
    if (isMusicPlaying) {
        bgMusic.pause();
        isMusicPlaying = false;
    } else {
        bgMusic.play();
        isMusicPlaying = true;
    }
    updateMusicButton();
}

function updateMusicButton() {
    const icon = musicBtn.querySelector('.music-icon');
    const text = musicBtn.querySelector('.music-text');
    
    if (isMusicPlaying) {
        icon.textContent = '🎵';
        text.textContent = 'Music On';
        musicBtn.classList.remove('muted');
    } else {
        icon.textContent = '🔇';
        text.textContent = 'Music Off';
        musicBtn.classList.add('muted');
    }
}

// ============================================
// GIFT BOX & GALLERY
// ============================================
function initGiftBox() {
    openGiftBtn.addEventListener('click', openGift);
    giftBox.addEventListener('click', openGift);
}

function openGift() {
    if (giftBox.classList.contains('opened')) return;
    
    giftBox.classList.add('opened');
    openGiftBtn.disabled = true;
    openGiftBtn.textContent = 'Membuka...';
    
    // Create confetti explosion
    createConfettiExplosion();
    
    // Show gallery after animation
    setTimeout(() => {
        gallerySection.classList.add('visible');
        slideshowSection.classList.add('visible');
        cakeSection.classList.add('visible');
        finalSurpriseSection.classList.add('visible');
        
        openGiftBtn.textContent = 'Hadiah Terbuka! 🎉';
        
        // Initialize gallery
        initGallery();
        
        // Initialize slideshow
        initSlideshow();
        
        // Scroll to gallery
        gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1500);
}

// ============================================
// GALLERY
// ============================================
function initGallery() {
    galleryGrid.innerHTML = '';
    
    CONFIG.galleryPhotos.forEach((photo, index) => {
        const polaroid = createPolaroid(photo, index);
        galleryGrid.appendChild(polaroid);
    });
}

function createPolaroid(photo, index) {
    const polaroid = document.createElement('div');
    polaroid.className = 'polaroid';
    
    // Random rotation for natural look
    const rotation = (Math.random() - 0.5) * 10;
    const rotationStart = rotation + (Math.random() - 0.5) * 20;
    
    polaroid.style.setProperty('--rotation', rotation + 'deg');
    polaroid.style.setProperty('--rotation-start', rotationStart + 'deg');
    polaroid.style.animationDelay = (index * 0.1) + 's';
    
    polaroid.innerHTML = `
        <img class="polaroid-image" src="${photo.src}" alt="${photo.caption}" loading="lazy">
        <div class="polaroid-caption">${photo.caption}</div>
    `;
    
    polaroid.addEventListener('click', () => openLightbox(index));
    
    return polaroid;
}

// ============================================
// SLIDESHOW
// ============================================
function initSlideshow() {
    slideshowWrapper.innerHTML = '';
    
    // Create slideshow images
    CONFIG.galleryPhotos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.className = 'slideshow-image';
        img.src = photo.src;
        img.alt = photo.caption;
        if (index === 0) img.classList.add('active');
        slideshowWrapper.appendChild(img);
    });
    
    // Start automatic slideshow
    startSlideshow();
}

function startSlideshow() {
    const images = slideshowWrapper.querySelectorAll('.slideshow-image');
    let currentIndex = 0;
    
    slideshowInterval = setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, CONFIG.slideshowInterval);
}

// ============================================
// INTERACTIVE CAKE
// ============================================
function initCake() {
    blowCandleBtn.addEventListener('click', blowCandles);
}

function blowCandles() {
    const flames = document.querySelectorAll('.flame');
    
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.classList.add('extinguished');
        }, index * 200);
    });
    
    blowCandleBtn.disabled = true;
    blowCandleBtn.textContent = 'Lilin Padam! 🎉';
    
    // Show message
    setTimeout(() => {
        candleMessage.classList.add('visible');
        createConfettiExplosion();
    }, 1000);
}

// ============================================
// FINAL SURPRISE
// ============================================
function initFinalSurprise() {
    finalSurpriseBtn.addEventListener('click', revealFinalSurprise);
}

function revealFinalSurprise() {
    finalSurpriseBtn.style.display = 'none';
    finalMessage.classList.add('visible');
    
    // Start heart rain
    startHeartRain();
    
    // Create massive confetti
    createConfettiExplosion();
    setTimeout(createConfettiExplosion, 500);
    setTimeout(createConfettiExplosion, 1000);
}

function startHeartRain() {
    const hearts = ['❤️', '💖', '💗', '💝', '💕', '💓', '💘'];
    
    for (let i = 0; i < CONFIG.heartCount; i++) {
        setTimeout(() => {
            createFallingHeart(hearts);
        }, i * 100);
    }
    
    // Continue heart rain
    setInterval(() => {
        createFallingHeart(hearts);
    }, 500);
}

function createFallingHeart(hearts) {
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    heartRain.appendChild(heart);
    
    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// ============================================
// LIGHTBOX
// ============================================
function initLightbox() {
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrevImage);
    lightboxNext.addEventListener('click', showNextImage);
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function showPrevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + CONFIG.galleryPhotos.length) % CONFIG.galleryPhotos.length;
    updateLightboxImage();
}

function showNextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % CONFIG.galleryPhotos.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const photo = CONFIG.galleryPhotos[currentLightboxIndex];
    lightboxImage.src = photo.src;
    lightboxCaption.textContent = photo.caption;
}

// ============================================
// CONFETTI
// ============================================
function createConfetti() {
    const colors = ['#FFD1DC', '#FFB6C1', '#FF69B4', '#D4AF37', '#F4E4BC', '#FFF8F0', '#FF8C00'];
    const shapes = ['square', 'circle', 'ribbon'];
    
    for (let i = 0; i < CONFIG.confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = `confetti ${shapes[Math.floor(Math.random() * shapes.length)]}`;
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confettiContainer.appendChild(confetti);
            
            // Remove after animation
            setTimeout(() => {
                confetti.remove();
            }, 4500);
        }, i * 30);
    }
}

function createConfettiExplosion() {
    const colors = ['#FFD1DC', '#FFB6C1', '#FF69B4', '#D4AF37', '#F4E4BC', '#FFF8F0', '#FF8C00', '#FFD700'];
    const shapes = ['square', 'circle', 'ribbon'];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = `confetti ${shapes[Math.floor(Math.random() * shapes.length)]}`;
            
            // Start from center
            const startX = 50 + (Math.random() - 0.5) * 20;
            confetti.style.left = startX + '%';
            confetti.style.top = '50%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Random explosion direction
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 300 + 100;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity - 200;
            
            confetti.style.animation = 'none';
            confetti.style.transition = 'all 2s ease-out';
            confettiContainer.appendChild(confetti);
            
            // Trigger explosion
            requestAnimationFrame(() => {
                confetti.style.transform = `translate(${tx}px, ${ty}px) rotate(${Math.random() * 720}deg)`;
                confetti.style.opacity = '0';
            });
            
            // Remove after animation
            setTimeout(() => {
                confetti.remove();
            }, 2000);
        }, i * 10);
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('scroll-reveal');
        observer.observe(section);
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
        }
    } else {
        if (slideshowSection.classList.contains('visible') && !slideshowInterval) {
            startSlideshow();
        }
    }
});

// Preload images
function preloadImages() {
    CONFIG.galleryPhotos.forEach(photo => {
        const img = new Image();
        img.src = photo.src;
    });
}

// Preload after initial load
window.addEventListener('load', () => {
    setTimeout(preloadImages, 2000);
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c🎂 Selamat Ulang Tahun Bunda! 🎂', 'font-size: 24px; font-weight: bold; color: #FF69B4;');
console.log('%cDibuat dengan penuh cinta oleh anakmu ❤️', 'font-size: 14px; color: #D4AF37;');
