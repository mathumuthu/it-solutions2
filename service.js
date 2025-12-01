const hamburger = document.querySelector(".hamburger");
const navBar    = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
















window.addEventListener("scroll", () => {
  document.querySelectorAll(".service-card").forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0) scale(1)";
      card.style.transition = "0.8s";
    }
  });
});
