document.addEventListener('DOMContentLoaded', function() {
  // Page loader
  window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('loader').classList.add('loader-hidden');
      setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
      }, 500);
    }, 1000);
  });

  // Hero slider
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function changeSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    currentSlide = (currentSlide + 1) % slides.length;
  }

  setInterval(changeSlide, 5000);

  // Scroll to top button
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('active');
    } else {
      scrollToTopBtn.classList.remove('active');
    }
  });

  scrollToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Header scroll effect
  const header = document.getElementById('header');

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Animation on scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  function checkIfInView() {
    animateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('animated');
      }
    });
  }
  
  window.addEventListener('scroll', checkIfInView);
  checkIfInView(); // Check on page load

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Close mobile menu if open
          if (document.querySelector('.mobile-menu').classList.contains('active')) {
            document.querySelector('.mobile-menu').classList.remove('active');
            document.querySelector('.mobile-menu-toggle').classList.remove('active');
          }
          
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Night/Day mode toggle
  function setMode(isNight) {
    // Logo switching
    const headerLogoImg = document.querySelector('.logo-img');
    const loaderLogoImg = document.querySelector('#loader .loader-logo img');
    const footerLogoImg = document.querySelector('.footer-logo img');
    if (isNight) {
      document.body.classList.add('night-mode');
      if (modeToggle) {
        modeToggle.innerHTML = '<span aria-label="Day Mode" title="Day Mode">☀️</span>';
      }
      if (mobileModeToggle) {
        mobileModeToggle.innerHTML = '<span aria-label="Day Mode" title="Day Mode">☀️</span>';
      }
      localStorage.setItem('theme', 'night');
      if (headerLogoImg) headerLogoImg.src = 'assets/logo-horizontal-night.png';
      if (loaderLogoImg) loaderLogoImg.src = 'assets/logo-vertical-night.png';
      if (footerLogoImg) footerLogoImg.src = 'assets/logo-vertical-night.png';
    } else {
      document.body.classList.remove('night-mode');
      if (modeToggle) {
        modeToggle.innerHTML = '<span aria-label="Night Mode" title="Night Mode">🌙</span>';
      }
      if (mobileModeToggle) {
        mobileModeToggle.innerHTML = '<span aria-label="Night Mode" title="Night Mode">🌙</span>';
      }
      localStorage.setItem('theme', 'day');
      if (headerLogoImg) headerLogoImg.src = 'assets/logo-horizontal-day.png';
      if (loaderLogoImg) loaderLogoImg.src = 'assets/logo-vertical-day.png';
      if (footerLogoImg) footerLogoImg.src = 'assets/logo-vertical-day.png';
    }
  }

  const modeToggle = document.getElementById('mode-toggle');
  const mobileModeToggle = document.getElementById('mobile-mode-toggle');

  // Load saved mode
  const savedTheme = localStorage.getItem('theme');
  setMode(savedTheme === 'night');

  if (modeToggle) {
    modeToggle.addEventListener('click', function() {
      setMode(!document.body.classList.contains('night-mode'));
    });
  }
  if (mobileModeToggle) {
    mobileModeToggle.addEventListener('click', function() {
      setMode(!document.body.classList.contains('night-mode'));
    });
  }

  // Star cluster cursor effect
  (function() {
    const starCursor = document.getElementById('star-cursor');
    const STAR_COUNT = 12;
    const stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.opacity = 0;
      starCursor.appendChild(star);
      stars.push(star);
    }
    document.addEventListener('mousemove', function(e) {
      const { clientX: x, clientY: y } = e;
      stars.forEach((star, i) => {
        const angle = (2 * Math.PI * i) / STAR_COUNT;
        const radius = 18 + Math.random() * 10;
        const sx = x + Math.cos(angle) * radius + (Math.random() - 0.5) * 6;
        const sy = y + Math.sin(angle) * radius + (Math.random() - 0.5) * 6;
        star.style.left = sx + 'px';
        star.style.top = sy + 'px';
        star.style.opacity = 0.85;
        star.style.transition = 'none';
        setTimeout(() => {
          star.style.opacity = 0;
          star.style.transition = 'opacity 0.7s';
        }, 20 + i * 20);
      });
    });
  })();
});