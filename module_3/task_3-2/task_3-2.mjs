"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let countUpText = "";
for (let i =1; i<= 10; i++) {
    countUpText += i + "";
}
let countUpElement = document.createElement("p");
countUpElement.textContent = countUpText;
document.body.appendChild(countUpElement);
printOut("OPPTELLING!"+countUpText.toString());
let countDownText ="";
for ( let i =10; i>= 1; i--) {
   countDownText += i - "";
}
let countDownElement = document.createElement("p");
countDownElement.textContent = countDownText;
document.body.appendChild(countDownElement);
printOut("Nedtelling!"+countDownText.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const answerNumber = 45;
let guessNumber = 0;
while(answerNumber !== guessNumber){
  guessNumber = Math.ceil(Math.random() * 60)+1;
}
printOut("TALLET ER  = " + guessNumber.toString());

printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
guessNumber = 0;
let guessCount = 0;
const StartTime = Date.now();
while(answerNumber !== guessNumber){
  guessCount++;
  guessNumber = Math.ceil(Math.random() * 1000000);
}
const endTime = Date.now();
const timeUsed = endTime - StartTime;
printOut("Antall gjetninger " + guessCount.toString() + " tok " + timeUsed.toString() + " ms");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const primesWhile = [];
let i = 2;
while (i < 200){
    if (isPrime(i)){
        primesWhile.push(i);
    }
    i++;
}
printOut (" Primtall med while-løkke: " + primesWhile); 

function isPrime(num){
    if (num < 2) return false;
    for (let i = 2; i<= Math.sqrt(num); i++){
        if(num % i === 0)return false;
    }    
    return true;
}
const primesFor = [];
for (let i = 2; i < 200; i++){
    if (isPrime(i)){
        primesFor.push(i);
    }
}
printOut(" Primtall med for-løkke: " + primesFor);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++){
    let linje = "";
    for( let col =1; col <= 9; col++){
        linje +=" K" + col + "R" + row + "";
 
    }
    printOut(linje.trim());
}



printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getGrade(points) {
    const percentage = (points / 236)* 100;
    
    if (percentage >= 89) return " A ";
    if (percentage >= 77) return " B ";
    if (percentage >= 65) return " C ";
    if (percentage >= 53) return " D";
    if (percentage >= 41) return " E ";
    return "F ";
}

function simulateSingleGrades(){
    let grades = "";

        const points = Math.floor(Math.random ()* 236)+ 1;
        const percentage = (points / 236) * 100;
        const grade = getGrade (points);
        printOut (" Kandidaten fikk " + points + " poeng. Som er " + percentage.toFixed() + " % og som gir karakter " + grade );
    }

 simulateSingleGrades();
printOut("");


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(". Dice Rolling Extravaganza");

const d1 = Math.ceil(Math.random() * 6);
const d2 = Math.ceil(Math.random() * 6);
const d3 = Math.ceil(Math.random() * 6);
const d4 = Math.ceil(Math.random() * 6);
const d5 = Math.ceil(Math.random() * 6);
const d6 = Math.ceil(Math.random() * 6);

let diceThrow = "";
diceThrow += d1.toString() + ",";
diceThrow += d2.toString() + ",";
diceThrow += d3.toString() + ",";
diceThrow += d4.toString() + ",";
diceThrow += d5.toString() + ",";
diceThrow += d6.toString();

//diceThrow = "3,3,3,3,3,3";

printOut("diceThrow: " + diceThrow);

const count1 = (diceThrow.match(/1/g) || "").length;
const count2 = (diceThrow.match(/2/g) || "").length;
const count3 = (diceThrow.match(/3/g) || "").length;
const count4 = (diceThrow.match(/4/g) || "").length;
const count5 = (diceThrow.match(/5/g) || "").length;
const count6 = (diceThrow.match(/6/g) || "").length;

let diceCount = "";
diceCount += count1.toString() + ",";
diceCount += count2.toString() + ",";
diceCount += count3.toString() + ",";
diceCount += count4.toString() + ",";
diceCount += count5.toString() + ",";
diceCount += count6.toString();
printOut("diceCount: " + diceCount);

const equals1 = (diceCount.match(/1/g) || "").length;
const equals6 = (diceCount.match(/6/g) || "").length;
printOut("equals1: " + equals1.toString());
printOut("equals6: " + equals6.toString());

if(equals1 === 6){
  printOut("Full straight");
}else if(equals6 === 1){
  printOut("Yatzy!!!");
}
printOut(newLine);
