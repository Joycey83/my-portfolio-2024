// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close Button links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // Dynamically adjust the height of the container depending on the number of links
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
// When scrolled to a certain height that is greater than navHeight the fixed-nav class will be added to give you the styles
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent default
    e.preventDefault();
    // navigate to specific section
    // slice(1) skip # which is 0, we only get home,about,service , tour
    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(id);
    const element = document.getElementById(id);
    // CALCULATE THE HEIGHTS
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // true or false condition: if navbar has the fixed-nav class this will be true, if not it will be false
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    console.log(position);

    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 82) {
      // console.log(navHeight);
      position = position + containerHeight;
    }

    window.scrollTo({ left: 0, top: position });
    linksContainer.style.height = 0;
  });
});

// JavaScript for smooth scrolling
// const scrollLinks = document.querySelectorAll(".scroll-link");

// scrollLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();

//     const id = link.getAttribute("href").slice(1);
//     const section = document.getElementById(id);
//     const offset = section.offsetTop;

//     window.scrollTo({
//       left: 0,
//       top: offset,
//       behavior: "smooth",
//     });
//   });
// });
