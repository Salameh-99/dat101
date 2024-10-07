"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
//calculate  2+3*2-4*6 = -34 
let resultat = 2 + 3 * ((2 - 4) * 6);

 
printOut(resultat.toFixed());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let meterTilCentimeter= 25*100+34;
let totalCentimeterTilInsh=  meterTilCentimeter/2.54;
let answer = totalCentimeterTilInsh.toFixed(2);



printOut(answer.toString());

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const secoundsInMinuts = 60;
const minutsInHours = 60;
const hoursInDay = 24;
const part2_Answer = 
(3 * hoursInDay * minutsInHours) +
(12 * minutsInHours)+
14+
(45/ secoundsInMinuts);  

printOut(part2_Answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numberOfMinutes = 6322.52;
let part4_Calc = numberOfMinutes / (60 * 24); 
const part4_Days = Math.floor(part4_Calc);
printOut("Days = " + part4_Days);

part4_Calc = part4_Calc - part4_Days
part4_Calc = part4_Calc * hoursInDay;
const part4_Hours = Math.floor(part4_Calc);
printOut("Hours = " + part4_Hours);

part4_Calc = part4_Calc - part4_Hours;
part4_Calc = part4_Calc * minutsInHours;
const part4_Minutes = Math.floor(part4_Calc);
printOut("Minutes = " + part4_Minutes);

part4_Calc = part4_Calc - part4_Minutes;
part4_Calc = part4_Calc * secoundsInMinuts;
const part4_Seconds = Math.floor(part4_Calc);
printOut("Second= " + part4_Seconds) ;
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);
printOut( amountUSD + " dollars is " + amountNOK + " kroner");
amountUSD = Math.round(amountNOK * USD);
printOut( amountNOK + " kroner is " + amountUSD + " dollars");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const tekst = "There is much between heaven and earth that we do not understand." ;
// let tekst1 = tekst.length;
printOut(tekst);
printOut(tekst.length.toString());
printOut (tekst.charAt(18))
printOut (tekst.substr(34,8))
printOut (tekst.indexOf("earth").toString())
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("5 > 3: " + (5 > 3));
printOut("7 >= 7: " + (7 >= 7));
printOut("\"a\" > \"b\": " + ("a" > "b"));
printOut("\"1\" < \"a\": " + ("1" < "a"));
printOut("\"2500\" < \"abcd\": " + ("2500" < "abcd"));
printOut("\"arne\" !== \"thomas\": " + ("arne" !== "thomas"));
printOut("2 === 5: " + (2 === 5));
printOut("\"abcd\" > \"bcd\": " + ("abcd" > "bcd"));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let _254 = "254";
let number_254 = parseInt(_254, 10);
printOut(number_254.toString());

let _57_23 = "57.23";
let number_57_23 = parseFloat(_57_23, 10);
printOut(number_57_23.toString());

let _25_kroner = "25 kroner";
let number_25_kroner = parseInt(_25_kroner,10);
printOut(number_25_kroner.toString());

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let r = getRandomInt(1, 360);
printOut(r.toString());
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totalDays = 131;

let weeks = Math.ceil(totalDays / 7);
let days = totalDays % 7;

printOut(`${totalDays} days is equal to ${weeks} weeks and ${days} days.`);



printOut(newLine);