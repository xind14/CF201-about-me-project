"use strict";

//Ask user's name

let userName = prompt("What is your name?");
console.log(userName);
alert(
  `Hey, ${userName}! Welcome to my site! Let's answer some questions to get to know me.`
);


//Point counter 
let totalCorrect = 0

// Question 1
function catQ(){
  let cat = prompt("Do you think I have 3 cat? Yes or No?");
cat = cat.toLowerCase();
console.log(cat);

if (cat === "no" || cat === "n") {
  alert("Well, you would be wrong! I do have 3!");
} else if (cat === "yes" || cat === "y") {
  alert("Correct! I do have three!");
  totalCorrect++;
}
}

catQ(); 
// Question 2
function colorQ(){


  let color = prompt("Do you think orange is my favorite color? Yes or No?");
color = color.toLowerCase();
console.log(color);

switch (color) {
  case "no":
  case "n":
    alert("Amazing! You know me so well! I like forest green!");
    totalCorrect++;
    break;
  case "yes":
  case "y":
    alert("That is wrong! I like forest green!");
    break;

}

}
colorQ();

// Question 3
function hobbiesQ(){

  let hobbies = prompt("Do you think I have any athletic hobbies? Yes or No?");
hobbies = hobbies.toLowerCase();
console.log(hobbies);

switch (hobbies) {
  case "yes":
  case "y":
    alert("Great guess! I boulder in my spare time!");
    totalCorrect++;
    break;
  case "no":
  case "n":
    alert("Incorrect! I boulder in my spare time!");
    break;
}


}
hobbiesQ();

// Question 4

function seasonQ(){

  let season = prompt("Do you think my favorite season is fall? Yes or No?");
  season = season.toLowerCase();
  console.log(season);
  
  switch (season) {
    case "no":
    case "n":
      alert("That's right! My favorite season is Winter.");
      totalCorrect++;
      break;
    case "yes":
    case "y":
      alert("False! I like Winter!");
      break;
  }

}
seasonQ();

// Question 5
function travelQ(){

  let travel = prompt("Have I ever traveled abroad? Yes or No?");
  travel = travel.toLowerCase();
  console.log(travel);
  
  switch (travel) {
    case "yes":
    case "y":
      alert("You guessed right! I've been in 10 countries total.");
      totalCorrect++;
      break;
    case "no":
    case "n":
      alert("Very wrong! I've been in 10 countries total!");
      break;
  }

}
travelQ();

//Question 6 too high too low loops 4 attempts

function ageQ(){

  let age = 25;
  let attempts = 4;
  
  for( let i = 1; i <= attempts; i++ ) {
     let ageGuess = prompt("Guess how old I am?");
     let guess = Number(ageGuess);
     console.log(guess)
  
     if( guess === age ) {
      alert("Congrats! You guessed correctly! I am 25!");
      totalCorrect++;
      break;
     } else if (guess < age) {
      alert ("Too low! I wish I was younger... Try Again!");
     } else if (guess > age) {
      alert("Too high! I'm not that old! Try Again!");
     }
      if (i === attempts) {
      alert("You used up all your attempts. I am 25!")
    } 
   }
  

}
ageQ();

//Question 7 multiple correct in array, 6 attempts, display correct answers with loop, track total # of correct answer and give them score out of 7

function catNameQ(){

  let catName = ["Cat", "Emi","Ava"];
let catAttempts = 6;
let rightAnswer = false;

while (!rightAnswer && catAttempts >0){
  let catGuess = prompt ("What is the name of one of my cats?");
  if (catName.includes(catGuess)) {
    alert("Right Answer!");
    rightAnswer = true;
    totalCorrect++;
   } else {
      catAttempts--;
      if (catAttempts > 0){
        alert ("Incorrect! Try Again!");
      } else {        
        alert("You don't have anymore attempts! Their names are Cat, Emi, and Ava.");
      }
    }
  }

}
catNameQ();

//track of score message
alert(`You got ${totalCorrect} out of 7`)

// Final message
alert(`Thanks for getting to know me, ${userName}!`);


