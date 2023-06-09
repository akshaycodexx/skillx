// Get the mobile menu toggle button
const menuToggle = document.getElementById('mobile-menu');

// Get the navigation menu
const navMenu = document.querySelector('.navbar ul');

// Add click event listener to the menu toggle button
menuToggle.addEventListener('click', function() {
  // Toggle the 'active' class on the navigation menu
  navMenu.classList.toggle('active');
});

