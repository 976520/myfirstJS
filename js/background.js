const backgrounds = [
    "0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg","6.jpeg",  
];


const randomForBackgrounds = Math.floor(Math.random() * backgrounds.length);
const chosenBackground = backgrounds[randomForBackgrounds];

console.log(chosenBackground);

const backgroundImage = document.createElement("img");

backgroundImage.src = "img/"+chosenBackground;

console.log(backgroundImage);

document.body.appendChild(backgroundImage);