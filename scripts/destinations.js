const images = document.querySelectorAll(".images img");
const tabLinks = Array.from(document.querySelectorAll(".tab-item .nav-text"));
const tabText = document.querySelectorAll(".tab-text div");
const tabFooter = document.querySelectorAll(".footer-text");

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener("click", (e) => {
    tabLink.classList.add("active-tab");
    tabLinks.forEach((link) => {
      const linkIndex = tabLinks.indexOf(link);
      const currentImage = images[linkIndex];
      const currentText = tabText[linkIndex];
      const currentFooter = tabFooter[linkIndex];

      if (tabLink != link) {
        link.classList.remove("active-tab");
      } else {
        currentImage.classList.replace("tab-element", "active-tab-element");
        currentText.classList.replace("tab-element", "active-tab-element");
        currentFooter.classList.replace("tab-element", "active-tab-element");
        replaceElements(images, currentImage);
        replaceElements(tabText, currentText);
        replaceElements(tabFooter, currentFooter);
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
