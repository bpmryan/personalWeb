// copy email into clipboard
document.querySelectorAll('a[href^="mailto"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        navigator.clipboard.writeText("bryandinh0224@gmail.com");
        alert("Email copied to clipboard");
    });
});

// filter feature
setTimeout(() => {
  const btn = document.getElementById("filterBtn");
  btn.hidden = false;
  btn.setAttribute("aria-hidden", "false");
}, 8000);

// Live copyright date
// overrides 2025 into current year
document.querySelector('.footer-bottom p').innerHTML = `© ${new Date().getFullYear()} Bryan Dinh`;

// function that adds scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
        else {
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.15 // trigger when 15% of the element is visible 
});

// Grab all elements with the 'reveal' class and start observing them
const hiddenElements = document.querySelectorAll('.reveal');
hiddenElements.forEach((el) => observer.observe(el));
