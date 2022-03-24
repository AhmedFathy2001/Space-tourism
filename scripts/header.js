const navToggle = document.getElementById("navToggle");
let navMenu = document.getElementById("navMenu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  navToggle.classList.toggle("active");
  if (!navMenu.classList.contains("hidden")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
});
