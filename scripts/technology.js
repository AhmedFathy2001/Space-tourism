const images = Array.from(document.querySelectorAll(".images img"));
const imagesMobile = images.splice(3, 3);
const imagesDesktop = images.splice(0, 3);

const tabLinks = Array.from(document.querySelectorAll(".nav-circle"));
const tabText = document.querySelectorAll(".tab-text div");

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener("click", (e) => {
    tabLink.classList.add("active-dot");
    tabLinks.forEach((link) => {
      const linkIndex = tabLinks.indexOf(link);
      const currentImageMobile = imagesMobile[linkIndex];
      const currentImagesDesktop = imagesDesktop[linkIndex];
      const currentText = tabText[linkIndex];

      if (tabLink != link) {
        link.classList.remove("active-dot");
      } else {
        currentImageMobile.classList.replace(
          "tab-element",
          "active-tab-element"
        );
        currentImagesDesktop.classList.replace(
          "tab-element",
          "active-tab-element"
        );
        currentText.classList.replace("tab-element", "active-tab-element");
        replaceElements(imagesMobile, currentImageMobile);
        replaceElements(imagesDesktop, currentImagesDesktop);
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
