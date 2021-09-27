console.log("ColorFlipper App is running ..");

//Initiate arrays
const colorArr = [
  "green",
  "blue",
  "red",
  "lightseagreen",
  "lightblue",
  "#ffff00",
];

//get span element
const span = document.getElementById("colorText");

let count = 0;

//Simple Colors button
let colorBtn = document.getElementById("color");
colorBtn.addEventListener("click", colorHandler);

//Hex Colors button
let hex = document.getElementById("hexBtn");
hex.addEventListener("click", hexHandler);

//default backgroundColor
document.body.style.backgroundColor = "#eeebf0";

//simple colors click handler function
function colorHandler() {
  for (let i = 0; i < colorArr.length; i++) {
    count = Math.floor(Math.random() * colorArr.length);
  }
  document.body.style.backgroundColor = colorArr[count];
  span.textContent = colorArr[count];
}

//Hex Colors click handler function
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let str = "#";
function hexHandler() {
  let newBtn = document.createElement("button");
  colorBtn.insertAdjacentElement("afterend", newBtn);

  newBtn.textContent = "Hex Colors";
  newBtn.classList.add("surprise");
  newBtn.id = "supriseBtn";
  newBtn.addEventListener("click", generateRandom);
  // generateRandom();
}
function getRandom() {
  return Math.floor(Math.random() * colors.length - 1);
}

function generateRandom() {
  for (let k = 0; k < 6; k++) {
    str += colors[getRandom()];
    if (str.length < 7) {
      str += colors[getRandom()];
    }
    if (str.length > 7) {
      str = "#";
    } else if (str.length == 7) {
      document.body.style.backgroundColor = str;
      span.textContent = str;
    }
  }
}

//if else statements with break and continue;

// if(str.length > 7){
// 			continue;
// 		}else if(str.length<7){
// 			continue;
// 		}
// 		else if(str.length == 7){
// 			console.log(str);
// 		}

let surpriseBtn = document.getElementById("surprise");

surpriseBtn.addEventListener("click", surpriseHandler);

function surpriseHandler() {
  let promptValue = confirm(
    'Thanks For Clicking!'
  );
  if (promptValue == true) {
    let navigation = document.getElementById("navigation");
    navigation.style.textShadow = "2px 2px 6px #000";
  }
  console.log("Will be available soon ..");
}

// function button() {
// 	let newBtn = document.createElement('button');
// 	colorBtn.insertAdjacentElement('afterend',newBtn);

// 	newBtn.textContent = 'Hex Colors';
// 	newBtn.classList.add('surprise');
// 	newBtn.id = 'supriseBtn';
// }
// button();
