const hamburger = document.querySelector(".hamburger");
const navBar    = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-up, .zoom-card");

  elements.forEach(el => {
    el.style.opacity = "0";
  });

  function reveal() {
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < window.innerHeight - 50) {
        el.style.transition = "0.8s";
        el.style.opacity = "1";
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();
});
