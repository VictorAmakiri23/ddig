const images = document.querySelectorAll(".thumbnails img");
const display = document.querySelector("#display");

images.forEach(function (image) {
  image.addEventListener("dragstart", function () {
    image.style.opacity = "0.4";
  });

  image.addEventListener("dragend", function () {
    display.src = image.src;

    image.style.opacity = "0.65";

    images.forEach(function (img) {
      img.style.borderColor = "transparent";
    });

    image.style.borderColor = "#60a5fa";
  });
});
