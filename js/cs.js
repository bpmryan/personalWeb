// hamburger button animation
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.main-nav-toggle');

  menuToggle.addEventListener('click', (e) => {
    // Prevent jumping to the top of the page
    e.preventDefault(); 
    
    // Toggle the class that triggers BOTH the icon animation and the dropdown visibility
    menuToggle.classList.toggle('active-menu');
  });
});