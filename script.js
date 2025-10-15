
document.getElementById('year').textContent = new Date().getFullYear();

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Animate skill bars when they come into view
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
};

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Animate skill bars
    animateSkillBars();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Form submission is handled by Formspree
            // You can add additional client-side validation here if needed
        });
    }
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if(window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        if(body.getAttribute('data-theme') === 'dark') {
            header.style.background = 'rgba(18, 18, 18, 0.95)';
        }
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.9)';
        if(body.getAttribute('data-theme') === 'dark') {
            header.style.background = 'rgba(18, 18, 18, 0.9)';
        }
    }
});

// Prevent right-click / inspect shortcuts unless temporarily enabled
document.addEventListener('contextmenu', e => {
    if (!window.inspectEnabled) e.preventDefault();
});

document.addEventListener('keydown', e => {
    if (window.inspectEnabled) return;
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.key.toLowerCase() === 'u') ||
        (e.ctrlKey && e.shiftKey && ['i','j','c'].includes(e.key.toLowerCase()))
    ) {
        e.preventDefault();
        e.stopPropagation();
    }
});

function toggleInspection() {
    window.inspectEnabled = !window.inspectEnabled;
    alert(window.inspectEnabled ? "Inspection temporarily enabled" : "🔒 Inspection disabled again");
}