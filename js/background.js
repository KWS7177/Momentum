// const images = ["0.jpg", "1.jpg", "2.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
// console.log(bgImage);

const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.querySelector("#bg-image");

bgImage.src = `img/${chosenImage}`;
