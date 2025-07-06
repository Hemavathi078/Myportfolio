// // LIVE CLOCK WIDGET
// function updateClock() {
//   const clock = document.getElementById("widget-clock");
//   const now = new Date();
//   const options = {
//     weekday: "short",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   };
//   clock.innerText = "🕒 " + now.toLocaleTimeString("en-US", options);
// }
// setInterval(updateClock, 1000);
// updateClock();

// // FADE-IN ON SCROLL
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("fade-in-visible");
//       observer.unobserve(entry.target);
//     }
//   });
// });

// document.querySelectorAll(".glass, .project").forEach(section => {
//   observer.observe(section);
// });

// // SMOOTH SCROLL (Optional Enhancement)
// document.querySelectorAll('a[href^="#"]').forEach(link => {
//   link.addEventListener("click", function(e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute("href"));
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });

// Dynamic Quote Widget
const quoteWidget = document.getElementById("quote-widget");
const quotes = [
  "You are the creator of your own story 💫",
  "Code like a queen 👑",
  "Every bug is a lesson in disguise 🐞",
  "Design it. Code it. Flaunt it ✨",
  "Success is built with semicolons and sparkle 💻✨"
];
quoteWidget.innerText = quotes[Math.floor(Math.random() * quotes.length)];

// Smooth Scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Intersection animation (optional enhancement)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  observer.observe(el);
});
