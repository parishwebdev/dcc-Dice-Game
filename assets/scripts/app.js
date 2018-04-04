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
//(4.5) Sanitize Input Case
//(5) Evaluate if the Sum is even or odd
//(6) Check their response vs the sum of six dices is eaual or not
//(7) Output response

/* ~~~ GITHUB ~~~ */
function displayResult (param){
	console.log(param);
}
//3
function getUserInput(message, validator, sanitizer){
 let input = prompt(message);
 input = sanitizer(input);
 if (validator(input)){
   return input;
  }
  return getUserInput(message,validator,sanitizer);
}
//(4.5)
function sanitizeCase(input){
	let sanitizedCase = input.toLowerCase();
	return sanitizedCase;
}
//4 
function validateInput(input) {
	let acceptedStrings = ["odd","even","e","o"];
	if (!isNaN(input)){
		alert("Dont enter an number");
		return false;
	}
	else if(acceptedStrings.includes(input) == false){
		alert("Please enter: odd,even,e or o ");
		return false;
	}

	return true;
}
//displayResult(getUserInput("Enter even or odd: ", validateInput, sanitizeCase)); 

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
	//console.log("Dice Values: " + diceArray);
	let sum = 0;
	for(let i = 0; i < diceArray.length; i++){
		sum += diceArray[i];
	}
	console.log(sum);
	return sum;
}
//console.log("4,6,8,10,12,20")
//displayResult(findDiceSetSum(roleDice()));

function evaluateSumEvenOdd(diceSum){
  let output;
	if(diceSum % 2 == 0) {
		output = ["even","e"];
	}
	else{
		output = ["odd","o"];
	}
	return output;
}
//displayResult(evaluateSumEvenOdd(findDiceSetSum(roleDice())));

//evaluatePointorNot()
function evaluateWinOrLose(userInput, anwsers){

	if(anwsers.includes(userInput)){
		return true;
	}
	else{
		return false;
	}

}

// runTurn()
function runDiceGame(){
	let input = getUserInput("Enter even or odd: ", validateInput, sanitizeCase);
	let answers = evaluateSumEvenOdd(findDiceSetSum(roleDice()));

	if (evaluateWinOrLose(input,answers) === true){
		alert("You Win!");
		// pointTotal += 1;
	}
	else{
		alert("You Lose!")
		// pointTotal += 0;
	}
	//turnCounter++;

}
runDiceGame();


/*

function newRound(turnCounter){
	if (turnCounter % 10 === 0){
		roundCounter++;
	}
}

fucntion evaluateRound(roundCounter){
	if (roundCounter > 6){
		return false; //lose game
	}
	else{
		return true;
	}
}
function evaluatePointTotal(pointTotal){
	if (pointTotal === 50){
	  return true;
	}else{
	   return false;
	}
}

*/


/* 

Point, Round Based Game.
Of (x) amount of point and have round be out of (y) turns, if player excedes (z) number of rounds they lose

(come up with step like before to split up tasks)

{
	z = Max Rounds = 6 (maybe 7)
    y = Turns Per Round 10
	x = Points to Reach: 50
}
{
	Keep track of:
		- turn number,
		- round number,
		- point total
}
//order these later
 - When player guesses right add a point to point counter else go to next turn
 - Annouce round # and current total
 - when turns passes the 10th turn of a round reset turn counter
 - check current point value vs x
 - check if current round excedes z
 - loop unil win/lose condition is triggered and output game result

*/
