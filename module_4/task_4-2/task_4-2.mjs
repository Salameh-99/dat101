"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; numberList[i] <= numberList[19]; i++) {
    printOut(`${numberList[i]}`);
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "<st>" + numberList + "</st>";
printOut(`${text}`);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const hiThere = "Hei på deg, hvordan har du det?";
let array = [];
array = hiThere.split(" ");

for (let i = 0; i < array.length; i++){
    printOut(`Word ${i + 1}: "${array[i]}": Index: ${array.indexOf(array[i])}`);
}
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeFromArray(aArray, aItem){
  const result = aArray.indexOf(aItem);
  if(result > -1){
    printOut("Can remove " + " " + aItem + " from array");
    aArray.splice(result, 1);
  }else{
    printOut("Can not remove " + " " + aItem + " from array");
  }
}

function findAndRemoveFromArray(aArray, aItem){
  let index = -1;
  const result = aArray.find(findName);
  if(result){
    printOut("Can remove " + " " + aItem + " from array");
    aArray.splice(index, 1);
  }else{
    printOut("Can not remove " + " " + aItem + " from array");
  }

  function findName(aName, aIndex){
    index = aIndex;
    return aName === aItem;
  }
}

removeFromArray(girls, "Arne");
findAndRemoveFromArray(girls, "Ingrid");
printOut(girls.join(", "));

printOut(newLine);
printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
//const names = [...girls, ...boys];
const names = girls.concat(boys);
names.forEach(printName);
function printName(aName){
  printOut(aName);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook{
  #Tile;
  #Author;
  #ISBN;
  constructor(aTile, aAuthor, aISBN){
    this.#Tile = aTile;
    this.#Author = aAuthor;
    this.#ISBN = aISBN;
  }

  toString(){
    return this.#Tile + ", " + this.#Author + ", " + this.#ISBN;
  }
}
//Create an array that contains three instances of the TBook class from different authors.
const books = [
  new TBook("Harry Potter", "J.K.R", "978-0-395-07122-1"),
  new TBook("And Then There Were None", "Agatha Christie", "978-0-385-12167-5"),
  new TBook("A Tale of Two Cities", "Charles Dickens", "978-0-385-50420-5")
];

books.forEach(printBook);
function printBook(aBook){
  printOut(aBook.toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
    WeekDay1: {value: 0x01, name: "Monday"},
    WeekDay2: {value: 0x02, name: "Tuesday"},
    WeekDay3: {value: 0x04, name: "Wednesday"},
    WeekDay4: {value: 0x08, name: "Thursday"},
    WeekDay5: {value: 0x10, name: "Friday"},
    WeekDay6: {value: 0x20, name: "Saturday"},
    WeekDay7: {value: 0x40, name: "Sunday"},
    Workdays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Workdays"},
    Weekends: {value: 0x20 + 0x40, name: "Weekend"},
};

const keys = Object.keys(EWeekDays);

keys.forEach(key => {
    printOut(`${key}: value: ${EWeekDays[key].value}, name: ${EWeekDays[key].name}`);
});

printOut(newLine);

printOut("--- Part 8, 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomNumbers = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);
printOut(`Original Array: ${randomNumbers}`);

const ascendingOrder = [...randomNumbers].sort((a, b) => a - b);
printOut(`Ascending order: ${ascendingOrder}`);

const descendingOrder = [...randomNumbers].sort((a, b) => b - a);
printOut(`Descending order: ${descendingOrder}`);

const frequencyMap = {};
randomNumbers.forEach((num) => {
  frequencyMap[num] = (frequencyMap[num] || 0) + 1;
});

const frequencyArray = Object.entries(frequencyMap).map(([num, freq]) => ({
  number: parseInt(num),
  frequency: freq,
}));

frequencyArray.sort((a, b) => {
  if (b.frequency === a.frequency) {
    return a.number - b.number;
  }
  return b.frequency - a.frequency;
});
printOut(newLine);
printOut(`Numbers and Their Frequency:`);
frequencyArray.forEach(({ number, frequency }) => {
  printOut(`Number: ${number}, Frequency: ${frequency}`);
});

const groupedByFrequency = {};
frequencyArray.forEach(({ number, frequency }) => {
  if (!groupedByFrequency[frequency]) {
    groupedByFrequency[frequency] = [];
  }
  groupedByFrequency[frequency].push(number);
});

const sortedFrequencies = Object.entries(groupedByFrequency)
  .map(([freq, numbers]) => ({
    frequency: parseInt(freq),
    numbers: numbers.sort((a, b) => a - b),
  }))
  .sort((a, b) => b.frequency - a.frequency);

printOut(newLine);
printOut(`Frequencies and Corresponding Numbers:`);
sortedFrequencies.forEach(({ frequency, numbers }) => {
  printOut(`Frequency: ${frequency}, Numbers: ${numbers.join(", ")}`);
});

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const myTable = [];
for(let row = 0; row < 5; row++){

  const columns = [];
  for(let column = 0; column < 9; column++){
    const cell = + row + "," + column;
    columns.push(cell);
  }
  myTable.push(columns);
}
text = ""; 
for(let row = 0; row < myTable.length; row++){
  const columns = myTable[row];
  for(let column = 0; column < columns.length; column++){
    const cell = columns[column]; 
    text += "[" + cell + "]"; 
  }
  printOut(text);
  text = ""; 
}
printOut(newLine);