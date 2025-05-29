document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu-items");

  toggle.addEventListener("click", function () {
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  });
});
