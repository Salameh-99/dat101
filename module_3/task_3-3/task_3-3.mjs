"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
function todaysDateNorwegian() {
    let today = new Date();
    const formattedDate = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    printOut(formattedDate);
}

todaysDateNorwegian();
printOut(newLine);
function TodayInNorwegian2() {
    let today2 = new Date();
    let options2 = { weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' };
    let norwegianDate2 = today2.toLocaleDateString("no-NO", options2);
    
    return norwegianDate2;
}

function daysUntil2XKORelease() {
    const today = new Date();
    const releaseDate = new Date('2025-05-14');

    const timeDifference = releaseDate - today;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const formattedDate = TodayInNorwegian2();
    const message = `Idag er : ${formattedDate}. og det er kun ${daysRemaining} dager til lanseringen av 2XKO:)`;
    
    printOut(message); 

    return daysRemaining;
}


daysUntil2XKORelease();


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
function circle(radius){
    if(radius <= 0 ){
        printOut("Vennligst oppgi en gyldig radius større enn 0.");
        return; 
    }

    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);

    printOut("Diameter: "+ diameter);
    printOut("Circumference:"+ circumference.toFixed(2));
    printOut("Area: " + area.toFixed(2));
}
circle(2);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
function solveRectangleProperties(width, height) {
    
    if (width <= 0 || height <= 0 || typeof width !== "number" || typeof height !== "number") {
        printOut("Vennligst oppgi gyldige verdier for bredde og høyde større enn 0.");
        return;
    }

    const circumference = 2 * (width + height);
    const area = width * height;

    printOut("RectangleProperties med bredde = 4 og høyde = 7.");
    printOut("Circumference: " + circumference);
    printOut("Areal: " + area);
}


solveRectangleProperties(4, 7);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
function convertTemperature(temperature, scale) {
    let celsius, fahrenheit, kelvin;
    if (scale === 'C') {
        celsius = temperature;
        fahrenheit = Math.round((temperature * 9/5) + 32);
        kelvin = Math.round(temperature + 273.15);
    } else if (scale === 'F') {
        fahrenheit = temperature;
        celsius = Math.round((temperature - 32) * 5/9);
        kelvin = Math.round((temperature - 32) * 5/9 + 273.15);
    } else if (scale === 'K') {
        kelvin = temperature;
        celsius = Math.round(temperature - 273.15);
        fahrenheit = Math.round((temperature - 273.15) * 9/5 + 32);
    } else {
        printOut("Invalid scale provided. Please use 'C', 'F', or 'K'.");
        return;
    }

    printOut(`Temperature: ${temperature} ${scale}`);
    
    printOut(`Celsius: ${celsius}°C`);
    printOut(`Fahrenheit: ${fahrenheit}°F`);
    
    printOut(`Kelvin: ${kelvin}K`);
}

convertTemperature(25, 'C');  
printOut(newLine);
convertTemperature(77, 'F');  
printOut(newLine);
convertTemperature(300, 'K'); 

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
function calculateNetPrice(aPrice, aTaxGroup) {
    let net = NaN;
    let taxGroup = aTaxGroup.toUpperCase(); // Convert tax group to uppercase
    let vat = NaN;

    printOut("taxGroup = " + taxGroup);

    // Use switch case to assign VAT rate based on the tax group
    switch (taxGroup) {
        case "NORMAL":
            vat = 25;
            break;
        case "FOOD":
            vat = 15;
            break;
        case "HOTEL":
        case "TRANSPORT":
        case "CINEMA":
            vat = 10;
            break;
        default:
            printOut("Unknown VAT group!");
            return NaN;  // Return NaN if tax group is unknown
    }

    // Calculate net price if VAT is valid
    if (!Number.isNaN(vat)) {
        net = (100 * aPrice) / (vat + 100);
    }

    return net;
}

// Calling the function with different VAT groups
const netPrice1 = calculateNetPrice(75, "normal"); // 25% VAT
if (Number.isNaN(netPrice1)) {
    printOut("Unknown VAT group!");
} else {
    printOut("netPrice1 = " + netPrice1.toFixed(2));
}

