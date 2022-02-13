"use strict";

const calc = document.querySelector(".calc p");
var targetNumber = 0;
var targetNumber2 = 0;
var operand = "";

const clearBoard = () => {
  targetNumber = 0;
  calc.innerHTML = targetNumber;
}

const number = (number) => {
  console.log("sen" + number + "bosding");

  if (operand === ""){
    targetNumber = targetNumber * 10 + number;
    calc.innerHTML = targetNumber2;
  }
  else {
    targetNumber2 = targetNumber2 * 10 + number;
    calc.innerHTML = targetNumber2;
  }
}

const arifmetik = (operator) => {
  if (operator === "+"){
    operand = "+";
    calc.innerHTML = targetNumber + operand;
  }
  else if (operator === "-"){
    operand = "-";
    calc.innerHTML = targetNumber2;
  }
}

const multi = (operator) => {
  if (operator === "*") {
    operand = "*";
    calc.innerHTML = targetNumber2;
  }
  else if (operator === "/"){
    operand = "/";
    calc.innerHTML = targetNumber2;
  }
}

const percent = (operator) => {
  if (operator === "%") {
    operand = "%";
    calc.innerHTML = targetNumber /= 100;
  }
}

const comma = (operator) => {
  console.log("ji");
  if (operator === ","){
    operand = ",";
    calc.innerHTML = targetNumber2;
  }
}

// const brackets = (operator) => {
//   console.log("hi");
//   if (operator === "("){
//     operand = "(";
//     calc.innerHTML = targetNumber2;
//   }
//   else if (operator === ")"){
//     operand = ")";
//     calc.innerHTML = targetNumber2;
//   }
// }

const assignment = () => {
  if (operand === "+"){
    targetNumber += targetNumber2;
  }
  else if (operand === "-"){
    targetNumber -= targetNumber2;
  }
  else if (operand === "*") {
    targetNumber *= targetNumber2;
  }
  else if (operand === "/") {
    targetNumber /= targetNumber2;
  }
  operand = "";
  targetNumber2 = 0;
  calc.innerHTML = targetNumber;
}



