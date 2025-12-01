const hamburger = document.querySelector(".hamburger");
const navBar    = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});












function revealOnScroll() {
  document.querySelectorAll(".fade-up, .zoom-in").forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0) scale(1)";
      el.style.transition = "0.8s ease";
    }
  });
}

document.querySelectorAll(".fade-up").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
});
document.querySelectorAll(".zoom-in").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "scale(0.8)";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
