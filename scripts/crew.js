const images = document.querySelectorAll(".images img");
const tabLinks = Array.from(document.querySelectorAll(".nav-circle"));
const tabText = document.querySelectorAll(".tab-text div");

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener("click", (e) => {
    tabLink.classList.add("active-dot");
    tabLinks.forEach((link) => {
      const linkIndex = tabLinks.indexOf(link);
      const currentImage = images[linkIndex];
      const currentText = tabText[linkIndex];

      if (tabLink != link) {
        link.classList.remove("active-dot");
      } else {
        currentImage.classList.replace("tab-element", "active-tab-element");
        currentText.classList.replace("tab-element", "active-tab-element");
        replaceElements(images, currentImage);
        replaceElements(tabText, currentText);
      }
    });
  });
});

function replaceElements(array, currentItem) {
  array.forEach((item) => {
    if (item != currentItem) {
      item.classList.replace("active-tab-element", "tab-element");
    }
  });
}
