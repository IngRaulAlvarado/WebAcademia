document.addEventListener("DOMContentLoaded", function () {
  let elements = document.querySelectorAll('[include-html]');

  elements.forEach(function (element) {
    let file = element.getAttribute("include-html");
    if (file) {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          element.innerHTML = data;
        })
        .catch(error => {
          console.error("Error loading file:", error);
        });
    }
  });
});
