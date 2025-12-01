const hamburger = document.querySelector(".hamburger");
const navBar    = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});



function revealOnScroll() {
  document.querySelectorAll(".fade-left, .fade-right, .fade-up, .zoom-in").forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 80) {
      el.style.opacity = "1";
      el.style.transform = "translate(0,0) scale(1)";
    }
  });
}

document.querySelectorAll(".fade-left").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateX(-50px)";
});

document.querySelectorAll(".fade-right").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateX(50px)";
});

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
