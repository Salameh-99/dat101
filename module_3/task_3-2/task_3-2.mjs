"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(". Dice Rolling Extravaganza");
const d1 = Math.ceil(Math.random()*6);
const d2 = Math.ceil(Math.random()*6);
const d3 = Math.ceil(Math.random()*6);
const d4 = Math.ceil(Math.random()*6);
const d5 = Math.ceil(Math.random()*6);
const d6 = Math.ceil(Math.random()*6);

let diceThrow = "";
diceThrow += d1.toString() + ",";
diceThrow += d2.toString() + ",";
diceThrow += d3.toString() + ",";
diceThrow += d4.toString() + ",";
diceThrow += d5.toString() + ",";
diceThrow += d6.toString() + ",";
printOut("DiceThrow ="+ diceThrow);

const count1 = diceThrow.match(/1/g).length;
const count2 = diceThrow.match(/2/g).length;
const count3 = diceThrow.match(/3/g).length;
const count4 = diceThrow.match(/4/g).length;
const count5 = diceThrow.match(/5/g).length;
const count6 = diceThrow.match(/6/g).length;

let diceCount = "";
diceCount += count1.toString() + ",";
diceCount += count2.toString() + ",";
diceCount += count3.toString() + ",";
diceCount += count4.toString() + ",";
diceCount += count5.toString() + ",";
diceCount += count6.toString() + ",";


printOut ("d1 ="+ count1)
printOut ("Dicecount" + diceCount);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const answerNumber = 45;
let guessNumber = 0;
while(answerNumber !== guessNumber) {
    guessNumber = Math.ceil(Math.random() * 60);
}
    printOut("Guess Number = " + guessNumber.toString());
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
guessNumber =0;
let guesscount= 0;
const startTime = Date.now();
while(answerNumber !== guessNumber) {
    guesscount++;
    guessNumber = Math.ceil(Math.random()* 1000000)
}
const endTime = Date.now();
const timeUsed = endTime - startTime

printOut("Antall Gjetninger " + guesscount.toString()+ "tok" + timeUsed.toString()+ "ms");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
