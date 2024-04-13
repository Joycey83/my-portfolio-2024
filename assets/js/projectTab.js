// Get all articles
const articles = document.querySelectorAll(".about-project");

// Loop through each article
articles.forEach(function (article) {
  // Get all buttons within the current article
  var tabBtns = article.querySelectorAll(".tab-btn");

  // Loop through each button
  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // Get current button
      const currentBtn = e.target;

      // Remove active class from all buttons within the current article
      tabBtns.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // Add active class to current button
      currentBtn.classList.add("active");

      // Get all content within the current article
      const contents = article.querySelectorAll(".content");

      // Loop through each content
      contents.forEach(function (content) {
        // Remove active class from all contents
        content.classList.remove("active");

        // Add active class to the content that matches the button's data-id
        if (content.id === currentBtn.dataset.id) {
          content.classList.add("active");
        }
      });
    });
  });
});