const netPrice2 = calculateNetPrice(85, "food"); // 15% VAT
if (Number.isNaN(netPrice2)) {
    printOut("Unknown VAT group!");
} else {
    printOut("netPrice2 = " + netPrice2.toFixed(2));
}

const netPrice3 = calculateNetPrice(90, "hotel"); // 10% VAT
if (Number.isNaN(netPrice3)) {
    printOut("Unknown VAT group!");
} else {
    printOut("netPrice3 = " + netPrice3.toFixed(2));
}

const netPrice4 = calculateNetPrice(150, "goblins"); 
if (Number.isNaN(netPrice4)) {
    printOut("Unknown VAT group!");
} else {
    printOut("netPrice4 = " + netPrice4.toFixed(2));
}

printOut("");  


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateSpeedTimeDistance(distance, time, speed) {
    if ((distance === undefined && time === undefined) || 
        (distance === undefined && speed === undefined) || 
        (time === undefined && speed === undefined)) {
        printOut("NaN");
        return NaN;
    }

    if (speed === undefined) {
        if (distance === undefined || time === undefined) {
            printOut("NaN");
            return NaN;
        }
        const result = distance / time; 
        printOut("Speed: " + result);
        return result;
    }

    if (time === undefined) {
        if (distance === undefined || speed === undefined) {
            printOut("NaN");
            return NaN;
        }
        const result = distance / speed; 
        printOut("Time: " + result);
        return result;
    }

    if (distance === undefined) {
        if (time === undefined || speed === undefined) {
            printOut("NaN");
            return NaN;
        }
        const result = speed * time; 
        printOut("Distance: " + result);
        return result;
    }
}



// Case 1: Calculate Speed
printOut(calculateSpeedTimeDistance(100, 2).toString());   // Output: Speed: 50 km 

// Case 2: Calculate Time
printOut(calculateSpeedTimeDistance(100, undefined, 50).toString());  // Output: Time: 2 h 

// Case 3: Calculate Distance
printOut(calculateSpeedTimeDistance(undefined, 2, 50).toString());  // Output: Distance: 100 km 

// Case 4: Return NaN (missing more than one parameter)
printOut(calculateSpeedTimeDistance(100, undefined).toString());   // Output: NaN
printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function adjustStringSize(text, maxSize, char, insertBefore) {
    if (text.length >= maxSize) {
        printOut(text);
        return text;
    }
    const difference = maxSize - text.length;
    
    const padding = char.repeat(difference);

    let newText;
    if (insertBefore) {
        newText = padding + text;
    } else {
        newText = text + padding; 
    }

    printOut(newText);
    return newText;
}

adjustStringSize("Mandag", 10, "*", true);  
adjustStringSize("Fredag", 10, "*", false); 
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
function testMathExpression() {
    let leftStart = 1; 
    let rightStart = 3; 
    let numTerms = 2; 
    for (let i = 1; i <= 200; i++) {
        
        let leftSum = 0;
        for (let j = leftStart; j < leftStart + numTerms; j++) {
            leftSum += j;
        }

        
        let rightSum = 0;
        for (let k = rightStart; k < rightStart + numTerms; k++) {
            rightSum += k;
        }

        
        if (leftSum !== rightSum) {
            printOut(`Test failed at line ${i}:`);
            printOut(`Left side: ${leftStart} to ${leftStart + numTerms - 1}, Sum: ${leftSum}`);
            printOut(`Right side: ${rightStart} to ${rightStart + numTerms - 1}, Sum: ${rightSum}`);
            return; 
        }

        
        leftStart = rightStart + numTerms;
        rightStart = leftStart + 1; 
        numTerms++; 
    }

    printOut("Maths fun!");
}

testMathExpression();








/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
function factorial(l) {
        if (l === 0 || l === 1) {
            return 1;
        } else {
            return l * factorial(l - 1);
        }
    }
    
    printOut(factorial(5).toString()); 
    printOut(factorial(6).toString()); 
printOut(newLine);