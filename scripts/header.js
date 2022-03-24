const navToggle = document.getElementById("navToggle");
let navMenu = document.getElementById("navMenu");
navToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("hidden");
  navToggle.classList.toggle("active");
  if (!navMenu.classList.contains("hidden")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
});

window.addEventListener("click", (e) => {
  if (e.target != navToggle) {
    if (e.target != navMenu) {
      navMenu.classList.add("hidden");
      navToggle.classList.remove("active");
      document.body.style.overflowY = "auto";
    }
  }
});
