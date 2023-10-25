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

//Question 6 too high too low loops 4 attempts
//When a user enters information through the prompt() function in JavaScript, the input is always treated as a string, even if the user enters a number. The Number() function is often used to convert that string representation of a number into an actual numeric value.

let age = 25
let attempts = 4

for( let i = 1; i <= attempts; i++ ) {
   let ageGuess = prompt("Guess how old I am?");
   guess = Number(ageGuess);

   if( guess === age ) {
    alert("Congrats! You guessed correctly! I am 25!");
    break;
   } else if (guess < age) {
    alert (" Too low! I wish I was younger... Try Again!");
   } else {
    alert ("Too high! I'm not that old! Try Again! ");
   }
}
if (i === attempts)









// Final message
alert(`Thanks for getting to know me, ${userName}!`);





/*
str="John" str.charat(0), str.substring (0,1)
let dogs = ["Rosie", "Geno", "Rocky"];

let gotItRight = false;

while( ! gotItRight ) {
  let guess = prompt("What is the name of a dog of mine?");
  if( dogs.includes( guess ) ) {
    alert("Right!");
    gotItRight = true;
  }
}

// Let them try 4
for( let i = 1; i < 5; i++ ) {

   let guess = prompt("How old am I?");
   // guess = "55"
   guess = Number(guess);
   if( guess === 55 ) {
    alert("Right!");
    break;
   }

}