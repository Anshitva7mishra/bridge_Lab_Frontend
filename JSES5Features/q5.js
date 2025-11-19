"use strict";



console.log(score);
announce();
var score = 50;
function announce() {
  console.log("Game started");
}
let status = "ready";
startGame();
function startGame() {
  console.log(status);
}

// Fixed version
// let status = "ready";
// console.log(score);
// announce();
// var score = 50;
// function announce() { console.log("Game started"); }
// startGame();
// function startGame() {
//     console.log(status);
// }

// Arrow version
// var announce = () => console.log("Game started");
// var startGame = () => console.log(status);
// let status = "ready";
// console.log(score);
// announce();
// var score = 50;
// startGame(); // Error because startGame not hoisted
