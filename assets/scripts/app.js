"use strict";
//CHŌ-HAN (AKA CHŌ-HAN BAKUCHI)
/*
Very simple Japanese dice game. 
Six dice are rolled and the results kept secret.
Players bet on whether the sum on the dice is odd or even.
*/

//(1) Roll six seperate dice
//(2) Add all the numbers together to get sum of the dices
//(3) Get Input from user if even or odd
//(4) Vaildate input by passing validator in (function), then return the function it is in.
//(5) CheckS there response vs the sum of six dices
//(6) Output response

/* ~~~ GITHUB ~~~ */
function displayResult (param){
	console.log(param);
}
//3
function getUserInput(message, validator){
 let input = prompt(message);
 if (validator(input)){
   return input;
  }
  return getUserInput(message,validator);
}
//4 (come back to later, need to validate for just "even or odd")
function validateForString(input) {
	if (!isNaN(input)){
		alert("Dont enter an number");
		return false;
	}
	return true;
}
//displayResult(getUserInput("Enter even or odd: ", validateForString)); 

function roleDice(){
	let numberOfDice = 6;
	let diceSet = []

	for(let i = 0; i < 6; i++){
		let diceResult = Math.floor(Math.random() * 6) + 1;
		diceSet.push(diceResult);
	}

	return diceSet;
}
displayResult(roleDice());