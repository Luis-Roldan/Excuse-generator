/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

// function onload() {
//   const randomWho = who[Math.floor(Math.random() * who.length)];
//   const randomAction = action[Math.floor(Math.random() * action.length)];
//   const randomWhat = what[Math.floor(Math.random() * what.length)];
//   const randomWhen = when[Math.floor(Math.random() * when.length)];

//   return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
// }

document.addEventListener("DOMContentLoaded", function() {
  const excuse = onload();
  document.getElementById("excuse").textContent = excuse;
});
