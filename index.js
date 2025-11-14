// Mobile Menu Toggle
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

if (hamMenuBtn) {
  hamMenuBtn.addEventListener('click', () => {
    if (smallMenu.classList.contains('header__sm-menu--active')) {
      smallMenu.classList.remove('header__sm-menu--active');
    } else {
      smallMenu.classList.add('header__sm-menu--active');
    }
    if (headerHamMenuBtn.classList.contains('d-none')) {
      headerHamMenuBtn.classList.remove('d-none');
      headerHamMenuCloseBtn.classList.add('d-none');
    } else {
      headerHamMenuBtn.classList.add('d-none');
      headerHamMenuCloseBtn.classList.remove('d-none');
    }
  });
}

// Close mobile menu when clicking on links
headerSmallMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  });
});

// Header logo click handler
const headerLogoContainer = document.querySelector('.header__logo-container');
if (headerLogoContainer) {
  headerLogoContainer.addEventListener('click', () => {
    location.href = 'index.html';
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.background = 'rgba(15, 23, 42, 0.95)';
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
  } else {
    header.style.background = 'rgba(15, 23, 42, 0.8)';
    header.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .about-me__text').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.home-hero');
  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.zIndex = '10';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.zIndex = '1';
  });
});

