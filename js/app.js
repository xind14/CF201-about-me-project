"use strict";

//Ask user's name

let userName = prompt("What is your name?");
console.log(userName);

//console.log(Hey, ${userName},! Welcome to my site! Let's answer some questions to get to know me.);
alert(
  `Hey, ${userName}! Welcome to my site! Let's answer some questions to get to know me.`
);

// Question 1

let cat = prompt("Do you think I have 3 cat? Yes or No?");
cat = cat.toLowerCase();
console.log(cat);

if (cat === "no" || cat === "n") {
  //console.log(Well, you would be wrong! I do have 3!);
  alert("Well, you would be wrong! I do have 3!");
} else if (cat === "yes" || cat === "y") {
  // console.log(Correct! I do have three! Their names are Cat, Cat2, and Cat3);
  alert("Correct! I do have three! Their names are Cat, Cat2, and Cat3");
}

// Question 2
let color = prompt("Do you think orange is my favorite color? Yes or No?");
color = color.toLowerCase();
console.log(color);

switch (color) {
  case "no":
  case "n":
    //console.log(Amazing! You know me so well!);
    alert("Amazing! You know me so well! I like forest green!");
    break;
  case "yes":
  case "y":
    //console.log(That is wrong! I like forest green! );
    alert("That is wrong! I like forest green!");
    break;
}

// Question 3
let hobbies = prompt("Do you think I have any athletic hobbies? Yes or No?");
hobbies = hobbies.toLowerCase();
console.log(hobbies);

switch (hobbies) {
  case "yes":
  case "y":
    //console.log(Great guess! I boulder in my spare time!);
    alert("Great guess! I boulder in my spare time!");
    break;
  case "no":
  case "n":
    //console.log(Incorrect! I boulder in my spare time!);
    alert("Incorrect! I boulder in my spare time!");
    break;
}

// Question 4
let season = prompt("Do you think my favorite season is fall? Yes or No?");
season = season.toLowerCase();
console.log(season);

switch (season) {
  case "no":
  case "n":
    //console.log(That's right! My favorite season is Winter.);
    alert("That's right! My favorite season is Winter.");
    break;
  case "yes":
  case "y":
    //console.log(False! I like Winter!);
    alert("False! I like Winter!");
    break;
}

// Question 5
let travel = prompt("Have I ever traveled abroad? Yes or No?");
travel = travel.toLowerCase();
console.log(travel);

switch (travel) {
  case "yes":
  case "y":
    //console.log(You guessed right! I've been in 10 countries total.);
    alert("You guessed right! I've been in 10 countries total.");
    break;
  case "no":
  case "n":
    //console.log(Very wrong! I've been in 10 countries total!);
    alert("Very wrong! I've been in 10 countries total!");
    break;
}
// Final message
alert(`Thanks for getting to know me, ${userName}!`);
