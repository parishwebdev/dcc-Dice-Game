"use strict";
//CHŌ-HAN (AKA CHŌ-HAN BAKUCHI)
/*
Very simple Japanese dice game. 
Six dice are rolled and the results kept secret.
Players bet on whether the sum on the dice is odd or even.
*/
/*

Player Starts Out with $500 and if they win a bet (turn) then they get to keep their current
dollar amount. If they loose the bet, then $100 would be subtracted from their current totals.

After 5 turns (bets) if they have money they get to keep the result.

*/

//(1) Roll six seperate dice
//(2) Add all the numbers together to get sum of the dices
//(3) Get Input from user if even or odd
//(4) Vaildate input by passing validator in (function), then return the function it is in.
//(4.5) Sanitize Input Case
//(5) Evaluate if the Sum is even or odd
//(6) Check their response vs the sum of six dices is eaual or not
//(7) Output response

function displayResult (param){
	console.log(param);
}
function getUserInput(message, validator, sanitizer){
 let input = prompt(message);
 if (validator(input)){
   input = sanitizer(input);
   return input;
  }
  return getUserInput(message,validator,sanitizer);
}
function sanitizeCase(input){
	let sanitizedCase = input.toLowerCase();
	return sanitizedCase;
}
function validateInput(input) {
	let acceptedStrings = ["odd","even","e","o"];
	if (input === null || input === "") {
    	alert("Please enter something in:  ");
		return false;
 	}
	if (!isNaN(input)){
		alert("Dont enter an number");
		return false;
	}
	if(acceptedStrings.includes(input) === false){
		alert("Please enter: odd,even,e or o ");
		return false;
	}

	return true;
}
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
function findDiceSetSum(diceArray){
	let sum = 0;
	for(let i = 0; i < diceArray.length; i++){
		sum += diceArray[i];
	}
	return sum;
}
function evaluateSumEvenOdd(diceSum){
  let output;
	if(diceSum % 2 === 0) {
		output = ["even","e"];
	}
	else{
		output = ["odd","o"];
	}
	return output;
}
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
function runDoubleBet(cashTotal,input, answers){
	let output;
	if (evaluateWinOrLose(input,answers)){
		 cashTotal *= 2;
	}
	else{
		cashTotal = 0;
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
function evaluateLost(cashTotal){
	if (cashTotal !== 0){
		return true;
	}else{
		return false;
	}
}
function evaluateLostMessage(cashTotal){
	let output;
	if (evaluateLost(cashTotal) === false){
		output = "You Lost! $" + cashTotal + " for you \nClick Start Game Button to Play Again";
	}
	return output;
}
function evaluateDoubleOrNothing(modalInput){
	if (modalInput === "yes" || modalInput === "y" ){
		return true;
	}
	if (modalInput === "no" || modalInput === "n" ){
		return false;
	}
	else{
		return false;
	}
}

function validateDoubleInput(input){
	let acceptedStrings = ["yes","y","no","n"];

	if(acceptedStrings.includes(input) === false){
		alert("Please enter one of these (yes,y,no,n) in:  ");
		return false;
	}
	if (!isNaN(input)){
		alert("Dont enter an number");
		return false;
	}
	if (input === null || input === "") {
    	alert("Please enter something in:  ");
		return false;
 	}
	else{
		return true;
	}
} 

function runDiceGame(){
	let total = getStartCashTotal();
	let turnLimit = getTurnLimit();

	for(let i = 0; i <= turnLimit; i++){
		if(evaluateLost(total)) {
			if(evaluateLastTurn(i,turnLimit)){

			let doubleOutput = getUserInput("Want to bet double or nothing: (yes or no)",validateDoubleInput, sanitizeCase);

				if(evaluateDoubleOrNothing(doubleOutput)){

					let input = getUserInput("(Double) Bet even or odd: ", validateInput, sanitizeCase);
					let answers = evaluateSumEvenOdd(findDiceSetSum(roleDice()));
					total = runDoubleBet(total,input,answers);
					if(evaluateLost(total)) {
						displayResult(evaluateRightWrongMessage(input,answers));
						displayResult("You won $" + total);
					}
					else{
						displayResult(evaluateLostMessage(total));
					}
					
				}
				else{
					displayResult("You won $" + total);
				}

			}else{
				let input = getUserInput("Bet even or odd: ", validateInput, sanitizeCase);
				let answers = evaluateSumEvenOdd(findDiceSetSum(roleDice()));
				total = runBet(total,input,answers);
				displayResult(evaluateRightWrongMessage(input,answers));
				displayResult("Current total: $" + total);
			}

		} else{
			displayResult(evaluateLostMessage(total));
		}

		
	}

}





