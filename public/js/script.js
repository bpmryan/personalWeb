// ============================================
// FIXED-CANVAS SCALING
// ============================================
// The page is built at one fixed pixel width (must match #page-canvas's
// width in landingPage.css) and scaled uniformly to fit any device,
// so every element keeps identical relative size/position everywhere.
const CANVAS_WIDTH = 1440;

function scalePage() {
  const canvas = document.getElementById("page-canvas");
  const frame = document.getElementById("canvas-frame");
  if (!canvas || !frame) return;

  const scale = document.documentElement.clientWidth / CANVAS_WIDTH;
  canvas.style.transform = `scale(${scale})`;
  frame.style.height = `${canvas.offsetHeight * scale}px`;
}

// Run once ASAP, then re-run once images have loaded (their height
// affects the canvas's natural height), and again on resize.
scalePage();
window.addEventListener("load", scalePage);

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(scalePage, 100);
});

// copy email into clipboard
document.querySelectorAll('a[href^="mailto"]').forEach((link) => {
  link.addEventListener("click", (e) => {
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
document.querySelector(".footer-bottom p").innerHTML =
  `© ${new Date().getFullYear()} Bryan Đinh`;

// function that adds scroll animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.05, // trigger when 5% of the element is visible
    rootMargin: "0px 0px -50px 0px", // Starts the animation 50px before it even hits the screen
  },
);

// Grab all elements with the 'reveal' class and start observing them
const hiddenElements = document.querySelectorAll(".reveal");
hiddenElements.forEach((el) => observer.observe(el));
