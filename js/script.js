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