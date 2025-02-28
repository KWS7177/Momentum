// const images = ["0.jpg", "1.jpg", "2.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
// console.log(bgImage);

const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImageContainer = document.createElement("div");
const bgImage = document.createElement("img");

console.log(bgImageContainer);
bgImage.src = `img/${chosenImage}`;

bgImageContainer.appendChild(bgImage);
document.body.appendChild(bgImageContainer);
console.log(bgImageContainer);
