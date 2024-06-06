// JavaScript for rotating images every 5 seconds
const images = ['img/sandesh.jpeg', 'img/sandesh.jpeg', 'img/sandesh.jpeg']; // Add more image URLs if needed
let currentIndex = 0;

function changeImage() {
  document.getElementById('header-image').src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 5000); // Change image every 5 seconds
