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

// (1)
function roleDice(){
	let numberOfDice = 6;
	let diceSet = [4,6,8,10,12,20]; 
	//if numberOfDice inc or dec make sure to put how many sides in the diceSet.
	let diceSetValues = []

	for(let i = 0; i < numberOfDice; i++){
		let diceResult = Math.floor(Math.random() * diceSet[i]) + 1;

		diceSetValues.push(diceResult);
	}

	return diceSetValues;
}
//displayResult(roleDice());

// (2)
function findDiceSetSum(diceArray){
	console.log("Dice Values: " + diceArray);
	let sum = 0;
	for(let i = 0; i < diceArray.length; i++){
		sum += diceArray[i];
	}
	return sum;
}
console.log("4,6,8,10,12,20")
displayResult(findDiceSetSum(roleDice()));