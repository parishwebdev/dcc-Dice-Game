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
	//console.log(sum);
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

function evaluateWinOrLose(userInput, anwsers){
	if(anwsers.includes(userInput)){
		return true;
	}
	else{
		return false;
	}
}
function evaluateRightWrongMessage(input,answers){
	let output;
	if (evaluateWinOrLose(input,answers)){
		output = "You guessed right!";
	}
	else{
		output = "You guessed wrong!";
	}
	return output;
}
function runBet(cashTotal,input, answers){
	let output;
	if (evaluateWinOrLose(input,answers)){
		 cashTotal += 0;
	}
	else{
		cashTotal -= 100;
	}
	return cashTotal;
}

function getStartCashTotal(){
	let startCash = 500;
	return startCash;
}
function getTurnLimit(){
	let turnlimit = 5;
	return turnlimit;
}
function evaluateLastTurn(turnCounter,turnLimit){
	if (turnCounter === turnLimit){
		return true;
	} else {
		return false;
	}
}
function runDiceGame(){
	let total = getStartCashTotal();
	let turnLimit = getTurnLimit();

	for(let i = 0; i <= turnLimit; i++){
		if(evaluateLastTurn(i,turnLimit)){
			//end of game
			displayResult("You won $" + total);
		}else{
			let input = getUserInput("Bet even or odd: ", validateInput, sanitizeCase);
			let answers = evaluateSumEvenOdd(findDiceSetSum(roleDice()));
			total = runBet(total,input,answers);
			displayResult(evaluateRightWrongMessage(input,answers));
			displayResult("Current total: $" + total);
		}
		
	}

}
runDiceGame();


/*

Player Starts Out with $500 and if they win a bet (turn) then they get to keep their current
dollar amount. If they loose the bet, then $100 would be subtracted from their current totals.

After 5 turns (bets) if they have money they get to keep the result.

*/

