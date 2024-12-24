// Select elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle menu visibility
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});