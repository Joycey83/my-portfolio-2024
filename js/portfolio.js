const hamburgerMenu = document.querySelector(".hamburger-menu");

const container = document.querySelector(".page-container");

hamburgerMenu.addEventListener("click", () => {
  container.classList.toggle("active");
});
