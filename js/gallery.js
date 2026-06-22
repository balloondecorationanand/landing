// gallery.js
 
// Gallery Slider & Lightbox
// Usage:
// - Place gallery images in assets/images/gallery/
// - Update the galleryImages array to add/remove images
// - Requires #gallerySlider, #lightbox, and #lightboxImage elements in HTML
// - Includes auto-sliding gallery and lightbox navigation

const galleryPath = "assets/gallery/";

// Gallery Images
const galleryImages = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg","14.jpg","15.jpg","16.jpg"
];

const gallery = document.getElementById("gallerySlider");

let images = [];
let currentIndex = 0;

// Load Gallery
galleryImages.forEach((file, index) => {

    let imagePath = galleryPath + file;

images.push(imagePath);

let img = document.createElement("img");

img.src = imagePath;
img.loading = "lazy";

img.onclick = function () {
    openLightbox(index);
};

gallery.appendChild(img);

});

// Auto Slider
let slideIndex = 0;

setInterval(() => {

    if (images.length <= 1) return;

slideIndex++;

if (slideIndex >= images.length) {
    slideIndex = 0;
}

gallery.scrollTo({
    left: slideIndex * gallery.clientWidth,
    behavior: "smooth"
});

}, 3000);

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

function openLightbox(index) {

    currentIndex = index;
    lightboxImage.src = images[currentIndex];
    lightbox.style.display = "flex";

}

// Close Lightbox
document.querySelector(".close").onclick = function () {
    lightbox.style.display = "none";
};

// Next Image
document.querySelector(".next").onclick = function () {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImage.src = images[currentIndex];

};

// Previous Image
document.querySelector(".prev").onclick = function () {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImage.src = images[currentIndex];

};

